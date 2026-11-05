document.addEventListener('DOMContentLoaded', () => {

  // ===== 1. Smooth Scrolling with precise navbar offset + Tab Activation =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (window.innerWidth <= 1024 && this.matches('.nav-item-dropdown > a')) {
        return;
      }

      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const el = document.querySelector(targetId);
      if (el) {
        e.preventDefault();

        // Check if link also requests activating a specific service tab
        const openTabId = this.getAttribute('data-open-tab');
        if (openTabId) {
          const tabBtn = document.querySelector(`.ifpd-tab-btn[data-tab="${openTabId}"]`);
          if (tabBtn) tabBtn.click();
        }

        // Check if link requests pre-selecting a form subject index
        const subjectIdx = this.getAttribute('data-subject-index');
        if (subjectIdx) {
          const subjectSelect = document.getElementById('form-subject');
          if (subjectSelect && subjectSelect.options.length > Number(subjectIdx)) {
            subjectSelect.selectedIndex = Number(subjectIdx);
          }
        }

        // Close mobile menu if open
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navRight = document.getElementById('navRight');
        if (mobileMenuBtn && navRight && navRight.classList.contains('active')) {
          mobileMenuBtn.classList.remove('active');
          navRight.classList.remove('active');
          document.body.style.overflow = '';
        }

        const header = document.getElementById('navbar');
        const navHeight = header ? header.offsetHeight : 76;
        let top = 0;
        let curr = el;
        while (curr) {
          top += curr.offsetTop;
          curr = curr.offsetParent;
        }

        window.scrollTo({
          top: Math.max(0, top - navHeight - 12),
          behavior: 'smooth'
        });

        document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
        if (!this.classList.contains('btn-nav')) {
          this.classList.add('active');
        }
      }
    });
  });

  // ===== 2. ScrollSpy for Nav Menu =====
  const navLinks = document.querySelectorAll('.nav-menu > li > a:not(.btn-nav)');
  const trackedSections = [];
  navLinks.forEach(link => {
    const id = link.getAttribute('href');
    if (id && id.startsWith('#') && id.length > 1) {
      const sec = document.querySelector(id);
      if (sec) trackedSections.push({ link, sec });
    }
  });

  window.addEventListener('scroll', () => {
    const scrollPos = window.pageYOffset + 130;
    let current = null;

    for (let i = trackedSections.length - 1; i >= 0; i--) {
      const item = trackedSections[i];
      let top = 0;
      let curr = item.sec;
      while (curr) {
        top += curr.offsetTop;
        curr = curr.offsetParent;
      }
      if (scrollPos >= top - 20) {
        current = item;
        break;
      }
    }

    if (current) {
      navLinks.forEach(l => l.classList.remove('active'));
      current.link.classList.add('active');
    }
  }, { passive: true });

  // ===== 3. Mobile Hamburger Menu & Accordion Dropdowns =====
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navRight = document.getElementById('navRight');

  if (mobileMenuBtn && navRight) {
    mobileMenuBtn.addEventListener('click', () => {
      const isActive = mobileMenuBtn.classList.toggle('active');
      navRight.classList.toggle('active', isActive);
      document.body.style.overflow = isActive ? 'hidden' : '';

      if (!isActive) {
        document.querySelectorAll('.nav-item-dropdown.open').forEach(d => d.classList.remove('open'));
      }
    });

    document.querySelectorAll('.nav-item-dropdown > a').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          e.stopPropagation();
          const parent = trigger.closest('.nav-item-dropdown');
          const isOpen = parent.classList.contains('open');
          document.querySelectorAll('.nav-item-dropdown.open').forEach(d => {
            if (d !== parent) d.classList.remove('open');
          });
          parent.classList.toggle('open', !isOpen);
        }
      });
    });
  }

  // ===== 4. Interactive Technical Tabs System =====
  const ifpdTabBtns = document.querySelectorAll('.ifpd-tab-btn');
  const ifpdTabPanels = document.querySelectorAll('.ifpd-tab-panel');
  const ifpdDots = document.querySelectorAll('.ifpd-dot');
  const ifpdTabsNav = document.getElementById('ifpdTabsNav');

  function setActiveTab(targetId, targetBtn) {
    if (!targetId || !targetBtn) return;

    ifpdTabBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    ifpdTabPanels.forEach(p => p.classList.remove('active'));

    targetBtn.classList.add('active');
    targetBtn.setAttribute('aria-selected', 'true');
    const targetPanel = document.getElementById(targetId);
    if (targetPanel) {
      targetPanel.classList.add('active');
    }

    ifpdDots.forEach(dot => {
      dot.classList.toggle('active', dot.getAttribute('data-tab-target') === targetId);
    });

    if (window.innerWidth <= 1024 && ifpdTabsNav) {
      targetBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  if (ifpdTabBtns.length > 0 && ifpdTabPanels.length > 0) {
    ifpdTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab');
        if (targetId) setActiveTab(targetId, btn);
      });
    });

    ifpdDots.forEach(dot => {
      dot.addEventListener('click', () => {
        const targetId = dot.getAttribute('data-tab-target');
        const targetBtn = document.querySelector(`.ifpd-tab-btn[data-tab="${targetId}"]`);
        if (targetBtn) setActiveTab(targetId, targetBtn);
      });
    });
  }

  // ===== 5. Contact Form Submission Handler (Sends to scwelding.mounting19@gmail.com) =====
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const required = contactForm.querySelectorAll('[required]');
      let valid = true;
      required.forEach(f => {
        f.style.borderColor = '';
        if (!f.value.trim()) {
          f.style.borderColor = '#e53935';
          valid = false;
        }
      });
      if (!valid) return;

      const name = (document.getElementById('form-name')?.value || '').trim();
      const org = (document.getElementById('form-org')?.value || '').trim();
      const phone = (document.getElementById('form-phone')?.value || '').trim();
      const email = (document.getElementById('form-email')?.value || '').trim();
      const city = (document.getElementById('form-city')?.value || '').trim();
      const subject = (document.getElementById('form-subject')?.value || 'Welding / Montage Inquiry').trim();
      const message = (document.getElementById('form-message')?.value || '').trim();

      const mailSubject = encodeURIComponent(`[Space Coast Welding & Montage LLC] ${subject} - ${name}`);
      const mailBody = encodeURIComponent(
        `Name: ${name}\n` +
        `Company / Client: ${org}\n` +
        `Phone / WhatsApp: ${phone}\n` +
        `Email: ${email}\n` +
        `City in Florida: ${city}\n` +
        `Service / Class: ${subject}\n\n` +
        `Details:\n${message}`
      );

      window.location.href = `mailto:scwelding.mounting19@gmail.com?subject=${mailSubject}&body=${mailBody}`;

      const successEl = document.getElementById('form-success');
      if (successEl) {
        successEl.style.display = 'block';
      }
      contactForm.reset();
    });
  }

});
