import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, organisation, sector, doors, service, message, source } = req.body || {};

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
          <p style="font-size:15px;line-height:1.7;color:#475569">We've received your enquiry and will review your requirements promptly. You can expect a response within <strong>24 hours</strong> with a clear, no-obligation quote.</p>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0">
          <p style="font-size:14px;color:#475569">In the meantime, if you have any questions feel free to call us on <strong>07500 858 634</strong> or reply to this email.</p>
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
