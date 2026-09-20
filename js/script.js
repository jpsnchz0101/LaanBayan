// Shared scripts for resident portal and admin dashboard

// Seed data when localStorage is empty
const DEFAULT_SERVICES = [
  { id: 'residency', name: 'Certificate of Residency', available: true },
  { id: 'clearance', name: 'Barangay Clearance', available: true },
  { id: 'indigency', name: 'Certificate of Indigency', available: true },
  { id: 'low_income', name: 'Certificate of Low-Income', available: true },
  { id: 'business_clearance', name: 'Business Clearance', available: false },
  { id: 'job_seeker', name: 'First Time Job Seeker Certificate', available: true },
  { id: 'others', name: 'Others', available: true }
];

const SERVICE_REQUIREMENTS = {
  residency: 'Valid Government ID, Proof of Billing or Land Title, 6+ Months in Barangay',
  clearance: 'Valid ID, Proof of Residency (Billing), 2×2 Recent Photo',
  indigency: 'Valid ID, Certificate of Non-Ownership or Low-Income Proof, Sworn Statement',
  low_income: 'Valid ID, Payslip or Affidavit of Low Income, Proof of Residency',
  business_clearance: 'DTI / SEC Registration, Barangay Clearance, Lease Agreement or Land Title',
  job_seeker: 'Barangay Certification of First-Time Jobseeker, Valid ID, Oath of Undertaking',
  others: 'Valid ID, Letter of Request or Supporting Agency Forms'
};

const DEFAULT_APPOINTMENTS = [
  {
    id: 'apt_1',
    name: 'Mark Macalintal',
    age: '28',
    address: 'Purok 2, Barangay Ugac',
    zone: 'Zone 4',
    street: 'Mabini St.',
    residencyDuration: '5 Years',
    contact: '09955178593',
    service: 'Barangay Clearance',
    purpose: 'Job application requirement at private firm',
    date: 'Friday, Sep 18, 2026',
    timeSlot: 'Morning (8:00 AM - 11:30 AM)',
    queueNumber: '01-003',
    status: 'in_queue',
    submittedAt: new Date(Date.now() - 3600000).toISOString()
  },
  {
    id: 'apt_2',
    name: 'Maria Santos',
    age: '42',
    address: 'Purok 1, Barangay Ugac',
    zone: 'Zone 2',
    street: 'Rizal St.',
    residencyDuration: '12 Years',
    contact: '09189876543',
    service: 'Certificate of Indigency',
    purpose: 'Medical and hospitalization financial assistance',
    date: 'Wednesday, Sep 16, 2026',
    timeSlot: 'Morning (8:00 AM - 11:30 AM)',
    queueNumber: '01-001',
    status: 'done',
    submittedAt: new Date(Date.now() - 86400000).toISOString()
  },
  {
    id: 'apt_3',
    name: 'Pedro Reyes',
    age: '35',
    address: 'Purok 3, Barangay Ugac',
    zone: 'Zone 1',
    street: 'Bonifacio St.',
    residencyDuration: '3 Years',
    contact: '09201112233',
    service: 'Business Clearance',
    purpose: 'Neighborhood grocery & sari-sari store permit',
    date: 'Tuesday, Sep 15, 2026',
    timeSlot: 'Afternoon (1:00 PM - 4:30 PM)',
    queueNumber: '01-002',
    status: 'cancelled',
    submittedAt: new Date(Date.now() - 172800000).toISOString()
  }
];

const DEFAULT_RESIDENTS = [
  {
    id: 'res_1',
    name: 'Mark Macalintal',
    email: 'mark.macalintal@gmail.com',
    age: '28',
    address: 'Purok 2, Barangay Ugac',
    zone: 'Zone 4',
    street: 'Mabini St.',
    residencyDuration: '5 Years',
    contact: '09955178593',
    appointmentCount: 1
  },
  {
    id: 'res_2',
    name: 'Juan Dela Cruz',
    email: 'juan.delacruz@gmail.com',
    age: '31',
    address: 'Purok 4, Barangay Ugac',
    zone: 'Zone 3',
    street: 'Luna St.',
    residencyDuration: '8 Years',
    contact: '09171234567',
    appointmentCount: 2
  },
  {
    id: 'res_3',
    name: 'Maria Santos',
    email: 'maria.santos@gmail.com',
    age: '42',
    address: 'Purok 1, Barangay Ugac',
    zone: 'Zone 2',
    street: 'Rizal St.',
    residencyDuration: '12 Years',
    contact: '09189876543',
    appointmentCount: 1
  },
  {
    id: 'res_4',
    name: 'Pedro Reyes',
    email: 'pedro.reyes@gmail.com',
    age: '35',
    address: 'Purok 3, Barangay Ugac',
    zone: 'Zone 1',
    street: 'Bonifacio St.',
    residencyDuration: '3 Years',
    contact: '09201112233',
    appointmentCount: 1
  }
];

const DEFAULT_ANNOUNCEMENTS = [
  {
    id: 'ann_1',
    title: 'Social Pension Payout',
    message: 'For Senior Citizens (September 2026 @ 10 AM) Venue: Reyes Gym. Please bring your senior citizen ID and barangay certificate.'
  },
  {
    id: 'ann_2',
    title: 'Community Clean-Up Drive — July 20, 2026',
    message: 'Meet at the barangay hall covered court at 6:00 AM. Bring gloves and reusable bottles. Purok leaders will coordinate on-site.'
  }
];

const DEFAULT_STAFF = [
  { id: 'st_1', name: 'VICSON', position: 'OFFICER OF THE DAY', present: true },
  { id: 'st_2', name: 'HON. ROBERTO MENDOZA', position: 'BARANGAY CAPTAIN', present: true },
  { id: 'st_3', name: 'ELENA RAMOS', position: 'BARANGAY SECRETARY', present: false }
];

const DEFAULT_REPORTS = [
  {
    id: 'RPT-1042',
    category: 'Queue & Waiting Time',
    subject: 'Window 2 verification was slow during morning peak',
    details: 'The verification queue halted for 30 minutes due to system reconnection.',
    contact: '09171234567',
    date: 'Sep 18, 2026',
    status: 'In Review by Barangay Staff'
  },
  {
    id: 'RPT-1039',
    category: 'Portal / System Technical Bug',
    subject: 'Time slot selection dropdown did not load on mobile Safari',
    details: 'The afternoon slot button was unresponsive when booking on iOS 16 mobile browser.',
    contact: '09955178593',
    date: 'Sep 17, 2026',
    status: 'In Progress — Action Initiated'
  },
  {
    id: 'RPT-1025',
    category: 'Facility & Cleanliness',
    subject: 'Waiting area water dispenser was empty',
    details: 'Residents waiting in line during afternoon had no potable drinking water.',
    contact: '09189876543',
    date: 'Sep 16, 2026',
    status: 'Resolved — Corrective Action Completed'
  }
];

// HTML entity escaping utility to prevent XSS vulnerabilities
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// CSRF token retrieval helper
function getCsrfToken() {
  const tokenInput = document.querySelector('input[name="csrf_token"], .csrf-token-input');
  return tokenInput ? tokenInput.value : '';
}

// Quick helpers for localStorage reads and writes
function getStorageItem(key, defaultVal) {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : defaultVal;
  } catch (e) {
    return defaultVal;
  }
}

function setStorageItem(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {
    console.error(e);
  }
}

// Preload sample records if the user opens the app for the first time
function initDataStore() {
  if (!localStorage.getItem('lb_services')) setStorageItem('lb_services', DEFAULT_SERVICES);
  if (!localStorage.getItem('lb_appointments')) setStorageItem('lb_appointments', DEFAULT_APPOINTMENTS);
  if (!localStorage.getItem('lb_residents')) setStorageItem('lb_residents', DEFAULT_RESIDENTS);
  if (!localStorage.getItem('lb_announcements')) setStorageItem('lb_announcements', DEFAULT_ANNOUNCEMENTS);
  if (!localStorage.getItem('lb_staff')) setStorageItem('lb_staff', DEFAULT_STAFF);
  if (!localStorage.getItem('lb_reports')) setStorageItem('lb_reports', DEFAULT_REPORTS);
  if (!localStorage.getItem('lb_current_user')) {
    setStorageItem('lb_current_user', {
      name: 'Juan Dela Cruz',
      age: '31',
      address: 'Purok 4, Barangay Ugac',
      zone: 'Zone 3',
      street: 'Luna St.',
      residencyDuration: '8 Years',
      contact: '09171234567'
    });
  }
}

initDataStore();

// Fade in sections as the user scrolls down
const sections = document.querySelectorAll('.page-section');
if (sections.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.15 });
  sections.forEach((section) => observer.observe(section));
}

// Toggle password visibility on click
document.querySelectorAll('.toggle-password').forEach((btn) => {
  const input = btn.parentElement.querySelector('input');
  if (!input) return;
  btn.addEventListener('click', () => {
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    btn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
  });
});

// Keep the current date and time updated in the top bar
function updateDashClock() {
  const clockEls = document.querySelectorAll('.dash-clock, .admin-clock');
  if (!clockEls.length) return;

  const now = new Date();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const dateNum = now.getDate();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const period = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  const formatted = `${dayName}, ${monthName} ${dateNum} · ${hours}:${minutes} ${period}`;
  clockEls.forEach((el) => { el.textContent = formatted; });
}
updateDashClock();
setInterval(updateDashClock, 1000 * 30);

// Expand or collapse the sidebar
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const sidebarOverlay = document.getElementById('sidebarOverlay');

function setMobileSidebar(open) {
  if (!sidebar) return;
  const willOpen = typeof open === 'boolean' ? open : !sidebar.classList.contains('mobile-open');
  sidebar.classList.toggle('mobile-open', willOpen);
  if (sidebarOverlay) {
    sidebarOverlay.classList.toggle('active', willOpen);
  }
}

if (sidebar && sidebarToggle) {
  sidebarToggle.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      setMobileSidebar(false);
    } else {
      const isExpanded = sidebar.classList.toggle('expanded');
      sidebarToggle.setAttribute('aria-expanded', isExpanded);
    }
  });
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    setMobileSidebar(true);
  });
}

if (sidebarOverlay) {
  sidebarOverlay.addEventListener('click', () => {
    setMobileSidebar(false);
  });
}

// Handle resident sign-up and sign-in

const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById('btnSubmitRegister') || registerForm.querySelector('button[type="submit"]');
    const fullName = document.getElementById('fullName')?.value.trim();
    const age = document.getElementById('age')?.value.trim();
    const address = document.getElementById('address')?.value.trim();
    const zone = document.getElementById('zone')?.value.trim();
    const street = document.getElementById('street')?.value.trim();
    const residencyDuration = document.getElementById('residencyDuration')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const contact = document.getElementById('contact')?.value.trim();
    const password = document.getElementById('regPassword')?.value;
    const confirmPassword = document.getElementById('confirmPassword')?.value;
    const registerError = document.getElementById('registerError');

    if (password !== confirmPassword) {
      if (registerError) {
        registerError.textContent = 'Passwords do not match. Please verify.';
        registerError.hidden = false;
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('btn-loading');
      }
      return;
    }

    if (!fullName || !email || !contact || !password) {
      if (registerError) {
        registerError.textContent = 'Please fill out all required fields.';
        registerError.hidden = false;
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('btn-loading');
      }
      return;
    }

    // Hide any previous error and trigger button loading spinner
    if (registerError) registerError.hidden = true;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.classList.add('btn-loading');
    }

    // Simulated async validation feedback
    setTimeout(() => {
      const newUser = {
        id: 'res_' + Date.now(),
        name: fullName,
        email: email,
        age: age,
        address: address,
        zone: zone,
        street: street,
        residencyDuration: residencyDuration,
        contact: contact,
        appointmentCount: 0
      };

      // Save as current user
      setStorageItem('lb_current_user', newUser);

      // Save to residents list
      const residents = getStorageItem('lb_residents', DEFAULT_RESIDENTS);
      residents.push(newUser);
      setStorageItem('lb_residents', residents);

      // Redirect to resident dashboard
      window.location.href = 'dashb.html';
    }, 700);
  });
}

// Handle Privacy & Policy modal on registration page
const openPrivacyModalBtn = document.getElementById('openPrivacyModal');
const privacyModal = document.getElementById('privacyModal');
const closePrivacyModalBtn = document.getElementById('closePrivacyModal');
const btnPolicyClose = document.getElementById('btnPolicyClose');
const btnPolicyAccept = document.getElementById('btnPolicyAccept');
const agreeTermsCheckbox = document.getElementById('agreeTerms');

if (privacyModal) {
  const openModal = () => {
    privacyModal.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    privacyModal.hidden = true;
    document.body.style.overflow = '';
  };

  if (openPrivacyModalBtn) {
    openPrivacyModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  if (closePrivacyModalBtn) {
    closePrivacyModalBtn.addEventListener('click', closeModal);
  }

  if (btnPolicyClose) {
    btnPolicyClose.addEventListener('click', closeModal);
  }

  if (btnPolicyAccept) {
    btnPolicyAccept.addEventListener('click', () => {
      if (agreeTermsCheckbox) {
        agreeTermsCheckbox.checked = true;
      }
      closeModal();
    });
  }

  privacyModal.addEventListener('click', (e) => {
    if (e.target === privacyModal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !privacyModal.hidden) {
      closeModal();
    }
  });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
  const toggleResidentPassBtn = document.getElementById('togglePassword');
  if (toggleResidentPassBtn) {
    toggleResidentPassBtn.addEventListener('click', () => {
      const passInput = document.getElementById('password');
      if (passInput) {
        const isPass = passInput.type === 'password';
        passInput.type = isPass ? 'text' : 'password';
        toggleResidentPassBtn.setAttribute('aria-label', isPass ? 'Hide password' : 'Show password');
      }
    });
  }

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const submitBtn = document.getElementById('btnProceedLogin');

    const loginInput = document.getElementById('loginUser') || document.getElementById('brgy-id');
    const loginUser = loginInput?.value.trim();

    if (!loginUser) {
      if (loginInput) loginInput.focus();
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.classList.add('btn-loading');
    }

    // Simulated async validation feedback
    setTimeout(() => {
      const residents = getStorageItem('lb_residents', DEFAULT_RESIDENTS);
      const cleanInput = loginUser.toLowerCase();
      const cleanDigits = loginUser.replace(/\D/g, '');

      const matched = residents.find(r => 
        (r.email && r.email.toLowerCase() === cleanInput) ||
        (r.contact && (r.contact === loginUser || (cleanDigits.length >= 7 && r.contact.replace(/\D/g, '').endsWith(cleanDigits)))) ||
        (r.name && (r.name.toLowerCase() === cleanInput || r.name.toLowerCase().includes(cleanInput)))
      );

      if (matched) {
        setStorageItem('lb_current_user', matched);
      } else {
        const isEmail = loginUser.includes('@');
        const isNumeric = /^\d+$/.test(loginUser.replace(/[-\s+]/g, ''));
        const newUser = {
          name: isEmail ? loginUser.split('@')[0].replace(/[._]/g, ' ') : (isNumeric ? 'Juan Dela Cruz' : loginUser),
          email: isEmail ? loginUser : '',
          contact: isNumeric ? loginUser : '09171234567',
          age: '28',
          address: 'Purok 4, Barangay Ugac',
          zone: 'Zone 3',
          street: 'Luna St.',
          residencyDuration: '5 Years'
        };
        setStorageItem('lb_current_user', newUser);
      }
      window.location.href = 'dashb.html';
    }, 650);
  });
}

// Pause services marquee on mobile touch so users can read requirements
const marqueeTrack = document.querySelector('.services-marquee-track');
if (marqueeTrack) {
  let touchTimeout;
  marqueeTrack.addEventListener('touchstart', () => {
    marqueeTrack.classList.add('is-paused');
  }, { passive: true });

  marqueeTrack.addEventListener('touchend', () => {
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(() => {
      marqueeTrack.classList.remove('is-paused');
    }, 2500);
  }, { passive: true });
}

// Toggle FAQ accordion items on click
const faqQuestions = document.querySelectorAll('.faq-question');
if (faqQuestions.length > 0) {
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isAlreadyActive = item.classList.contains('active');

      // Close all items first for a clean accordion experience
      document.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('active');
        const questionBtn = el.querySelector('.faq-question');
        if (questionBtn) questionBtn.setAttribute('aria-expanded', 'false');
      });

      // If it wasn't open, open this one
      if (!isAlreadyActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// Handle admin login and check active session
const adminLoginForm = document.getElementById('adminLoginForm');
if (adminLoginForm) {
  const togglePassBtn = document.getElementById('toggleAdminPassword');
  if (togglePassBtn) {
    togglePassBtn.addEventListener('click', () => {
      const passInput = document.getElementById('adminPassword');
      if (passInput) {
        const isPass = passInput.type === 'password';
        passInput.type = isPass ? 'text' : 'password';
      }
    });
  }

  adminLoginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = document.getElementById('btnAdminLoginSubmit');

    const username = document.getElementById('adminUsername')?.value.trim();
    const password = document.getElementById('adminPassword')?.value;
    const errorEl = document.getElementById('adminLoginError');

    // Basic client validation (verifies presence and length before backend session authorization)
    const isValid = Boolean(username && password && password.length >= 3);

    if (btn) {
      btn.disabled = true;
      btn.classList.add('btn-loading');
    }

    setTimeout(() => {
      if (isValid) {
        if (errorEl) errorEl.style.display = 'none';
        sessionStorage.setItem('lb_admin_logged_in', 'true');
        sessionStorage.setItem('lb_admin_name', username || 'Barangay Official');
        window.location.href = 'admin_dashboard.html';
      } else {
        if (errorEl) {
          errorEl.textContent = 'Invalid administrator credentials. Please check your username and password.';
          errorEl.style.display = 'block';
        }
        if (btn) {
          btn.disabled = false;
          btn.classList.remove('btn-loading');
        }
      }
    }, 600);
  });
}

// Redirect back to login if the admin is not signed in
if (window.location.pathname.endsWith('admin_dashboard.html')) {
  if (sessionStorage.getItem('lb_admin_logged_in') !== 'true') {
    window.location.replace('admin_login.html');
  }
}

// Clear admin session when clicking sign out
const adminSignOutLink = document.getElementById('adminSignOutLink');
if (adminSignOutLink) {
  adminSignOutLink.addEventListener('click', function (e) {
    e.preventDefault();
    sessionStorage.removeItem('lb_admin_logged_in');
    sessionStorage.removeItem('lb_admin_name');
    window.location.href = 'admin_login.html';
  });
}

// Switch views when clicking resident sidebar links
document.querySelectorAll('.sidebar-link[data-page]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.sidebar-link[data-page]').forEach((l) => l.classList.remove('active'));
    link.classList.add('active');

    const targetPage = link.dataset.page;
    document.querySelectorAll('.dash-section').forEach((section) => {
      section.classList.toggle('active', section.dataset.section === targetPage);
    });

    if (window.innerWidth <= 768) {
      setMobileSidebar(false);
    }
  });
});

// Render the current service status badges in the resident dashboard
function renderUserServices(services = null) {
  const container = document.getElementById('userServicesList');
  if (!container) return;

  const list = services || getStorageItem('lb_services', DEFAULT_SERVICES);
  container.innerHTML = '';

  list.forEach((s) => {
    const row = document.createElement('div');
    row.className = 'service-row';
    const isAvail = Boolean(s.available);
    row.innerHTML = `
      <span class="service-row-name">${escapeHtml(s.name)}</span>
      <span class="status-pill ${isAvail ? 'status-pill--available' : 'status-pill--unavailable'}">
        ${isAvail ? 'available' : 'unavailable'}
      </span>
    `;
    container.appendChild(row);
  });
}

// Fill date dropdown with the next 14 weekdays
function initBookingDates() {
  const dateSelect = document.getElementById('dateSelect');
  if (!dateSelect) return;

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const now = new Date();

  dateSelect.innerHTML = '<option value="" disabled selected>Pumili ng Petsa</option>';

  for (let i = 1; i <= 14; i++) {
    const slotDate = new Date(now);
    slotDate.setDate(now.getDate() + i);
    if (slotDate.getDay() !== 0) { // Skip Sundays
      const dayName = days[slotDate.getDay()];
      const m = months[slotDate.getMonth()];
      const d = slotDate.getDate();
      const y = slotDate.getFullYear();
      const formatted = `${dayName}, ${m} ${d}, ${y}`;

      const opt = document.createElement('option');
      opt.value = formatted;
      opt.textContent = formatted;
      dateSelect.appendChild(opt);
    }
  }
}

// Select morning or afternoon slot
document.querySelectorAll('.time-slot-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.time-slot-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const hiddenInput = document.getElementById('selectedTimeSlot');
    if (hiddenInput) hiddenInput.value = btn.dataset.slot;
  });
});

// Update requirements note and toggle custom input when service changes
const serviceSelect = document.getElementById('serviceSelect');
const othersInput = document.getElementById('othersInput');
const reqText = document.getElementById('requirementsListText');

if (serviceSelect) {
  serviceSelect.addEventListener('change', () => {
    const val = serviceSelect.value;
    if (val === 'others') {
      if (othersInput) {
        othersInput.style.display = 'block';
        othersInput.required = true;
      }
    } else {
      if (othersInput) {
        othersInput.style.display = 'none';
        othersInput.required = false;
      }
    }
    if (reqText && SERVICE_REQUIREMENTS[val]) {
      reqText.textContent = SERVICE_REQUIREMENTS[val];
    }
  });
}

// Show resident info preview on the booking card
function populateBookingResidentPreview() {
  const currentUser = getStorageItem('lb_current_user', {
    name: 'Juan Dela Cruz',
    age: '31',
    address: 'Purok 4, Barangay Ugac',
    zone: 'Zone 3',
    street: 'Luna St.',
    residencyDuration: '8 Years',
    contact: '09171234567'
  });

  const nameEl = document.getElementById('previewResidentName');
  const ageEl = document.getElementById('previewResidentAge');
  const zoneEl = document.getElementById('previewResidentZone');
  const streetEl = document.getElementById('previewResidentStreet');
  const addressEl = document.getElementById('previewResidentAddress');
  const contactEl = document.getElementById('previewResidentContact');
  const userGreetingEl = document.querySelector('.dash-username');
  const sidebarUserNameEl = document.querySelector('.sidebar-user-name');
  const mobileInitialEl = document.getElementById('mobileUserInitial');

  if (nameEl) nameEl.textContent = currentUser.name;
  if (sidebarUserNameEl) sidebarUserNameEl.textContent = currentUser.name;
  if (ageEl) ageEl.textContent = currentUser.age || '28';
  if (zoneEl) zoneEl.textContent = currentUser.zone || 'Zone 4';
  if (streetEl) streetEl.textContent = currentUser.street || 'Mabini St.';
  if (addressEl) addressEl.textContent = currentUser.address || 'Purok 2, Barangay Ugac';
  if (contactEl) contactEl.textContent = currentUser.contact || '09171234567';

  if (userGreetingEl) {
    const rawName = (currentUser.name || 'Juan').trim();
    const cleaned = rawName.replace(/^(Mr\.|Ms\.|Mrs\.|Dr\.|Hon\.)\s+/i, '');
    const firstName = cleaned.split(/\s+/)[0] || 'Juan';
    userGreetingEl.textContent = firstName;
  }

  if (mobileInitialEl) {
    const rawName = (currentUser.name || 'Juan').trim();
    const cleaned = rawName.replace(/^(Mr\.|Ms\.|Mrs\.|Dr\.|Hon\.)\s+/i, '');
    mobileInitialEl.textContent = cleaned.charAt(0).toUpperCase() || 'J';
  }
}

// Handle appointment booking submission
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById('btnBookAppointment');
    if (submitBtn) submitBtn.disabled = true;

    const selectedServiceKey = serviceSelect?.value;
    let serviceName = serviceSelect?.options[serviceSelect.selectedIndex]?.text;
    if (selectedServiceKey === 'others' && othersInput && othersInput.value.trim()) {
      serviceName = `Other: ${othersInput.value.trim()}`;
    }

    const selectedDate = document.getElementById('dateSelect')?.value;
    const selectedSlot = document.getElementById('selectedTimeSlot')?.value || 'Morning (8:00 AM - 11:30 AM)';
    const purpose = document.getElementById('appointmentPurpose')?.value.trim();

    const currentUser = getStorageItem('lb_current_user', {
      name: 'Juan Dela Cruz',
      age: '31',
      address: 'Purok 4, Barangay Ugac',
      zone: 'Zone 3',
      street: 'Luna St.',
      residencyDuration: '8 Years',
      contact: '09171234567'
    });

    const appointments = getStorageItem('lb_appointments', DEFAULT_APPOINTMENTS);
    const queueSeq = appointments.length + 1;
    const queueNumber = `01-${queueSeq.toString().padStart(3, '0')}`;

    const newAppointment = {
      id: 'apt_' + Date.now(),
      name: currentUser.name,
      email: currentUser.email || 'juan.delacruz@gmail.com',
      age: currentUser.age || '28',
      address: currentUser.address,
      zone: currentUser.zone || 'Zone 4',
      street: currentUser.street || 'Mabini St.',
      residencyDuration: currentUser.residencyDuration || '5 Years',
      contact: currentUser.contact,
      service: serviceName,
      purpose: purpose, // Stored so staff can review the reason for the visit
      date: selectedDate,
      timeSlot: selectedSlot,
      queueNumber: queueNumber,
      status: 'in_queue',
      submittedAt: new Date().toISOString()
    };

    appointments.unshift(newAppointment);
    setStorageItem('lb_appointments', appointments);

    // Increment appointment count for resident profile
    const residents = getStorageItem('lb_residents', DEFAULT_RESIDENTS);
    const foundResident = residents.find(r => r.name.toLowerCase() === currentUser.name.toLowerCase());
    if (foundResident) {
      foundResident.appointmentCount = (foundResident.appointmentCount || 0) + 1;
      setStorageItem('lb_residents', residents);
    }

    // Switch to queue view to show the new ticket
    renderUserQueue();
    const queueLink = document.querySelector('.sidebar-link[data-page="queue"]');
    if (queueLink) queueLink.click();

    bookingForm.reset();
    if (othersInput) othersInput.style.display = 'none';
    if (submitBtn) submitBtn.disabled = false;
  });
}

// Display current queue status and past visits for this resident
function renderUserQueue(appointmentsList = null, userObj = null) {
  const activeList = document.getElementById('queueActiveList');
  const historyBody = document.getElementById('queueHistoryBody');
  if (!activeList && !historyBody) return;

  const currentUser = userObj || getStorageItem('lb_current_user', { name: 'Juan Dela Cruz' });
  const appointments = appointmentsList || getStorageItem('lb_appointments', DEFAULT_APPOINTMENTS);

  // Filter appointments belonging to this resident
  const userAppointments = appointments.filter(a => (a.name && currentUser.name && a.name.toLowerCase() === currentUser.name.toLowerCase()) || (a.id && a.id.startsWith('apt_')));

  if (activeList) {
    activeList.innerHTML = '';
    const active = userAppointments.filter(a => ['in_queue', 'processing', 'ready'].includes(a.status));

    if (!active.length) {
      activeList.innerHTML = '<p style="color:var(--text-gray); font-size:14px; padding:16px;">No active appointments in queue right now.</p>';
    } else {
      active.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'queue-card';

        const statusLabel = item.status === 'in_queue' ? 'In Queue' : item.status === 'processing' ? 'Processing' : 'Ready to Serve';
        const statusClass = item.status === 'in_queue' ? 'queue-status--in-queue' : 'queue-status--processing';

        card.innerHTML = `
          <div class="queue-card-top">
            <span class="queue-card-name">${escapeHtml(item.service)}</span>
            <span class="queue-status ${statusClass}">${escapeHtml(statusLabel)}</span>
          </div>
          <div class="queue-card-duration">${escapeHtml(item.timeSlot)} · ${escapeHtml(item.date)}</div>
          <div style="font-size:12.5px; color:#555; margin:6px 0;"><strong>Purpose:</strong> ${escapeHtml(item.purpose)}</div>
          <div class="queue-chips">
            <span class="queue-chip">${escapeHtml(item.zone || '')}</span>
            <span class="queue-chip">${escapeHtml(item.street || '')}</span>
          </div>
          <div class="queue-card-footer">
            <span class="queue-number">${escapeHtml(item.queueNumber)}</span>
          </div>
        `;
        activeList.appendChild(card);
      });
    }
  }

  if (historyBody) {
    historyBody.innerHTML = '';
    const history = userAppointments.filter(a => ['done', 'cancelled'].includes(a.status));
    history.forEach((row) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${escapeHtml(row.service)}</td>
        <td>${escapeHtml(row.date)}</td>
        <td>${row.status === 'done' ? 'Done' : 'Cancelled'}</td>
      `;
      historyBody.appendChild(tr);
    });
  }
}

// Problem reports submitted by residents
const reportForm = document.getElementById('reportProblemForm');
function renderProblemReports(reportsList = null) {
  const feed = document.getElementById('reportHistoryFeed');
  if (!feed) return;

  const reports = reportsList || getStorageItem('lb_reports', DEFAULT_REPORTS);
  feed.innerHTML = '';

  if (!reports.length) {
    feed.innerHTML = '<p style="color:var(--text-gray); font-size:13px;">No reports submitted yet.</p>';
    return;
  }

  reports.forEach((rpt) => {
    const item = document.createElement('div');
    item.className = 'report-history-item';
    item.innerHTML = `
      <div class="report-history-header">
        <div class="report-history-meta">
          <span class="report-id-pill">${escapeHtml(rpt.id)}</span>
          <span class="report-cat-badge">${escapeHtml(rpt.category)}</span>
          <span class="report-date-text">${escapeHtml(rpt.date || 'Today')}</span>
        </div>
        <span class="report-status-badge">${escapeHtml(rpt.status)}</span>
      </div>
      <div class="report-history-body">
        <h4 class="report-history-title">${escapeHtml(rpt.subject)}</h4>
        <p class="report-history-desc">${escapeHtml(rpt.details)}</p>
      </div>
    `;
    feed.appendChild(item);
  });
}

if (reportForm) {
  reportForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('btnSubmitReport');
    if (submitBtn) submitBtn.disabled = true;

    const category = document.getElementById('problemCategory')?.value;
    const subject = document.getElementById('problemSubject')?.value.trim();
    const details = document.getElementById('problemDetails')?.value.trim();
    const contact = document.getElementById('problemContact')?.value.trim();

    const reports = getStorageItem('lb_reports', DEFAULT_REPORTS);
    const newReport = {
      id: 'RPT-' + Math.floor(1000 + Math.random() * 9000),
      category: category,
      subject: subject,
      details: details,
      contact: contact,
      date: 'Just now',
      status: 'Under Review by Barangay Staff'
    };

    reports.unshift(newReport);
    setStorageItem('lb_reports', reports);
    renderProblemReports();
    reportForm.reset();
    if (submitBtn) submitBtn.disabled = false;
  });
}

// Click to expand or collapse announcement cards
document.querySelectorAll('.announcement-card').forEach((card) => {
  card.addEventListener('click', () => {
    const isOpen = card.classList.toggle('is-open');
    card.setAttribute('aria-expanded', isOpen);
  });
});

// Initial setup for resident views
renderUserServices();
initBookingDates();
populateBookingResidentPreview();
renderUserQueue();
renderProblemReports();

// Admin section navigation
document.querySelectorAll('.sidebar-link[data-admin-page]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.sidebar-link[data-admin-page]').forEach((l) => l.classList.remove('active'));
    link.classList.add('active');

    const page = link.dataset.adminPage;
    document.querySelectorAll('.admin-section').forEach((sec) => {
      sec.classList.toggle('active', sec.dataset.section === page);
    });

    if (window.innerWidth <= 768) {
      setMobileSidebar(false);
    }
  });
});

// Shortcut button to view the completed appointments tab
const linkToCompletedTab = document.getElementById('linkToCompletedTab');
if (linkToCompletedTab) {
  linkToCompletedTab.addEventListener('click', (e) => {
    e.preventDefault();
    const tab = document.querySelector('.sidebar-link[data-admin-page="completed"]');
    if (tab) tab.click();
  });
}

// Render active queue, processing, and ready-to-serve tables
// Live appointments table rendering in admin dashboard
function renderAdminLiveAppointments(appointmentsList = null) {
  const inQueueBody = document.getElementById('tableInQueueBody');
  const processingBody = document.getElementById('tableProcessingBody');
  const readyBody = document.getElementById('tableReadyBody');
  if (!inQueueBody) return;

  const appointments = appointmentsList || getStorageItem('lb_appointments', DEFAULT_APPOINTMENTS);

  const inQueue = appointments.filter(a => a.status === 'in_queue');
  const processing = appointments.filter(a => a.status === 'processing');
  const ready = appointments.filter(a => a.status === 'ready');

  // Update badge counter labels
  const countInQ = document.getElementById('countInQueue');
  const countProc = document.getElementById('countProcessing');
  const countRdy = document.getElementById('countReady');
  if (countInQ) countInQ.textContent = `(${inQueue.length})`;
  if (countProc) countProc.textContent = `(${processing.length})`;
  if (countRdy) countRdy.textContent = `(${ready.length})`;

  // Generate table row for a single appointment
  function createRow(a) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span class="resident-name">${escapeHtml(a.name)}</span></td>
      <td>${escapeHtml(a.service)}</td>
      <td><span class="queue-badge">${escapeHtml(a.queueNumber)}</span></td>
      <td>${escapeHtml(a.date)}</td>
      <td>
        <select class="status-select" data-apt-id="${escapeHtml(a.id)}">
          <option value="in_queue" ${a.status === 'in_queue' ? 'selected' : ''}>In Queue</option>
          <option value="processing" ${a.status === 'processing' ? 'selected' : ''}>Processing</option>
          <option value="ready" ${a.status === 'ready' ? 'selected' : ''}>Ready to Serve</option>
          <option value="done" ${a.status === 'done' ? 'selected' : ''}>Done</option>
          <option value="cancelled" ${a.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
        </select>
      </td>
      <td>
        <button type="button" class="btn-view-details" data-apt-id="${escapeHtml(a.id)}">View Details</button>
      </td>
    `;
    return tr;
  }

  // Populate waiting queue table
  inQueueBody.innerHTML = '';
  if (!inQueue.length) {
    inQueueBody.innerHTML = `<tr><td colspan="6" class="queue-empty-text">No residents currently in queue.</td></tr>`;
  } else {
    inQueue.forEach(a => inQueueBody.appendChild(createRow(a)));
  }

  // Populate processing table
  const procWrap = document.getElementById('tableProcessingWrap');
  const procEmpty = document.getElementById('emptyProcessingText');
  if (processingBody && procWrap && procEmpty) {
    processingBody.innerHTML = '';
    if (processing.length) {
      procWrap.style.display = 'table';
      procEmpty.style.display = 'none';
      processing.forEach(a => processingBody.appendChild(createRow(a)));
    } else {
      procWrap.style.display = 'none';
      procEmpty.style.display = 'block';
    }
  }

  // Populate ready to serve table
  const rdyWrap = document.getElementById('tableReadyWrap');
  const rdyEmpty = document.getElementById('emptyReadyText');
  if (readyBody && rdyWrap && rdyEmpty) {
    readyBody.innerHTML = '';
    if (ready.length) {
      rdyWrap.style.display = 'table';
      rdyEmpty.style.display = 'none';
      ready.forEach(a => readyBody.appendChild(createRow(a)));
    } else {
      rdyWrap.style.display = 'none';
      rdyEmpty.style.display = 'block';
    }
  }

  // Update status whenever an admin changes a dropdown
  document.querySelectorAll('.status-select').forEach((sel) => {
    sel.addEventListener('change', () => {
      const aptId = sel.dataset.aptId;
      const newStatus = sel.value;
      updateAppointmentStatus(aptId, newStatus);
    });
  });

  // Open details modal when clicking view details
  document.querySelectorAll('.btn-view-details').forEach((btn) => {
    btn.addEventListener('click', () => {
      const aptId = btn.dataset.aptId;
      openAppointmentDetailsModal(aptId);
    });
  });
}

// Save status change and re-render appointment lists
function updateAppointmentStatus(aptId, newStatus) {
  const appointments = getStorageItem('lb_appointments', DEFAULT_APPOINTMENTS);
  const apt = appointments.find(a => a.id === aptId);
  if (apt) {
    apt.status = newStatus;
    setStorageItem('lb_appointments', appointments);
    renderAdminLiveAppointments();
    renderCompletedAndCancelled();
  }
}

// Show completed and cancelled appointments history
function renderCompletedAndCancelled(appointmentsList = null) {
  const completedBody = document.getElementById('completedAppointmentsBody');
  const cancelledBody = document.getElementById('cancelledAppointmentsBody');
  if (!completedBody && !cancelledBody) return;

  const appointments = appointmentsList || getStorageItem('lb_appointments', DEFAULT_APPOINTMENTS);
  const completed = appointments.filter(a => a.status === 'done');
  const cancelled = appointments.filter(a => a.status === 'cancelled');

  if (completedBody) {
    completedBody.innerHTML = '';
    if (!completed.length) {
      completedBody.innerHTML = `<tr><td colspan="6" class="queue-empty-text">No completed appointments yet.</td></tr>`;
    } else {
      completed.forEach((a) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><span class="resident-name">${escapeHtml(a.name)}</span></td>
          <td>${escapeHtml(a.service)}</td>
          <td><span class="queue-badge">${escapeHtml(a.queueNumber)}</span></td>
          <td>${escapeHtml(a.date)}</td>
          <td><span style="color:#2f6e43; font-weight:700;">Done</span></td>
          <td><button type="button" class="btn-view-details" data-apt-id="${escapeHtml(a.id)}">View Details</button></td>
        `;
        completedBody.appendChild(tr);
      });
    }
  }

  if (cancelledBody) {
    cancelledBody.innerHTML = '';
    if (!cancelled.length) {
      cancelledBody.innerHTML = `<tr><td colspan="6" class="queue-empty-text">No cancelled appointments.</td></tr>`;
    } else {
      cancelled.forEach((a) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><span class="resident-name">${escapeHtml(a.name)}</span></td>
          <td>${escapeHtml(a.service)}</td>
          <td><span class="queue-badge">${escapeHtml(a.queueNumber)}</span></td>
          <td>${escapeHtml(a.date)}</td>
          <td><span style="color:#c94438; font-weight:700;">Cancelled</span></td>
          <td><button type="button" class="btn-view-details" data-apt-id="${escapeHtml(a.id)}">View Details</button></td>
        `;
        cancelledBody.appendChild(tr);
      });
    }
  }

  // Attach modal trigger to new table rows
  document.querySelectorAll('.btn-view-details').forEach((btn) => {
    btn.addEventListener('click', () => {
      openAppointmentDetailsModal(btn.dataset.aptId);
    });
  });
}

// Modal dialog showing resident and appointment details
const appointmentDetailModal = document.getElementById('appointmentDetailModal');
const btnCloseDetailModal = document.getElementById('btnCloseDetailModal');
const btnModalCloseDone = document.getElementById('btnModalCloseDone');

function openAppointmentDetailsModal(aptId) {
  const appointments = getStorageItem('lb_appointments', DEFAULT_APPOINTMENTS);
  const apt = appointments.find(a => a.id === aptId);
  if (!apt || !appointmentDetailModal) return;

  // Fill in resident and appointment fields in the modal
  const nameEl = document.getElementById('modalDetailName');
  const ageEl = document.getElementById('modalDetailAge');
  const addressEl = document.getElementById('modalDetailAddress');
  const zoneEl = document.getElementById('modalDetailZone');
  const streetEl = document.getElementById('modalDetailStreet');
  const residencyEl = document.getElementById('modalDetailResidency');
  const emailEl = document.getElementById('modalDetailEmail');
  const contactEl = document.getElementById('modalDetailContact');
  const purposeEl = document.getElementById('modalDetailPurpose');
  const serviceEl = document.getElementById('modalDetailService');
  const queueNoEl = document.getElementById('modalDetailQueueNo');
  const dateEl = document.getElementById('modalDetailDate');
  const timeEl = document.getElementById('modalDetailTime');

  if (nameEl) nameEl.textContent = apt.name;
  if (ageEl) ageEl.textContent = `${apt.age || '28'} years old`;
  if (addressEl) addressEl.textContent = apt.address || 'Barangay Ugac';
  if (zoneEl) zoneEl.textContent = apt.zone || 'Zone 4';
  if (streetEl) streetEl.textContent = apt.street || 'Mabini St.';
  if (residencyEl) residencyEl.textContent = apt.residencyDuration || '5 Years';
  if (emailEl) emailEl.textContent = apt.email || (apt.name ? `${apt.name.toLowerCase().replace(/\s+/g, '.')}@gmail.com` : 'resident@laanbayan.gov.ph');
  if (contactEl) contactEl.textContent = apt.contact || '09955178593';
  if (purposeEl) purposeEl.textContent = apt.purpose || 'None specified';
  if (serviceEl) serviceEl.textContent = apt.service;
  if (queueNoEl) queueNoEl.textContent = apt.queueNumber;
  if (dateEl) dateEl.textContent = apt.date;
  if (timeEl) timeEl.textContent = apt.timeSlot;

  appointmentDetailModal.classList.add('active');
}

function closeAppointmentDetailsModal() {
  if (appointmentDetailModal) appointmentDetailModal.classList.remove('active');
}

if (btnCloseDetailModal) btnCloseDetailModal.addEventListener('click', closeAppointmentDetailsModal);
if (btnModalCloseDone) btnModalCloseDone.addEventListener('click', closeAppointmentDetailsModal);
if (appointmentDetailModal) {
  appointmentDetailModal.addEventListener('click', (e) => {
    if (e.target === appointmentDetailModal) closeAppointmentDetailsModal();
  });
}

// Toggle availability for each service
function renderServiceAvailabilityControl(servicesList = null) {
  const container = document.getElementById('serviceToggleList');
  if (!container) return;

  const services = servicesList || getStorageItem('lb_services', DEFAULT_SERVICES);
  container.innerHTML = '';

  services.forEach((s) => {
    const item = document.createElement('div');
    item.className = 'service-toggle-item';
    item.innerHTML = `
      <span class="service-toggle-name">${escapeHtml(s.name)}</span>
      <label class="switch">
        <input type="checkbox" class="service-availability-toggle" data-service-id="${escapeHtml(s.id)}" ${s.available ? 'checked' : ''}>
        <span class="slider"></span>
      </label>
    `;
    container.appendChild(item);
  });

  // Save service status when toggling the switch
  document.querySelectorAll('.service-availability-toggle').forEach((chk) => {
    chk.addEventListener('change', () => {
      const sId = chk.dataset.serviceId;
      const isChecked = chk.checked;
      const curServices = getStorageItem('lb_services', DEFAULT_SERVICES);
      const target = curServices.find(s => s.id === sId);
      if (target) {
        target.available = isChecked;
        setStorageItem('lb_services', curServices);
      }
    });
  });
}

// Announcements management in admin dashboard
function renderAdminAnnouncements(announcementsList = null) {
  const feed = document.getElementById('adminAnnouncementsFeed');
  if (!feed) return;

  const announcements = announcementsList || getStorageItem('lb_announcements', DEFAULT_ANNOUNCEMENTS);
  feed.innerHTML = '';

  announcements.forEach((a) => {
    const row = document.createElement('div');
    row.className = 'announcement-item-row';
    row.innerHTML = `
      <div class="announcement-item-content">
        <h4>${escapeHtml(a.title)}</h4>
        <p>${escapeHtml(a.message)}</p>
      </div>
      <div class="announcement-item-actions">
        <button type="button" class="btn-delete-sm" data-ann-id="${escapeHtml(a.id)}">Delete</button>
      </div>
    `;
    feed.appendChild(row);
  });

  document.querySelectorAll('.btn-delete-sm').forEach((btn) => {
    btn.addEventListener('click', () => {
      const annId = btn.dataset.annId;
      const anns = getStorageItem('lb_announcements', DEFAULT_ANNOUNCEMENTS).filter(a => a.id !== annId);
      setStorageItem('lb_announcements', anns);
      renderAdminAnnouncements();
    });
  });
}

const announcementForm = document.getElementById('announcementForm');
if (announcementForm) {
  announcementForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('btnPostAnnouncement');
    if (submitBtn) submitBtn.disabled = true;

    const title = document.getElementById('announcementTitleInput')?.value.trim();
    const message = document.getElementById('announcementMessageInput')?.value.trim();

    if (!title || !message) {
      if (submitBtn) submitBtn.disabled = false;
      return;
    }

    const anns = getStorageItem('lb_announcements', DEFAULT_ANNOUNCEMENTS);
    anns.unshift({
      id: 'ann_' + Date.now(),
      title: title,
      message: message
    });
    setStorageItem('lb_announcements', anns);
    renderAdminAnnouncements();
    announcementForm.reset();
    if (submitBtn) submitBtn.disabled = false;
  });
}

// Searchable directory of registered residents
function renderResidentDirectory(filterText = '', residentsList = null) {
  const body = document.getElementById('residentDirectoryBody');
  if (!body) return;

  const residents = residentsList || getStorageItem('lb_residents', DEFAULT_RESIDENTS);
  body.innerHTML = '';

  const filtered = filterText
    ? residents.filter(r => r.name.toLowerCase().includes(filterText.toLowerCase()))
    : residents;

  if (!filtered.length) {
    body.innerHTML = `<tr><td colspan="7" class="queue-empty-text">No residents found matching "${escapeHtml(filterText)}".</td></tr>`;
    return;
  }

  filtered.forEach((r) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span class="resident-name">${escapeHtml(r.name)}</span> (${escapeHtml(r.age || '28')} yrs)</td>
      <td>${escapeHtml(r.contact)}</td>
      <td>${escapeHtml(r.zone || 'Zone 4')} · ${escapeHtml(r.street || 'Mabini St.')}</td>
      <td>${escapeHtml(r.address)}</td>
      <td>${escapeHtml(r.residencyDuration || '5 Years')}</td>
      <td><span class="queue-badge">${escapeHtml(r.appointmentCount || 1)} booked</span></td>
      <td>
        <div style="display:flex; gap:6px;">
          <button type="button" class="btn-view-details" data-res-id="${escapeHtml(r.id)}">View Details</button>
          <button type="button" class="btn-delete-row" data-res-id="${escapeHtml(r.id)}">Delete</button>
        </div>
      </td>
    `;
    body.appendChild(tr);
  });

  // Action buttons for view details and delete
  body.querySelectorAll('.btn-view-details').forEach((btn) => {
    btn.addEventListener('click', () => {
      const resId = btn.dataset.resId;
      const res = residents.find(r => r.id === resId);
      if (res) {
        // Show resident info in the details modal
        const apts = getStorageItem('lb_appointments', DEFAULT_APPOINTMENTS);
        const latestApt = apts.find(a => a.name.toLowerCase() === res.name.toLowerCase()) || {
          purpose: 'Resident registered on portal',
          service: 'General Resident Profile',
          queueNumber: 'N/A',
          date: 'Active',
          timeSlot: 'Standard'
        };
        openAppointmentDetailsModal(latestApt.id || 'custom');
      }
    });
  });

  body.querySelectorAll('.btn-delete-row').forEach((btn) => {
    btn.addEventListener('click', () => {
      const resId = btn.dataset.resId;
      const updated = residents.filter(r => r.id !== resId);
      setStorageItem('lb_residents', updated);
      renderResidentDirectory(filterText);
    });
  });
}

const btnSearchResidents = document.getElementById('btnSearchResidents');
const residentSearchInput = document.getElementById('residentSearchInput');
if (btnSearchResidents && residentSearchInput) {
  btnSearchResidents.addEventListener('click', () => {
    renderResidentDirectory(residentSearchInput.value.trim());
  });
  residentSearchInput.addEventListener('input', () => {
    renderResidentDirectory(residentSearchInput.value.trim());
  });
}

// Staff presence list and toggle
function renderStaffAttendance(staffList = null) {
  const container = document.getElementById('staffAttendanceList');
  if (!container) return;

  const staff = staffList || getStorageItem('lb_staff', DEFAULT_STAFF);
  container.innerHTML = '';

  staff.forEach((st) => {
    const card = document.createElement('div');
    card.className = 'staff-item-card';
    card.innerHTML = `
      <div class="staff-info">
        <h4>${escapeHtml(st.name)}</h4>
        <p>${escapeHtml(st.position)}</p>
      </div>
      <div class="staff-actions">
        <label class="switch">
          <input type="checkbox" class="staff-presence-toggle" data-staff-id="${escapeHtml(st.id)}" ${st.present ? 'checked' : ''}>
          <span class="slider"></span>
        </label>
        <button type="button" class="btn-delete-row" data-staff-id="${escapeHtml(st.id)}">Remove</button>
      </div>
    `;
    container.appendChild(card);
  });

  container.querySelectorAll('.staff-presence-toggle').forEach((chk) => {
    chk.addEventListener('change', () => {
      const stId = chk.dataset.staffId;
      const curStaff = getStorageItem('lb_staff', DEFAULT_STAFF);
      const target = curStaff.find(s => s.id === stId);
      if (target) {
        target.present = chk.checked;
        setStorageItem('lb_staff', curStaff);
      }
    });
  });

  container.querySelectorAll('.btn-delete-row').forEach((btn) => {
    btn.addEventListener('click', () => {
      const stId = btn.dataset.staffId;
      const curStaff = getStorageItem('lb_staff', DEFAULT_STAFF).filter(s => s.id !== stId);
      setStorageItem('lb_staff', curStaff);
      renderStaffAttendance();
    });
  });
}

const addStaffForm = document.getElementById('addStaffForm');
if (addStaffForm) {
  addStaffForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('btnAddStaffSubmit');
    if (submitBtn) submitBtn.disabled = true;

    const name = document.getElementById('staffFullNameInput')?.value.trim();
    const position = document.getElementById('staffPositionInput')?.value.trim();

    if (!name || !position) {
      if (submitBtn) submitBtn.disabled = false;
      return;
    }

    const staff = getStorageItem('lb_staff', DEFAULT_STAFF);
    staff.push({
      id: 'st_' + Date.now(),
      name: name.toUpperCase(),
      position: position.toUpperCase(),
      present: true
    });

    setStorageItem('lb_staff', staff);
    renderStaffAttendance();
    addStaffForm.reset();
    if (submitBtn) submitBtn.disabled = false;
  });
}

// Resident problem & incident reports management in admin dashboard
let currentViewingReportId = null;

function renderAdminReports(reportsList = null) {
  const tableBody = document.getElementById('adminReportsTableBody');
  if (!tableBody) return;

  const reports = reportsList || getStorageItem('lb_reports', DEFAULT_REPORTS);
  const searchInput = document.getElementById('reportSearchInput');
  const catFilter = document.getElementById('reportCategoryFilter');
  const statusFilter = document.getElementById('reportStatusFilter');

  const searchText = (searchInput?.value || '').toLowerCase().trim();
  const selectedCat = catFilter?.value || 'all';
  const selectedStatus = statusFilter?.value || 'all';

  // Calculate summary counts
  const totalCount = reports.length;
  const pendingCount = reports.filter(r => (r.status || '').toLowerCase().includes('review') || (r.status || '').toLowerCase().includes('pending')).length;
  const progressCount = reports.filter(r => (r.status || '').toLowerCase().includes('progress')).length;
  const resolvedCount = reports.filter(r => (r.status || '').toLowerCase().includes('resolve') || (r.status || '').toLowerCase().includes('close')).length;

  const countTotalEl = document.getElementById('reportCountTotal');
  const countPendingEl = document.getElementById('reportCountPending');
  const countProgressEl = document.getElementById('reportCountProgress');
  const countResolvedEl = document.getElementById('reportCountResolved');

  if (countTotalEl) countTotalEl.textContent = totalCount;
  if (countPendingEl) countPendingEl.textContent = pendingCount;
  if (countProgressEl) countProgressEl.textContent = progressCount;
  if (countResolvedEl) countResolvedEl.textContent = resolvedCount;

  // Filter reports
  const filtered = reports.filter(r => {
    const matchSearch = !searchText ||
      (r.id || '').toLowerCase().includes(searchText) ||
      (r.subject || '').toLowerCase().includes(searchText) ||
      (r.details || '').toLowerCase().includes(searchText) ||
      (r.contact || '').toLowerCase().includes(searchText) ||
      (r.category || '').toLowerCase().includes(searchText);

    const matchCat = selectedCat === 'all' || r.category === selectedCat;

    let matchStatus = true;
    if (selectedStatus === 'In Review') {
      matchStatus = (r.status || '').toLowerCase().includes('review') || (r.status || '').toLowerCase().includes('pending');
    } else if (selectedStatus === 'In Progress') {
      matchStatus = (r.status || '').toLowerCase().includes('progress');
    } else if (selectedStatus === 'Resolved') {
      matchStatus = (r.status || '').toLowerCase().includes('resolve') || (r.status || '').toLowerCase().includes('close');
    }

    return matchSearch && matchCat && matchStatus;
  });

  tableBody.innerHTML = '';

  if (!filtered.length) {
    tableBody.innerHTML = `<tr><td colspan="7" class="queue-empty-text">No reports found matching criteria.</td></tr>`;
    return;
  }

  filtered.forEach(rpt => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td><span class="report-id-badge">${escapeHtml(rpt.id)}</span></td>
      <td><span style="font-size:12.5px; color:#526759; white-space:nowrap;">${escapeHtml(rpt.date || 'Recent')}</span></td>
      <td><span class="report-cat-badge">${escapeHtml(rpt.category)}</span></td>
      <td>
        <div class="report-cell-subject">
          <strong>${escapeHtml(rpt.subject)}</strong>
          <p class="report-cell-snippet">${escapeHtml(rpt.details)}</p>
        </div>
      </td>
      <td><span style="font-size:13px; font-weight:600; color:#234832;">${escapeHtml(rpt.contact || 'N/A')}</span></td>
      <td>
        <select class="admin-status-dropdown report-status-select" data-report-id="${escapeHtml(rpt.id)}">
          <option value="Under Review by Barangay Staff" ${(rpt.status || '').includes('Review') ? 'selected' : ''}>In Review</option>
          <option value="In Progress — Action Initiated" ${(rpt.status || '').includes('Progress') ? 'selected' : ''}>In Progress</option>
          <option value="Resolved — Corrective Action Completed" ${(rpt.status || '').includes('Resolved') ? 'selected' : ''}>Resolved</option>
          <option value="Closed / Noted" ${(rpt.status || '').includes('Closed') ? 'selected' : ''}>Closed</option>
        </select>
      </td>
      <td>
        <div style="display:flex; gap:6px;">
          <button type="button" class="btn-view-details btn-view-report" data-report-id="${escapeHtml(rpt.id)}">View</button>
          <button type="button" class="btn-delete-row btn-delete-report" data-report-id="${escapeHtml(rpt.id)}">Delete</button>
        </div>
      </td>
    `;
    tableBody.appendChild(tr);
  });

  // Handle in-row status change
  tableBody.querySelectorAll('.report-status-select').forEach(sel => {
    sel.addEventListener('change', () => {
      const rId = sel.dataset.reportId;
      const newStatus = sel.value;
      const allRpts = getStorageItem('lb_reports', DEFAULT_REPORTS);
      const target = allRpts.find(r => r.id === rId);
      if (target) {
        target.status = newStatus;
        setStorageItem('lb_reports', allRpts);
        renderAdminReports();
      }
    });
  });

  // Handle View button
  tableBody.querySelectorAll('.btn-view-report').forEach(btn => {
    btn.addEventListener('click', () => {
      const rId = btn.dataset.reportId;
      openReportDetailsModal(rId);
    });
  });

  // Handle Delete button
  tableBody.querySelectorAll('.btn-delete-report').forEach(btn => {
    btn.addEventListener('click', () => {
      const rId = btn.dataset.reportId;
      const updated = getStorageItem('lb_reports', DEFAULT_REPORTS).filter(r => r.id !== rId);
      setStorageItem('lb_reports', updated);
      renderAdminReports();
    });
  });
}

function openReportDetailsModal(reportId) {
  const modal = document.getElementById('reportDetailModal');
  if (!modal) return;

  const reports = getStorageItem('lb_reports', DEFAULT_REPORTS);
  const rpt = reports.find(r => r.id === reportId);
  if (!rpt) return;

  currentViewingReportId = reportId;

  document.getElementById('modalReportId').textContent = rpt.id;
  document.getElementById('modalReportCategory').textContent = rpt.category;
  document.getElementById('modalReportDate').textContent = rpt.date || 'Recent';
  document.getElementById('modalReportSubject').textContent = rpt.subject;
  document.getElementById('modalReportDetails').textContent = rpt.details;
  document.getElementById('modalReportContact').textContent = rpt.contact || 'N/A';
  document.getElementById('modalReportStatus').textContent = rpt.status;

  const statusSel = document.getElementById('modalReportStatusSelect');
  if (statusSel) {
    statusSel.value = rpt.status;
  }

  modal.classList.add('active');
}

function closeReportDetailsModal() {
  const modal = document.getElementById('reportDetailModal');
  if (modal) modal.classList.remove('active');
  currentViewingReportId = null;
}

// Modal actions wiring
const btnCloseReportModal = document.getElementById('btnCloseReportModal');
const btnCloseReportModalBtn = document.getElementById('btnCloseReportModalBtn');
const btnSaveReportStatus = document.getElementById('btnSaveReportStatus');
const btnDeleteCurrentReport = document.getElementById('btnDeleteCurrentReport');

if (btnCloseReportModal) btnCloseReportModal.addEventListener('click', closeReportDetailsModal);
if (btnCloseReportModalBtn) btnCloseReportModalBtn.addEventListener('click', closeReportDetailsModal);

if (btnSaveReportStatus) {
  btnSaveReportStatus.addEventListener('click', () => {
    if (!currentViewingReportId) return;
    const newStatus = document.getElementById('modalReportStatusSelect')?.value;
    if (!newStatus) return;

    const reports = getStorageItem('lb_reports', DEFAULT_REPORTS);
    const target = reports.find(r => r.id === currentViewingReportId);
    if (target) {
      target.status = newStatus;
      setStorageItem('lb_reports', reports);
      const curStatusEl = document.getElementById('modalReportStatus');
      if (curStatusEl) curStatusEl.textContent = newStatus;
      renderAdminReports();
    }
  });
}

if (btnDeleteCurrentReport) {
  btnDeleteCurrentReport.addEventListener('click', () => {
    if (!currentViewingReportId) return;
    const updated = getStorageItem('lb_reports', DEFAULT_REPORTS).filter(r => r.id !== currentViewingReportId);
    setStorageItem('lb_reports', updated);
    closeReportDetailsModal();
    renderAdminReports();
  });
}

// Search and filter listeners for reports tab
const reportSearchInput = document.getElementById('reportSearchInput');
const reportCategoryFilter = document.getElementById('reportCategoryFilter');
const reportStatusFilter = document.getElementById('reportStatusFilter');

if (reportSearchInput) reportSearchInput.addEventListener('input', renderAdminReports);
if (reportCategoryFilter) reportCategoryFilter.addEventListener('change', renderAdminReports);
if (reportStatusFilter) reportStatusFilter.addEventListener('change', renderAdminReports);

// Initial render for admin tables and controls
renderAdminLiveAppointments();
renderServiceAvailabilityControl();
renderAdminAnnouncements();
renderResidentDirectory();
renderCompletedAndCancelled();
renderStaffAttendance();
renderAdminReports();
