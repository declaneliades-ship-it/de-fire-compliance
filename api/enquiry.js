import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, organisation, sector, doors, service, message, source, estimatedPrice } = req.body || {};

  // --- Validation ---
  if (!name || typeof name !== 'string' || name.trim().length < 1) {
    return res.status(400).json({ error: 'Name is required' });
  }
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email address is required' });
  }

  const sanitise = (val) => (typeof val === 'string' ? val.trim().slice(0, 1000) : '');

  const row = {
    name: sanitise(name),
    email: sanitise(email),
    phone: sanitise(phone),
    organisation: sanitise(organisation),
    sector: sanitise(sector),
    doors: sanitise(doors),
    service: sanitise(service),
    message: typeof message === 'string' ? message.trim().slice(0, 5000) : '',
    source: sanitise(source),
  };

  // --- Store in Supabase ---
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
  );

  const { error: dbError } = await supabase.from('enquiries').insert(row);

  if (dbError) {
    console.error('Supabase insert error:', dbError);
    return res.status(500).json({ error: 'Failed to store enquiry' });
  }

  // --- Send emails via Resend ---
  const resend = new Resend(process.env.RESEND_API_KEY);
  const adminEmail = process.env.ADMIN_EMAIL || 'info@defirecompliance.co.uk';

  const sectorLabel = row.sector ? row.sector.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : 'Not specified';
  const serviceLabel = row.service ? row.service.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : 'Not specified';

  // Admin notification
  try {
    await resend.emails.send({
      from: 'DE Fire Compliance <noreply@defirecompliance.co.uk>',
      to: adminEmail,
      subject: `New Enquiry: ${row.name} — ${serviceLabel}`,
      html: `
        <h2 style="margin:0 0 16px">New Enquiry</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          <tr><td style="padding:6px 16px 6px 0;font-weight:bold;color:#64748b">Name</td><td style="padding:6px 0">${escapeHtml(row.name)}</td></tr>
          <tr><td style="padding:6px 16px 6px 0;font-weight:bold;color:#64748b">Email</td><td style="padding:6px 0"><a href="mailto:${escapeHtml(row.email)}">${escapeHtml(row.email)}</a></td></tr>
          <tr><td style="padding:6px 16px 6px 0;font-weight:bold;color:#64748b">Phone</td><td style="padding:6px 0"><a href="tel:${escapeHtml(row.phone)}">${escapeHtml(row.phone)}</a></td></tr>
          <tr><td style="padding:6px 16px 6px 0;font-weight:bold;color:#64748b">Organisation</td><td style="padding:6px 0">${escapeHtml(row.organisation || '—')}</td></tr>
          <tr><td style="padding:6px 16px 6px 0;font-weight:bold;color:#64748b">Sector</td><td style="padding:6px 0">${escapeHtml(sectorLabel)}</td></tr>
          <tr><td style="padding:6px 16px 6px 0;font-weight:bold;color:#64748b">Approx Doors</td><td style="padding:6px 0">${escapeHtml(row.doors || '—')}</td></tr>
          <tr><td style="padding:6px 16px 6px 0;font-weight:bold;color:#64748b">Service</td><td style="padding:6px 0">${escapeHtml(serviceLabel)}</td></tr>
          <tr><td style="padding:6px 16px 6px 0;font-weight:bold;color:#64748b">Source Page</td><td style="padding:6px 0">${escapeHtml(row.source || '/')}</td></tr>
          ${estimatedPrice ? `<tr><td style="padding:6px 16px 6px 0;font-weight:bold;color:#64748b">Estimated Price</td><td style="padding:6px 0;font-size:16px;font-weight:700;color:#059669">${escapeHtml(estimatedPrice)}</td></tr>` : ''}
        </table>
        ${row.message ? `<h3 style="margin:20px 0 8px">Message</h3><p style="white-space:pre-wrap;font-size:14px;color:#1e293b">${escapeHtml(row.message)}</p>` : ''}
      `,
    });
  } catch (emailErr) {
    console.error('Admin email error:', emailErr);
    // Non-blocking — lead is already stored
  }

  // User confirmation
  try {
    await resend.emails.send({
      from: 'DE Fire Compliance <noreply@defirecompliance.co.uk>',
      to: row.email,
      subject: 'Thank you for your enquiry — DE Fire Compliance',
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1e293b">
          <h2 style="color:#b91c1c;margin-bottom:8px">Thank You, ${escapeHtml(row.name)}</h2>
          ${estimatedPrice ? `<div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:16px 20px;margin:16px 0;text-align:center"><p style="margin:0 0 4px;font-size:13px;color:#6b7280">Your estimated project cost</p><p style="margin:0;font-size:28px;font-weight:700;color:#059669">${escapeHtml(estimatedPrice)}</p><p style="margin:4px 0 0;font-size:12px;color:#9ca3af">Final price confirmed after a brief site discussion</p></div>` : ''}
          <p style="font-size:15px;line-height:1.7;color:#475569">We've received your quote request and will be in touch within <strong>24 hours</strong> with a full written quote${estimatedPrice ? ' confirming this estimate' : ''}.</p>
          ${row.message && row.message.includes('Callback requested: Yes') ? '<div style=\"background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:14px 18px;margin:16px 0\"><p style=\"margin:0;font-size:14px;color:#15803d\"><strong>&#9742; Callback requested</strong> &mdash; we will call you within 24 hours to walk through your quote and answer any questions.</p></div>' : ''}
          <hr style=\"border:none;border-top:1px solid #e2e8f0;margin:24px 0\">
          <p style=\"font-size:14px;color:#475569\">Questions in the meantime? Just reply to this email or call us: <strong><a href=\"tel:+447770871782\" style=\"color:#b91c1c\">+44 7770 871782</a></strong></p>
          <p style="font-size:13px;color:#94a3b8;margin-top:24px">DE Fire Compliance — Fire door inspections, compartmentation surveys, and compliance support. FDIS-qualified reports.<br>A trading name of DE Site Solutions Ltd. Company number: 16474802.</p>
        </div>
      `,
    });
  } catch (emailErr) {
    console.error('User confirmation email error:', emailErr);
    // Non-blocking
  }

  return res.status(200).json({ success: true });
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
