/**
 * Quadrant Trading LLC — Main Script
 * ====================================
 * Handles:
 *   1. Bilingual text switching (EN ↔ AR) with RTL layout
 *   2. Mobile hamburger menu toggle
 *   3. Scroll-triggered fade-in animations (Intersection Observer)
 *   4. Contact form validation and success feedback
 *   5. Sticky nav shadow on scroll
 *   6. Smooth scroll for anchor links (+ close mobile menu on click)
 *
 * All user-facing strings are stored in the `translations` object below.
 * To update copy, edit the corresponding `en` and `ar` values.
 */

/* ------------------------------------------------------------------
   TRANSLATIONS
   Each key matches a data-i18n attribute in index.html.
   ------------------------------------------------------------------ */
const translations = {
    /* -- Navigation -- */
    navAbout: { en: 'About', ar: 'من نحن' },
    navServices: { en: 'Services', ar: 'خدماتنا' },
    navWhyUs: { en: 'Why Us', ar: 'لماذا نحن' },
    navContact: { en: 'Contact', ar: 'اتصل بنا' },

    /* -- Hero -- */
    heroHeadline: {
        en: 'Oilfield Equipment & Supply Solutions — Rooted in the UAE, Built for the Gulf',
        ar: 'حلول معدات وتوريدات حقول النفط — بجذور إماراتية، وبناء خليجي'
    },
    heroSubheadline: {
        en: 'Equipment trading, rental, and parts supply for operators and service companies across the region.',
        ar: 'تجارة المعدات والتأجير وتوريد قطع الغيار لشركات التشغيل والخدمات في جميع أنحاء المنطقة.'
    },
    heroCtaPrimary: { en: 'Request a Quote', ar: 'طلب عرض سعر' },
    heroCtaSecondary: { en: 'Our Services', ar: 'خدماتنا' },

    /* -- About -- */
    aboutTitle: { en: 'About Us', ar: 'من نحن' },
    aboutText: {
        en: 'Quadrant Trading LLC is a UAE-based oilfield equipment and supply company operating out of Hamriyah Free Zone, Sharjah. With hands-on experience in the oil and gas sector — including completed projects for major operators — we provide practical, cost-effective solutions for equipment needs across the Gulf region.',
        ar: 'شركة كوادرنت للتجارة ذ.م.م هي شركة إماراتية متخصصة في معدات وتوريدات حقول النفط، تعمل من المنطقة الحرة بالحمرية في الشارقة. بفضل خبرتنا العملية في قطاع النفط والغاز — بما في ذلك مشاريع منجزة لصالح كبرى الشركات المشغّلة — نقدم حلولاً عملية وفعّالة من حيث التكلفة لتلبية احتياجات المعدات في منطقة الخليج.'
    },
    badgeLocation: { en: 'Hamriyah Free Zone, UAE', ar: 'المنطقة الحرة بالحمرية، الإمارات' },
    badgeRegion: { en: 'Serving the Gulf Region', ar: 'نخدم منطقة الخليج' },
    badgeTrack: { en: 'Proven Track Record with Major Operators', ar: 'سجل حافل مع كبرى الشركات المشغّلة' },

    /* -- Services -- */
    servicesTitle: { en: 'What We Offer', ar: 'ما نقدمه' },
    serviceTradeTitle: { en: 'Equipment Trading', ar: 'تجارة المعدات' },
    serviceTradeDesc: {
        en: 'Sourcing, refurbishing, and supplying used oilfield equipment — including coil tubing units and pump trucks — imported from Europe and the USA.',
        ar: 'توفير وتجديد وتوريد معدات حقول النفط المستعملة — بما في ذلك وحدات الأنابيب الملفوفة وشاحنات الضخ — المستوردة من أوروبا والولايات المتحدة.'
    },
    serviceRentalTitle: { en: 'Equipment Rental', ar: 'تأجير المعدات' },
    serviceRentalDesc: {
        en: 'Flexible short and long-term rental of refurbished well intervention and production equipment, maintained to operational standards.',
        ar: 'تأجير مرن قصير وطويل الأجل لمعدات التدخل في الآبار ومعدات الإنتاج المجددة، والتي يتم صيانتها وفقاً للمعايير التشغيلية.'
    },
    servicePartsTitle: { en: 'Parts & Consumables Supply', ar: 'توريد قطع الغيار والمستهلكات' },
    servicePartsDesc: {
        en: 'Oilfield-grade components and consumables including seals and o-rings, available on inquiry with fast local delivery.',
        ar: 'مكونات ومستهلكات بمواصفات حقول النفط بما في ذلك الموانع الحلقية والأختام، متوفرة عند الطلب مع توصيل محلي سريع.'
    },
    servicesNote: {
        en: 'Additional services available upon inquiry — contact us to discuss your requirements.',
        ar: 'خدمات إضافية متاحة عند الطلب — تواصل معنا لمناقشة متطلباتكم.'
    },

    /* -- Why Us -- */
    whyTitle: { en: 'Why Quadrant', ar: 'لماذا كوادرنت' },
    whyLocalTitle: { en: 'UAE-Based Operations', ar: 'عمليات مقرها الإمارات' },
    whyLocalDesc: {
        en: 'Local presence in Hamriyah Free Zone means faster delivery and regional support.',
        ar: 'تواجدنا المحلي في المنطقة الحرة بالحمرية يعني توصيلاً أسرع ودعماً إقليمياً.'
    },
    whySourcingTitle: { en: 'Direct Sourcing', ar: 'توريد مباشر' },
    whySourcingDesc: {
        en: 'Equipment procured directly from Europe and the US, inspected and refurbished before supply.',
        ar: 'معدات يتم شراؤها مباشرة من أوروبا والولايات المتحدة، ويتم فحصها وتجديدها قبل التوريد.'
    },
    whyFlexTitle: { en: 'Flexible Arrangements', ar: 'ترتيبات مرنة' },
    whyFlexDesc: {
        en: 'We offer trading, rental, or consignment — structured around your project needs.',
        ar: 'نقدم خيارات البيع والتأجير والشحن بالأمانة — مصممة وفقاً لاحتياجات مشروعكم.'
    },
    whyTechTitle: { en: 'Technical Background', ar: 'خلفية تقنية' },
    whyTechDesc: {
        en: 'Our team brings hands-on oilfield and engineering experience to every engagement.',
        ar: 'يتمتع فريقنا بخبرة عملية في حقول النفط والهندسة في كل مشروع.'
    },

    /* -- Contact -- */
    contactTitle: { en: 'Get in Touch', ar: 'تواصل معنا' },
    contactIntro: {
        en: "Tell us what you need and we'll get back to you within 24 hours.",
        ar: 'أخبرنا بما تحتاجه وسنعود إليك خلال 24 ساعة.'
    },
    formName: { en: 'Full Name', ar: 'الاسم الكامل' },
    formCompany: { en: 'Company Name', ar: 'اسم الشركة' },
    formEmail: { en: 'Email Address', ar: 'البريد الإلكتروني' },
    formPhone: { en: 'Phone Number', ar: 'رقم الهاتف' },
    formInterest: { en: 'Area of Interest', ar: 'مجال الاهتمام' },
    formInterestDefault: { en: 'Select an option', ar: 'اختر خياراً' },
    formInterestPurchase: { en: 'Equipment Purchase', ar: 'شراء معدات' },
    formInterestRental: { en: 'Equipment Rental', ar: 'تأجير معدات' },
    formInterestParts: { en: 'Parts & Consumables', ar: 'قطع غيار ومستهلكات' },
    formInterestGeneral: { en: 'General Inquiry', ar: 'استفسار عام' },
    formMessage: { en: 'Message', ar: 'الرسالة' },
    formOptional: { en: '(optional)', ar: '(اختياري)' },
    formSubmit: { en: 'Send Inquiry', ar: 'إرسال الاستفسار' },
    formSuccessMsg: {
        en: "Thank you! Your inquiry has been submitted. We'll get back to you within 24 hours.",
        ar: 'شكراً لك! تم إرسال استفسارك بنجاح. سنعود إليك خلال 24 ساعة.'
    },
    contactEmailLabel: { en: 'Email', ar: 'البريد الإلكتروني' },
    contactPhoneLabel: { en: 'Phone', ar: 'الهاتف' },
    contactWhatsAppLabel: { en: 'WhatsApp', ar: 'واتساب' },
    contactAddressLabel: { en: 'Address', ar: 'العنوان' },
    contactAddress: { en: 'Hamriyah Free Zone, Sharjah, UAE', ar: 'المنطقة الحرة بالحمرية، الشارقة، الإمارات' },

    /* -- Footer -- */
    footerCopyright: { en: '© 2025 Quadrant Trading LLC. All rights reserved.', ar: '© 2025 شركة كوادرنت للتجارة ذ.م.م. جميع الحقوق محفوظة.' },
    footerLicense: { en: 'Trade License No.: [placeholder]', ar: 'رقم الرخصة التجارية: [يُحدّد لاحقاً]' },
};


/* ------------------------------------------------------------------
   DOM REFERENCES
   ------------------------------------------------------------------ */
const html = document.documentElement;
const body = document.body;
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const langToggle = document.getElementById('langToggle');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

/** Tracks the currently active language — defaults to English */
let currentLang = 'en';


/* ------------------------------------------------------------------
   1. LANGUAGE TOGGLE
   Swaps all data-i18n text, flips dir, and toggles the Arabic
   font class on <body>.
   ------------------------------------------------------------------ */

/**
 * Sets the page language and layout direction.
 * @param {string} lang — 'en' or 'ar'
 */
function setLanguage(lang) {
    currentLang = lang;

    // Set direction and lang attribute
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    html.setAttribute('lang', lang);

    // Toggle Arabic font class
    if (lang === 'ar') {
        body.classList.add('lang-ar');
    } else {
        body.classList.remove('lang-ar');
    }

    // Update all elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        const key = el.getAttribute('data-i18n');
        if (translations[key] && translations[key][lang]) {
            // For <option> elements, update text content instead of innerHTML
            // to avoid rendering issues in <select> dropdowns
            if (el.tagName === 'OPTION') {
                el.textContent = translations[key][lang];
            } else {
                el.innerHTML = translations[key][lang];
            }
        }
    });

    // Update active state on language toggle button
    langToggle.querySelectorAll('.lang-option').forEach(function (opt) {
        if (opt.getAttribute('data-lang') === lang) {
            opt.classList.add('lang-active');
        } else {
            opt.classList.remove('lang-active');
        }
    });

    // Update the meta description for SEO
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content',
            lang === 'ar'
                ? 'شركة كوادرنت للتجارة ذ.م.م — تجارة وتأجير وتوريد معدات حقول النفط من المنطقة الحرة بالحمرية، الإمارات.'
                : 'Quadrant Trading LLC — Oilfield equipment trading, rental, and parts supply from the UAE\'s Hamriyah Free Zone. Serving the Gulf region.'
        );
    }

    // Update page title
    document.title = lang === 'ar'
        ? 'شركة كوادرنت للتجارة ذ.م.م — معدات وتوريدات حقول النفط'
        : 'Quadrant Trading LLC — Oilfield Equipment & Supply';
}

// Attach click handler to the language toggle button
langToggle.addEventListener('click', function () {
    setLanguage(currentLang === 'en' ? 'ar' : 'en');
});


/* ------------------------------------------------------------------
   2. MOBILE HAMBURGER MENU
   ------------------------------------------------------------------ */
hamburger.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen.toString());
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});


/* ------------------------------------------------------------------
   3. SCROLL-TRIGGERED FADE-IN ANIMATION
   Uses Intersection Observer to add the .visible class when
   elements with .animate-on-scroll enter the viewport.
   ------------------------------------------------------------------ */
(function initScrollAnimations() {
    const targets = document.querySelectorAll('.animate-on-scroll');

    // If IntersectionObserver is not supported, show all immediately
    if (!('IntersectionObserver' in window)) {
        targets.forEach(function (el) { el.classList.add('visible'); });
        return;
    }

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing once animated in — no need to re-trigger
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Trigger when 15% of the element is visible
        threshold: 0.15,
        // Start animation slightly before element enters viewport
        rootMargin: '0px 0px -40px 0px'
    });

    targets.forEach(function (el) { observer.observe(el); });
})();


/* ------------------------------------------------------------------
   4. STICKY NAV SHADOW ON SCROLL
   Adds a subtle shadow to the navbar once the user scrolls
   past the first few pixels.
   ------------------------------------------------------------------ */
window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, { passive: true });


/* ------------------------------------------------------------------
   5. CONTACT FORM HANDLING
   Client-side validation + success message display.
   No backend — form just shows a success state on valid submit.
   ------------------------------------------------------------------ */
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Check HTML5 validation constraints on all required fields
    if (!contactForm.checkValidity()) {
        // Trigger the browser's native validation UI
        contactForm.reportValidity();
        return;
    }

    // Gather form data
    const formData = new FormData(contactForm);
    const fullName = formData.get('fullName') || '';
    const companyName = formData.get('companyName') || '';
    const email = formData.get('email') || '';
    const phone = formData.get('phone') || '';
    const message = formData.get('message') || '';

    // Get the display text of the selected interest
    const interestSelect = document.getElementById('interest');
    const interestText = interestSelect.options[interestSelect.selectedIndex].text;

    // Construct email subject and body
    const emailSubject = `${interestText} - ${fullName}`;
    const emailBody = `${companyName}
${email}
${phone}

----------------------------------------

${message}`;

    // Trigger the mailto link to open the user's email client
    window.location.href = `mailto:sales@quadrantdubai.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Show success message
    formSuccess.classList.add('show');

    // Reset the form
    contactForm.reset();

    // Scroll the success message into view
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Hide success message after 8 seconds
    setTimeout(function () {
        formSuccess.classList.remove('show');
    }, 8000);
});


/* ------------------------------------------------------------------
   6. SMOOTH SCROLL FOR ANCHOR LINKS
   Enhances default anchor behavior for consistent cross-browser
   smooth scrolling with an offset for the fixed navbar.
   ------------------------------------------------------------------ */
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return; // Skip bare # links (logo)

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();

        // Calculate offset to account for fixed navbar height
        const navHeight = navbar.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
