/* ===================================
   DE Fire Compliance — Main JS
   =================================== */

// Scroll to top on page load/refresh (override browser scroll restoration + hash anchors)
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
// Clear any hash that would cause the browser to jump to an anchor
if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
}
window.scrollTo(0, 0);
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;
window.addEventListener('load', function () {
    setTimeout(function () {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 0);
});
// Also catch DOMContentLoaded for early scroll
document.addEventListener('DOMContentLoaded', function () {
    window.scrollTo(0, 0);
});

document.addEventListener('DOMContentLoaded', function () {

    // --- Navbar scroll effect ---
    var navbar = document.getElementById('navbar');

    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // --- Mobile nav toggle ---
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.getElementById('navLinks');

    // Create overlay element for mobile menu
    var navOverlay = document.createElement('div');
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);

    function closeMenu() {
        navLinks.classList.remove('active');
        navOverlay.classList.remove('active');
    }

    function openMenu() {
        navLinks.classList.add('active');
        navOverlay.classList.add('active');
    }

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            if (navLinks.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        navLinks.addEventListener('click', function (e) {
            e.stopPropagation();
        });

        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                closeMenu();
            });
        });

        navOverlay.addEventListener('click', function () {
            closeMenu();
        });

        document.addEventListener('click', function () {
            closeMenu();
        });
    }

    // --- FAQ accordion ---
    var faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
        var question = item.querySelector('.faq-question');

        question.addEventListener('click', function () {
            var isActive = item.classList.contains('active');

            faqItems.forEach(function (other) {
                other.classList.remove('active');
                other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            if (!isActive) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // --- Smooth scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var navHeight = navbar.offsetHeight;
                var targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

                window.scrollTo({
                    top: targetPos,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Scroll fade-in animations ---
    var fadeElements = document.querySelectorAll(
        '.service-card, .sector-card, .process-step, .faq-item, .offer-card'
    );

    fadeElements.forEach(function (el) {
        el.classList.add('fade-in');
    });

    function checkFadeIn() {
        var windowHeight = window.innerHeight;
        fadeElements.forEach(function (el) {
            var rect = el.getBoundingClientRect();
            if (rect.top < windowHeight * 0.9) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkFadeIn, { passive: true });
    checkFadeIn();

    // --- Contact form handling ---
    var contactForm = document.getElementById('contactForm');

    if (contactForm) {
        var formError = document.createElement('div');
        formError.className = 'form-error';
        contactForm.prepend(formError);

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            var formData = new FormData(contactForm);
            var submitBtn = contactForm.querySelector('.btn-submit');

            var name = (formData.get('name') || '').trim();
            var email = (formData.get('email') || '').trim();
            var phone = (formData.get('phone') || '').trim();

            // Validation
            formError.style.display = 'none';

            if (!name || !email || !phone) {
                formError.textContent = 'Please fill in all required fields.';
                formError.style.display = 'block';
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                formError.textContent = 'Please enter a valid email address.';
                formError.style.display = 'block';
                return;
            }

            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            var payload = {
                name: name,
                email: email,
                phone: phone,
                organisation: (formData.get('organisation') || '').trim(),
                sector: formData.get('sector') || '',
                doors: (formData.get('doors') || '').trim(),
                service: formData.get('service') || '',
                message: (formData.get('message') || '').trim(),
                source: window.location.pathname
            };

            fetch('/api/enquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
            .then(function (res) {
                if (!res.ok) throw new Error('Server error');
                return res.json();
            })
            .then(function () {
                contactForm.innerHTML =
                    '<div class="form-success">' +
                    '<h3>Enquiry Received</h3>' +
                    '<p>Thanks for getting in touch. We\'ll review your requirements and respond within 24 hours with a no-obligation quote.</p>' +
                    '</div>';
                contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
            })
            .catch(function () {
                submitBtn.textContent = 'Send Enquiry';
                submitBtn.disabled = false;
                formError.textContent = 'Something went wrong. Please try again or call us on +44 7770 871782.';
                formError.style.display = 'block';
            });
        });
    }

});
