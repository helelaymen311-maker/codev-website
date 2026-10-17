/* ============================================
   HOUSE OF HYPE — Luxury Portfolio JavaScript
   Particles, 3D Effects, Scroll Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // DYNAMIC DATA RENDERING (FROM LOCALSTORAGE)
  // ==========================================
  function renderDynamicContent() {
    // 1. Websites
    const defaultWebsites = [
      {
        id: 1,
        title: 'Glowy Original',
        category: 'Skincare & Beauty',
        categoryKey: 'cat_skincare',
        image: 'images/project_glowyoriginal.png',
        link: 'https://glowyoriginal.com',
        desc: 'Simply you, softly glowing. A beautiful e-commerce platform for skincare products.',
        descKey: 'proj_glowy_desc',
        tags: [
          { text: 'E-Commerce', key: 'tag_ecommerce' },
          { text: 'Design', key: 'tag_design' },
          { text: 'Web Dev', key: 'tag_webdev' }
        ]
      },
      {
        id: 2,
        title: 'Wheel World Consulting — Website',
        category: 'Business Consulting',
        categoryKey: 'cat_consulting',
        image: 'images/project_wheelworld.png',
        link: 'https://wheelworld.dz',
        desc: 'Elite business & economic consulting web platform offering strategic clarity, market insights, and expert reports.',
        descKey: 'proj_wheel_website_desc',
        tags: [
          { text: 'Corporate', key: 'tag_corporate' },
          { text: 'Consulting', key: 'tag_consulting' },
          { text: 'Web Dev', key: 'tag_webdev' }
        ]
      },
      {
        id: 3,
        title: 'LM Boutique',
        category: 'Fashion Boutique',
        categoryKey: 'cat_fashion',
        image: 'images/project_lmboutique.png',
        link: 'https://lmboutique.store',
        desc: 'A fashion boutique for suit & dress rental based in Tlemcen, Algeria.',
        descKey: 'proj_lm_desc',
        tags: [
          { text: 'Fashion', key: 'tag_fashion' },
          { text: 'Rental', key: 'tag_rental' },
          { text: 'Web Dev', key: 'tag_webdev' }
        ]
      },
      {
        id: 4,
        title: 'D&N Lumiere',
        category: 'Luxury Fashion',
        categoryKey: 'cat_luxury',
        image: 'images/project_dnlumiere.png',
        link: 'https://dn-lumiere.com',
        desc: 'Official shop for luxury fashion and accessories, offering a premium shopping experience.',
        descKey: 'proj_dn_desc',
        tags: [
          { text: 'Luxury', key: 'tag_luxury' },
          { text: 'E-Commerce', key: 'tag_ecommerce' },
          { text: 'Web Dev', key: 'tag_webdev' }
        ]
      }
    ];

    // 2. Applications
    const defaultApplications = [
      {
        id: 101,
        title: 'Wheel World — Mobile App',
        category: 'Mobile & Web App',
        categoryKey: 'cat_mobile_app',
        image: 'images/project_wheelworld_app.jpg',
        link: 'https://wheelworld.dz',
        desc: 'Cross-platform mobile application for real-time consultation booking, financial analytics, and economic indicators.',
        descKey: 'proj_wheel_app_desc',
        btnKey: 'explore_app',
        btnText: 'Explore App',
        tags: [
          { text: 'Mobile App', key: 'tag_mobile_app' },
          { text: 'iOS & Android', key: 'tag_ios_android' },
          { text: 'FinTech', key: 'tag_fintech' }
        ]
      },
      {
        id: 102,
        title: 'Finance Hub — Mobile App',
        category: 'FinTech & Banking',
        categoryKey: 'cat_fintech',
        image: 'images/project_mobile_app.jpg',
        link: '#contact',
        desc: 'Modern mobile banking and portfolio management application with transaction analytics, budgeting tools, and biometric security.',
        descKey: 'proj_finance_desc',
        btnKey: 'view_demo',
        btnText: 'View Demo',
        tags: [
          { text: 'FinTech', key: 'tag_fintech' },
          { text: 'Mobile App', key: 'tag_mobile_app' },
          { text: 'iOS & Android', key: 'tag_ios_android' }
        ]
      },
      {
        id: 103,
        title: 'Nexus Enterprise — SaaS Platform',
        category: 'Enterprise SaaS',
        categoryKey: 'cat_saas',
        image: 'images/project_dashboard.jpg',
        link: '#contact',
        desc: 'High-velocity enterprise analytics platform featuring multi-tenant metrics, customer activity heatmaps, and automation pipelines.',
        descKey: 'proj_nexus_desc',
        btnKey: 'launch_demo',
        btnText: 'Launch Demo',
        tags: [
          { text: 'SaaS', key: 'tag_saas' },
          { text: 'Cloud', key: 'tag_cloud' },
          { text: 'Dashboard', key: 'tag_dashboard' }
        ]
      },
      {
        id: 104,
        title: 'Digital Ops — Client Portal',
        category: 'Digital Operations',
        categoryKey: 'cat_client_portal',
        image: 'images/CODEV_digital_services_dashboard._202609072008.jpeg',
        link: '#contact',
        desc: 'All-in-one digital client portal and project management system with live milestone tracking and automated invoicing.',
        descKey: 'proj_ops_desc',
        btnKey: 'live_preview',
        btnText: 'Live Preview',
        tags: [
          { text: 'Web App', key: 'tag_webdev' },
          { text: 'Portal', key: 'tag_portal' },
          { text: 'Operations', key: 'tag_operations' }
        ]
      }
    ];

    function renderCardsToGrid(gridElement, items) {
      if (!gridElement || !items || items.length === 0) return;
      gridElement.innerHTML = '';
      items.forEach((p, index) => {
        const delay = (index % 4) + 1;
        const link = p.link || '#';
        const desc = p.desc || 'Premium digital solution delivered by HOUSE OF HYPE.';
        const catAttr = p.categoryKey ? ` data-i18n="${p.categoryKey}"` : '';
        const descAttr = p.descKey ? ` data-i18n="${p.descKey}"` : '';
        let tagsHtml = '';
        if (Array.isArray(p.tags) && p.tags.length > 0) {
          tagsHtml = p.tags.map(t => {
            const tagText = typeof t === 'object' ? t.text : t;
            const tagKey = typeof t === 'object' && t.key ? ` data-i18n="${t.key}"` : '';
            return `<span class="project-tag"${tagKey}>${tagText}</span>`;
          }).join('');
        } else {
          tagsHtml = `<span class="project-tag" data-i18n="tag_webdev">Web Dev</span>`;
        }

        gridElement.innerHTML += `
          <div class="project-card reveal reveal-delay-${delay}">
            <div class="project-image">
              <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.src='images/project_dashboard.jpg'">
              <div class="project-image-overlay">
                <a href="${link}" target="${link.startsWith('#') ? '_self' : '_blank'}" class="project-view-btn" style="text-decoration:none; display:inline-block;" data-i18n="${p.btnKey || 'visit_website'}">${p.btnText || 'Visit Website'}</a>
              </div>
            </div>
            <div class="project-info">
              <div class="project-category"${catAttr}>${p.category}</div>
              <h3>${p.title}</h3>
              <p${descAttr}>${desc}</p>
              <div class="project-tags">
                ${tagsHtml}
              </div>
            </div>
          </div>
        `;
      });
    }

    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
      let storedProjects = localStorage.getItem('codev_projects');
      if (!storedProjects || storedProjects.includes('CODEV_website_concept') || storedProjects.includes('placeholder')) {
        localStorage.setItem('codev_projects', JSON.stringify(defaultWebsites));
        storedProjects = JSON.stringify(defaultWebsites);
      }
      try {
        const projects = JSON.parse(storedProjects);
        // Filter out mobile apps from websites grid if mixed
        const websitesOnly = projects.filter(p => p.category !== 'Mobile & Web App' && p.categoryKey !== 'cat_mobile_app');
        if (websitesOnly.length > 0) {
          renderCardsToGrid(projectsGrid, websitesOnly);
        }
      } catch (e) {
        console.error(e);
      }
    }

    const applicationsGrid = document.querySelector('.applications-grid');
    if (applicationsGrid) {
      renderCardsToGrid(applicationsGrid, defaultApplications);
    }

    // 2. Services
    const servicesGrid = document.querySelector('.services-grid');
    if (servicesGrid) {
      const defaultRichServices = [
        {
          id: 1,
          title: 'Development',
          titleKey: 'svc_dev_title',
          desc: 'Web applications, custom software, and full-stack solutions built with cutting-edge technology and best practices.',
          descKey: 'svc_dev_desc',
          image: 'images/project_wheelworld.png',
          badge: 'Full-Stack Web & APIs',
          icon: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none"><defs><linearGradient id="realDevGrad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#38bdf8"/><stop offset="100%" stop-color="#2563eb"/></linearGradient></defs><rect x="2" y="3" width="20" height="14" rx="3" stroke="url(#realDevGrad2)" stroke-width="2"/><path d="M8 21h8M12 17v4" stroke="url(#realDevGrad2)" stroke-width="2" stroke-linecap="round"/><path d="M7 8l3 2.5L7 13M13 13h4" stroke="#fde047" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        },
        {
          id: 2,
          title: 'Design',
          titleKey: 'svc_design_title',
          desc: 'Stunning UI/UX designs that captivate users and deliver exceptional digital experiences across all platforms.',
          descKey: 'svc_design_desc',
          image: 'images/project_dashboard.jpg',
          badge: 'Bespoke UI/UX Design',
          icon: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none"><defs><linearGradient id="realDesignGrad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ec4899"/><stop offset="50%" stop-color="#a855f7"/><stop offset="100%" stop-color="#6366f1"/></linearGradient></defs><path fill="url(#realDesignGrad2)" d="M12 2l8 6-8 14L4 8l8-6zm0 3.2L6.8 8.4 12 17.5l5.2-9.1L12 5.2z"/></svg>'
        },
        {
          id: 3,
          title: 'Logos & Branding',
          titleKey: 'svc_branding_title',
          desc: 'Premium logo design and complete brand identity systems that make your business stand out from the competition.',
          descKey: 'svc_branding_desc',
          image: 'images/branding_showcase.jpg',
          badge: 'Royal Brand Identity',
          icon: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none"><defs><linearGradient id="realCrownGrad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fef08a"/><stop offset="50%" stop-color="#d4af37"/><stop offset="100%" stop-color="#b45309"/></linearGradient></defs><path fill="url(#realCrownGrad2)" d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>'
        },
        {
          id: 4,
          title: 'Marketing',
          titleKey: 'svc_marketing_title',
          desc: 'Strategic digital marketing campaigns that boost visibility, drive traffic, and grow your business online.',
          descKey: 'svc_marketing_desc',
          image: 'images/project_dashboard.jpg',
          badge: '+480% Growth Engine',
          icon: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none"><defs><linearGradient id="realMktGrad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fb923c"/><stop offset="100%" stop-color="#ea580c"/></linearGradient></defs><path fill="url(#realMktGrad2)" d="M13.5 2.5c2.5 1.5 6 6 6 8.5 0 2-.8 3.8-2.2 5.2l-3.3-3.3-2.5 2.5 3.3 3.3c-1.4 1.4-3.2 2.2-5.2 2.2-2.5 0-7-3.5-8.5-6 1.8-.2 3.7-.8 5.2-2.3L15.8 3c-1.5.5-2.1.8-2.3-.5z"/><circle cx="14.5" cy="9.5" r="2" fill="#fff"/></svg>'
        },
        {
          id: 5,
          title: 'Google Ads',
          titleKey: 'svc_google_title',
          desc: 'High-performance Google Ads campaigns with expert targeting, optimization, and maximum ROI for your budget.',
          descKey: 'svc_google_desc',
          image: 'images/project_wheelworld.png',
          badge: 'Google Ads Partner',
          icon: '<svg width="34" height="34" viewBox="0 0 48 48"><path fill="#FBBC05" d="M12.2 4.4c-4.8 2.8-6.4 8.9-3.6 13.7l11.4 19.7c2.8 4.8 8.9 6.4 13.7 3.6 4.8-2.8 6.4-8.9 3.6-13.7L25.9 8c-2.8-4.8-8.9-6.4-13.7-3.6z"/><path fill="#4285F4" d="M42.4 34.1c2.8-4.8 1.2-10.9-3.6-13.7-4.8-2.8-10.9-1.2-13.7 3.6-2.8 4.8-1.2 10.9 3.6 13.7 4.8 2.8 10.9 1.2 13.7-3.6z"/><circle fill="#34A853" cx="15.8" cy="37.7" r="5.7"/></svg>'
        },
        {
          id: 6,
          title: 'Meta Ads',
          titleKey: 'svc_meta_title',
          desc: 'Powerful Facebook and Instagram advertising strategies that reach your ideal audience and drive conversions.',
          descKey: 'svc_meta_desc',
          image: 'images/project_wheelworld_app.jpg',
          badge: 'Meta & Social Scale',
          icon: '<svg width="34" height="34" viewBox="0 0 100 100"><defs><linearGradient id="realMetaGrad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0064E0"/><stop offset="50%" stop-color="#0081FB"/><stop offset="100%" stop-color="#00C6FF"/></linearGradient></defs><path fill="url(#realMetaGrad2)" d="M50 43.5C44.8 34.6 37.9 30 29.5 30 16.5 30 7 40.5 7 53.5 7 66.5 16.5 77 29.5 77c8.4 0 15.3-4.6 20.5-13.5 5.2 8.9 12.1 13.5 20.5 13.5 13 0 22.5-10.5 22.5-23.5S83 30 70.5 30c-8.4 0-15.3 4.6-20.5 13.5zm-20.5 24C21.8 67.5 16 61.3 16 53.5s5.8-14 13.5-14c5.8 0 10.5 3.3 14.2 9.5-3.7 6.2-8.4 9.5-14.2 9.5zm41 0c-5.8 0-10.5-3.3-14.2-9.5 3.7-6.2 8.4-9.5 14.2-9.5 7.7 0 13.5 6.2 13.5 14s-5.8 14-13.5 14z"/></svg>'
        }
      ];

      try {
        const stored = localStorage.getItem('codev_services');
        let services = stored ? JSON.parse(stored) : null;
        if (!services || !Array.isArray(services) || services.length < 6 || !services[0].image || services[0].image.includes('svc_development.jpg')) {
          localStorage.setItem('codev_services', JSON.stringify(defaultRichServices));
          services = defaultRichServices;
        }

        servicesGrid.innerHTML = '';
        services.forEach((s, index) => {
          const delay = (index % 3) + 1;
          const num = (index + 1).toString().padStart(2, '0');
          const titleAttr = s.titleKey ? ` data-i18n="${s.titleKey}"` : '';
          const descAttr = s.descKey ? ` data-i18n="${s.descKey}"` : '';
          const fallback = defaultRichServices[index % defaultRichServices.length];
          const imgUrl = s.image || fallback.image;
          const badgeText = s.badge || fallback.badge;
          const iconSvg = s.icon || fallback.icon;

          servicesGrid.innerHTML += `
            <div class="service-card reveal reveal-delay-${delay}" data-tilt>
              <div class="service-card-media">
                <img src="${imgUrl}" alt="${s.title}" loading="lazy">
                <span class="service-media-badge">${badgeText}</span>
              </div>
              <span class="service-number">${num}</span>
              <div class="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  ${iconSvg}
                </svg>
              </div>
              <h3${titleAttr}>${s.title}</h3>
              <p${descAttr}>${s.desc}</p>
            </div>
          `;
        });
      } catch (e) {
        console.error("Error loading services:", e);
      }
    }
  }

  renderDynamicContent();
  window.dispatchEvent(new Event('contentUpdated'));

  // ==========================================
  // PARTICLES BACKGROUND
  // ==========================================
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.hue = Math.random() > 0.8 ? 45 : 220; // Gold or blue
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      if (this.hue === 45) {
        ctx.fillStyle = `hsla(${this.hue}, 70%, 55%, ${this.opacity})`;
      } else {
        ctx.fillStyle = `hsla(${this.hue}, 80%, 65%, ${this.opacity})`;
      }
      ctx.fill();
    }
  }

  function initParticles() {
    const count = Math.min(80, Math.floor(window.innerWidth / 15));
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const opacity = (1 - distance / 150) * 0.08;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    drawConnections();
    animationId = requestAnimationFrame(animateParticles);
  }

  initParticles();
  animateParticles();

  // ==========================================
  // CURSOR GLOW EFFECT (SMOOTH LERP)
  // ==========================================
  const cursorGlow = document.getElementById('cursorGlow');
  let targetX = window.innerWidth / 2, targetY = window.innerHeight / 2;
  let currentX = targetX, currentY = targetY;

  document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  function updateCursorGlow() {
    if (cursorGlow) {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      cursorGlow.style.left = currentX + 'px';
      cursorGlow.style.top = currentY + 'px';
    }
    requestAnimationFrame(updateCursorGlow);
  }
  updateCursorGlow();

  // ==========================================
  // NAVBAR SCROLL EFFECT
  // ==========================================
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinksItems = document.querySelectorAll('.nav-links a');

  function handleScroll() {
    const scrollY = window.scrollY;

    // Navbar background
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll progress bar
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollY / docHeight) * 100;
    document.getElementById('scrollProgress').style.width = progress + '%';

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    // Active nav link
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 200;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinksItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ==========================================
  // BACK TO TOP
  // ==========================================
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ==========================================
  // MOBILE NAVIGATION
  // ==========================================
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
      }
    });
  }

  // ==========================================
  // SCROLL REVEAL & STAGGER ANIMATIONS
  // ==========================================
  let revealObserver;

  function initScrollReveal() {
    // Auto-tag major sections & cards if not already tagged
    const autoRevealTargets = document.querySelectorAll(
      '.section-header, .iphone-flagship-wrapper, .service-card, .project-card, .app-card, .solution-step, .founder-card, .contact-container, .all-in-one-showcase'
    );
    autoRevealTargets.forEach((el, idx) => {
      if (!el.classList.contains('reveal') && !el.classList.contains('reveal-up') && !el.classList.contains('reveal-scale')) {
        el.classList.add('reveal');
      }
    });

    const revealElements = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale');

    if (revealObserver) revealObserver.disconnect();

    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // ==========================================
  // 3D TILT EFFECT & RADIAL GLOW ON CARDS
  // ==========================================
  function initTiltEffects() {
    if (window.innerWidth <= 768 || ('ontouchstart' in window)) return;
    const cards = document.querySelectorAll('[data-tilt], .service-card, .project-card, .app-card, .founder-card');

    cards.forEach(card => {
      // Prevent duplicate listeners
      if (card.dataset.tiltActive === 'true') return;
      card.dataset.tiltActive = 'true';

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

        // Radial glow coordinates
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        card.style.setProperty('--mouse-x', percentX + '%');
        card.style.setProperty('--mouse-y', percentY + '%');
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        card.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease';
      });

      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.12s ease-out, box-shadow 0.3s ease';
      });
    });
  }

  initScrollReveal();
  initTiltEffects();

  // Re-run after any dynamic rendering
  window.addEventListener('contentUpdated', () => {
    initScrollReveal();
    initTiltEffects();
  });

  // ==========================================
  // CONTACT FORM HANDLING
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Animate button
    const originalContent = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 1s linear infinite"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
      Sending...
    `;
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    // Simulate sending
    setTimeout(() => {
      submitBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
        Message Sent!
      `;
      submitBtn.style.background = 'linear-gradient(135deg, #059669, #047857)';
      submitBtn.style.opacity = '1';

      setTimeout(() => {
        submitBtn.innerHTML = originalContent;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
        contactForm.reset();
      }, 2500);
    }, 1500);
  });

  // ==========================================
  // COUNTER ANIMATION FOR STATS
  // ==========================================
  const stats = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  function animateCounters() {
    if (statsAnimated) return;

    const heroSection = document.getElementById('hero');
    const rect = heroSection.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      statsAnimated = true;

      stats.forEach(stat => {
        const text = stat.textContent;
        const match = text.match(/(\d+)/);
        if (!match) return;

        const target = parseInt(match[1]);
        const suffix = text.replace(match[1], '');
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          stat.innerHTML = Math.floor(current) + '<span class="accent">+</span>';
        }, 25);
      });
    }
  }

  window.addEventListener('scroll', animateCounters, { passive: true });
  animateCounters(); // Check on load

  // ==========================================
  // SMOOTH SCROLL FOR NAV LINKS
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ==========================================
  // ADD SPIN KEYFRAME FOR LOADING
  // ==========================================
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);

  // ==========================================
  // SITE THEME TOGGLE (Dark / Light Mode)
  // ==========================================
  const siteThemeToggle = document.getElementById('site-theme-toggle');
  const savedSiteTheme = localStorage.getItem('codev_site_theme');

  // Apply saved theme on load (default to original luxury dark theme)
  if (savedSiteTheme && savedSiteTheme !== 'light') {
    document.documentElement.setAttribute('data-theme', savedSiteTheme);
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.removeItem('codev_site_theme');
  }

  if (siteThemeToggle) {
    siteThemeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('codev_site_theme', newTheme);

      // Reinit particles with new colors
      particles.forEach(p => {
        p.opacity = Math.random() * 0.4 + 0.1;
      });
    });
  }

  // ==========================================
  // MULTI-LANGUAGE SYSTEM (i18n)
  // ==========================================
  const translations = {
    en: {
      nav_home: "Home",
      nav_services: "Services",
      nav_all_in_one: "360° Solution",
      nav_about: "About",
      nav_projects: "Projects",
      nav_websites: "Websites",
      nav_applications: "Applications",
      nav_contact: "Contact Us",
      turnkey_badge: "360° COMPLETE BUSINESS ARCHITECTURE",
      turnkey_title: "Have Any Business? We Handle Everything.",
      turnkey_subtitle: "From iconic luxury company logos to custom websites, mobile apps, and automated marketing campaigns — whatever your industry, just inform us and HOUSE OF HYPE builds your complete digital empire from A to Z.",
      step_1_title: "You Just Inform Us",
      step_1_desc: "Tell us your vision, existing business, or concept. We analyze your market, competitors, and growth objectives.",
      step_2_title: "Iconic Logo & Branding",
      step_2_desc: "We design your custom company logo, complete visual guidelines, typography, stationery, and brand identity.",
      step_3_title: "Turnkey Web & App",
      step_3_desc: "We engineer high-speed responsive websites, e-commerce stores, and native mobile/web apps tailored to your customers.",
      step_4_title: "Launch, Ads & Full Care",
      step_4_desc: "We launch high-converting Google & Meta ad campaigns, handle 24/7 technical management, updates, and cloud hosting.",
      branding_badge: "100% Bespoke Brand Guidelines & Vector Master Files",
      branding_heading: "Company Logos & Brand Identity Systems",
      branding_desc: "Your logo is the signature of your legacy. We craft prestigious, memorable logos and holistic brand systems designed to command instant authority across print, web, and mobile.",
      check_logo: "Custom Logos & Monograms",
      check_vector: "Full Vector Formats (SVG, AI, PDF)",
      check_guidelines: "Typography & Color Science",
      check_print: "Luxury Cards & Social Kits",
      cta_order_brand: "Order Your Custom Logo & Brand",
      industry_heading: "Whatever Your Business — We Build It",
      industry_desc: "Click your industry below to preview your all-in-one digital package:",
      ind_btn_text: "Launch This All-In-One Solution",
      form_service_label: "What Does Your Business Need?",
      hero_badge: "Premium Development Studio",
      hero_title_1: "We Build",
      hero_title_2: "The Future.",
      hero_desc: "HOUSE OF HYPE is a premium digital agency delivering world-class web applications, custom software, stunning designs, logos, and powerful digital marketing solutions.",
      btn_view_work: "View Our Work",
      btn_get_in_touch: "Get In Touch",
      stat_projects: "Projects Delivered",
      stat_clients: "Happy Clients",
      stat_years: "Years Experience",
      hero_image_badge: "FULL-SERVICE DIGITAL AGENCY",
      marquee_1: "I BUILD FRONT-END",
      marquee_2: "I BUILD BACK-END",
      marquee_3: "I TEST EVERYTHING",
      marquee_4: "WEB APPLICATIONS",
      marquee_5: "MOBILE APPS",
      services_label: "What We Do",
      services_title: "Our Services",
      services_subtitle: "From concept to deployment, we deliver end-to-end development solutions with cutting-edge technology and premium quality.",
      iphone_badge: "IPHONE 18 PRO MAX • 360° LIVE INTERACTIVE SHOWCASE",
      iphone_title: "All Services & Digital Systems Live in iPhone 18 Pro Max",
      iphone_subtitle: "Experience our websites, native apps, luxury company logos, and high-ROI ad engines rendered in pixel-perfect Retina OLED clarity.",
      tab_websites: "Websites & E-Commerce",
      tab_apps: "Mobile & Web Apps",
      tab_branding: "Logos & Brand Identity",
      tab_ads: "Google & Meta Ads",
      tab_turnkey: "360° All-In-One Solution",
      iphone_cta: "Order This Service",
      svc_dev_title: "Development",
      svc_dev_desc: "Web applications, custom software, and full-stack solutions built with cutting-edge technology and best practices.",
      svc_design_title: "Design",
      svc_design_desc: "Stunning UI/UX designs that captivate users and deliver exceptional digital experiences across all platforms.",
      svc_branding_title: "Logos & Branding",
      svc_branding_desc: "Premium logo design and complete brand identity systems that make your business stand out from the competition.",
      svc_marketing_title: "Marketing",
      svc_marketing_desc: "Strategic digital marketing campaigns that boost visibility, drive traffic, and grow your business online.",
      svc_google_title: "Google Ads",
      svc_google_desc: "High-performance Google Ads campaigns with expert targeting, optimization, and maximum ROI for your budget.",
      svc_meta_title: "Meta Ads",
      svc_meta_desc: "Powerful Facebook and Instagram advertising strategies that reach your ideal audience and drive conversions.",
      founder_label: "Meet The Founder",
      founder_title: "The Mind Behind The Hype",
      founder_subtitle: "Driven by relentless ambition, precision engineering, and an obsession with world-class digital craftsmanship.",
      founder_exp_title: "Full-Stack Lead",
      founder_exp_sub: "Architect & Founder",
      founder_role: "FOUNDER & LEAD ENGINEER",
      founder_name_heading: "Architecting Tomorrow's High-Impact Digital Experiences",
      founder_bio_1: "Welcome to HOUSE OF HYPE. I build powerful, elegant, and high-converting software systems for businesses that refuse to settle for ordinary. Every pixel, line of code, and interaction is engineered to captivate audiences and deliver measurable growth.",
      founder_bio_2: "From modern responsive web applications to scalable back-end architectures, high-converting Google & Meta campaigns, and distinct brand identities—I oversee every project with uncompromising standards of excellence.",
      founder_feat_1_title: "End-to-End Craftsmanship",
      founder_feat_1_desc: "From wireframe to production deployment with speed and rock-solid code quality.",
      founder_feat_2_title: "Luxury Design Aesthetics",
      founder_feat_2_desc: "Bespoke UI/UX designed to elevate brand authority and create memorable user experiences.",
      founder_feat_3_title: "Result-Driven Engineering",
      founder_feat_3_desc: "Built for extreme speed, SEO dominance, security, and conversion optimization.",
      founder_cta: "Let's Work Together",
      founder_cta_projects: "Explore Portfolio",
      projects_label: "Our Portfolio",
      projects_title: "Featured Projects",
      projects_subtitle: "A showcase of our finest work — delivering excellence across industries and platforms.",
      websites_label: "Web Platforms & E-Commerce",
      websites_title: "Featured Websites",
      websites_subtitle: "A showcase of our finest web platforms and e-commerce experiences — delivering prestige, extreme speed, and high conversion.",
      apps_label: "Mobile & Web Apps",
      apps_title: "Flagship Applications",
      apps_subtitle: "Native mobile applications, real-time analytics platforms, and enterprise cloud software engineered for scale and seamless user experiences.",
      visit_website: "Visit Website",
      explore_app: "Explore App",
      view_demo: "View Demo",
      launch_demo: "Launch Demo",
      live_preview: "Live Preview",
      cat_skincare: "Skincare & Beauty",
      proj_glowy_desc: "Simply you, softly glowing. A beautiful e-commerce platform for skincare products.",
      cat_consulting: "Business Consulting",
      proj_wheel_desc: "Expert business consulting firm providing strategic solutions and guidance.",
      proj_wheel_website_desc: "Elite business & economic consulting web platform offering strategic clarity, market insights, and expert reports.",
      cat_mobile_app: "Mobile & Web App",
      proj_wheel_app_desc: "Cross-platform mobile application for real-time consultation booking, financial analytics, and economic indicators.",
      cat_fintech: "FinTech & Banking",
      proj_finance_desc: "Modern mobile banking and portfolio management application with transaction analytics, budgeting tools, and biometric security.",
      cat_saas: "Enterprise SaaS",
      proj_nexus_desc: "High-velocity enterprise analytics platform featuring multi-tenant metrics, customer activity heatmaps, and automation pipelines.",
      cat_client_portal: "Digital Operations",
      proj_ops_desc: "All-in-one digital client portal and project management system with live milestone tracking and automated invoicing.",
      cat_fashion: "Fashion Boutique",
      proj_lm_desc: "A fashion boutique for suit & dress rental based in Tlemcen, Algeria.",
      cat_luxury: "Luxury Fashion",
      proj_dn_desc: "Official shop for luxury fashion and accessories, offering a premium shopping experience.",
      tag_ecommerce: "E-Commerce",
      tag_design: "Design",
      tag_webdev: "Web Dev",
      tag_corporate: "Corporate",
      tag_consulting: "Consulting",
      tag_mobile_app: "Mobile App",
      tag_ios_android: "iOS & Android",
      tag_fintech: "FinTech",
      tag_website: "Website",
      tag_cloud: "Cloud",
      tag_dashboard: "Dashboard",
      tag_portal: "Portal",
      tag_operations: "Operations",
      tag_fashion: "Fashion",
      tag_rental: "Rental",
      tag_luxury: "Luxury",
      contact_label: "Get In Touch",
      contact_title: "Let's Build Something Amazing",
      contact_subtitle: "Ready to turn your idea into reality? Reach out and let's discuss how HOUSE OF HYPE can help bring your vision to life.",
      contact_email: "Email Us",
      contact_phone: "Call Us",
      contact_visit: "Visit Us",
      contact_address: "123 Innovation Street, Tech City",
      form_name: "Your Name",
      form_name_ph: "John Doe",
      form_email: "Your Email",
      form_email_ph: "john@example.com",
      form_subject: "Subject",
      form_subject_ph: "Project Discussion",
      form_message: "Your Message",
      form_message_ph: "Tell us about your project...",
      form_send: "Send Message",
      footer_text: "© 2026 HOUSE OF HYPE. All rights reserved. Built with passion.",
      footer_contact: "Contact",
      footer_pre_badge: "ACCEPTING SELECT CLIENTS FOR 2026",
      footer_pre_title: "Ready to Architect Your Digital Empire?",
      footer_pre_subtitle: "From iconic company logos to custom websites, mobile apps, and high-ROI Google & Meta ad campaigns — we handle everything from A to Z.",
      footer_cta_start: "Start Your Project",
      footer_brand_bio: "An elite digital agency and venture engineering studio. We craft high-authority company logos, bespoke web platforms, iOS & Android applications, and relentless growth engines.",
      footer_status: "Global Operations Active • 24/7 Cloud Support",
      footer_title_about: "Agency Profile",
      footer_title_solutions: "360° Solutions",
      footer_lnk_turnkey: "360° All-In-One Architecture",
      footer_lnk_logo: "Company Logo & Branding",
      footer_lnk_web: "Custom Websites & E-Commerce",
      footer_lnk_apps: "Native iOS & Android Apps",
      footer_lnk_ads: "Google & Meta Ads Scaling",
      footer_lnk_hosting: "24/7 Hosting & Technical Care",
      footer_title_portfolio: "Featured Work",
      footer_title_contact: "Direct Concierge",
      footer_lbl_email: "Email Inquiries",
      footer_lbl_phone: "Phone & WhatsApp",
      footer_lbl_loc: "Headquarters",
      footer_lbl_time: "Response Time",
      footer_lbl_time_val: "< 2 Hours Guaranteed",
      footer_rights: "All rights reserved. Built with passion & precision."
    },
    fr: {
      nav_home: "Accueil",
      nav_services: "Services",
      nav_all_in_one: "Solution 360°",
      nav_about: "À Propos",
      nav_projects: "Projets",
      nav_websites: "Sites Web",
      nav_applications: "Applications",
      nav_contact: "Contactez-nous",
      turnkey_badge: "ARCHITECTURE D'ENTREPRISE CLÉ EN MAIN 360°",
      turnkey_title: "Vous Avez Une Entreprise ? Nous Gérons Absolument Tout.",
      turnkey_subtitle: "De la création de logos de prestige aux sites web sur mesure, applications mobiles et campagnes marketing — quel que soit votre secteur, informez-nous simplement et HOUSE OF HYPE conçoit votre empire digital de A à Z.",
      step_1_title: "Informez-nous Simplement",
      step_1_desc: "Partagez votre idée ou activité existante. Nous analysons votre marché, vos concurrents et vos objectifs de croissance.",
      step_2_title: "Logo Emblématique & Identité",
      step_2_desc: "Nous concevons votre logo sur mesure, vos chartes graphiques complètes, typographies, cartes de visite et identité.",
      step_3_title: "Web & Application Clé en Main",
      step_3_desc: "Nous développons des sites ultra-rapides, des boutiques en ligne et des applications mobiles et web haute performance.",
      step_4_title: "Lancement, Publicités & Sérénité",
      step_4_desc: "Nous déployons des campagnes Google & Meta à fort retour sur investissement, gérons l'hébergement et la maintenance 24/7.",
      branding_badge: "Charte Graphique 100% Sur-Mesure & Fichiers Vectoriels Maîtres",
      branding_heading: "Logos d'Entreprise & Systèmes d'Identité de Marque",
      branding_desc: "Votre logo est la signature de votre réussite. Nous créons des logos prestigieux et mémorables qui imposent une autorité immédiate sur le papier, le web et le mobile.",
      check_logo: "Logos & Monogrammes Sur-Mesure",
      check_vector: "Formats Vectoriels Complets (SVG, AI, PDF)",
      check_guidelines: "Typographie & Science des Couleurs",
      check_print: "Cartes de Visite de Luxe & Kits Réseaux",
      cta_order_brand: "Commander Votre Logo & Marque Sur-Mesure",
      industry_heading: "Quelle Que Soit Votre Activité — Nous La Construisons",
      industry_desc: "Cliquez sur votre secteur ci-dessous pour prévisualiser votre pack clé en main :",
      ind_btn_text: "Lancer Cette Solution Clé en Main",
      form_service_label: "De Quoi Votre Entreprise A-t-elle Besoin ?",
      hero_badge: "Studio de Développement Premium",
      hero_title_1: "Nous Construisons",
      hero_title_2: "L'Avenir.",
      hero_desc: "HOUSE OF HYPE est une agence digitale premium offrant des applications web, des logiciels sur mesure, des designs époustouflants, des logos et des solutions de marketing digital puissantes.",
      btn_view_work: "Voir Notre Travail",
      btn_get_in_touch: "Nous Contacter",
      stat_projects: "Projets Livrés",
      stat_clients: "Clients Satisfaits",
      stat_years: "Années d'Expérience",
      hero_image_badge: "AGENCE DIGITALE COMPLÈTE",
      marquee_1: "JE CRÉE LE FRONT-END",
      marquee_2: "JE CRÉE LE BACK-END",
      marquee_3: "JE TESTE TOUT",
      marquee_4: "APPLICATIONS WEB",
      marquee_5: "APPLICATIONS MOBILES",
      services_label: "Ce Que Nous Faisons",
      services_title: "Nos Services",
      services_subtitle: "De la conception au déploiement, nous fournissons des solutions de développement complètes avec une technologie de pointe.",
      iphone_badge: "IPHONE 18 PRO MAX • EXPÉRIENCE INTERACTIVE 360°",
      iphone_title: "Tous Nos Services et Systèmes en Direct sur iPhone 18 Pro Max",
      iphone_subtitle: "Découvrez nos sites web, applications natives, logos d'entreprises prestigieux et moteurs publicitaires à fort ROI en clarté Retina OLED.",
      tab_websites: "Sites Web & E-Commerce",
      tab_apps: "Applications Mobiles & Web",
      tab_branding: "Logos & Identité Visuelle",
      tab_ads: "Google & Meta Ads",
      tab_turnkey: "Solution Clé en Main 360°",
      iphone_cta: "Commander Ce Service",
      svc_dev_title: "Développement",
      svc_dev_desc: "Applications web, logiciels sur mesure et solutions full-stack créés avec des technologies de pointe.",
      svc_design_title: "Design",
      svc_design_desc: "Des designs UI/UX captivants offrant des expériences digitales exceptionnelles sur toutes les plateformes.",
      svc_branding_title: "Logos & Identité",
      svc_branding_desc: "Création de logos premium et de systèmes d'identité de marque pour vous démarquer de la concurrence.",
      svc_marketing_title: "Marketing",
      svc_marketing_desc: "Campagnes de marketing digital stratégiques pour booster votre visibilité et générer du trafic.",
      svc_google_title: "Google Ads",
      svc_google_desc: "Campagnes Google Ads ultra-performantes avec ciblage expert pour un retour sur investissement maximal.",
      svc_meta_title: "Meta Ads",
      svc_meta_desc: "Stratégies publicitaires percutantes sur Facebook et Instagram pour toucher votre audience idéale.",
      founder_label: "Rencontrez Le Fondateur",
      founder_title: "L'Esprit Derrière Le Hype",
      founder_subtitle: "Animé par une ambition constante, une ingénierie de précision et une passion pour l'excellence digitale.",
      founder_exp_title: "Lead Full-Stack",
      founder_exp_sub: "Architecte & Fondateur",
      founder_role: "FONDATEUR & INGÉNIEUR EN CHEF",
      founder_name_heading: "Concevoir les Expériences Digitales à Fort Impact de Demain",
      founder_bio_1: "Bienvenue chez HOUSE OF HYPE. Je conçois des systèmes logiciels performants, élégants et à fort taux de conversion pour les entreprises d'élite. Chaque pixel et ligne de code est pensé pour captiver et faire croître votre activité.",
      founder_bio_2: "Des applications web modernes et réactives aux architectures back-end évolutives, en passant par les campagnes Google & Meta et les identités visuelles uniques, je supervise chaque réalisation avec des standards d'excellence sans compromis.",
      founder_feat_1_title: "Excellence de Bout en Bout",
      founder_feat_1_desc: "De la conception initiale au déploiement en production, avec rapidité et une qualité de code irréprochable.",
      founder_feat_2_title: "Esthétique & Design de Luxe",
      founder_feat_2_desc: "UI/UX sur-mesure pour sublimer votre image de marque et offrir des expériences mémorables.",
      founder_feat_3_title: "Ingénierie Axée sur les Résultats",
      founder_feat_3_desc: "Optimisé pour une vitesse maximale, le référencement naturel (SEO) et la conversion.",
      founder_cta: "Travaillons Ensemble",
      founder_cta_projects: "Explorer le Portfolio",
      projects_label: "Notre Portfolio",
      projects_title: "Projets Mis en Avant",
      projects_subtitle: "Un aperçu de nos meilleures réalisations dans différents secteurs.",
      websites_label: "Plateformes Web & E-Commerce",
      websites_title: "Sites Web Recommandés",
      websites_subtitle: "Un aperçu de nos meilleures réalisations web et boutiques e-commerce d'exception — alliant prestige, rapidité extrême et haute conversion.",
      apps_label: "Applications Mobiles & Web",
      apps_title: "Applications Phares",
      apps_subtitle: "Applications mobiles natives, plateformes d'analyse en temps réel et logiciels cloud d'entreprise conçus pour l'évolutivité et une expérience fluide.",
      visit_website: "Visiter le Site",
      explore_app: "Découvrir l'App",
      view_demo: "Voir la Démo",
      launch_demo: "Lancer la Démo",
      live_preview: "Aperçu en Direct",
      cat_skincare: "Soins & Beauté",
      proj_glowy_desc: "Simplement vous, éclatante de douceur. Une magnifique plateforme e-commerce pour des produits de beauté.",
      cat_consulting: "Conseil en Affaires",
      proj_wheel_desc: "Cabinet d'experts en conseil d'affaires fournissant des solutions stratégiques et un accompagnement de qualité.",
      proj_wheel_website_desc: "Plateforme web de conseil économique et stratégique d'élite, offrant analyses de marché et rapports d'experts.",
      cat_mobile_app: "Application Mobile & Web",
      proj_wheel_app_desc: "Application mobile cross-plateforme pour la réservation d'experts en temps réel et le suivi des indicateurs économiques.",
      cat_fintech: "FinTech & Banque",
      proj_finance_desc: "Application bancaire mobile moderne avec analyse des transactions, gestion de budget et sécurité biométrique.",
      cat_saas: "SaaS d'Entreprise",
      proj_nexus_desc: "Plateforme d'analyse d'entreprise haute performance avec métriques multi-tenants et cartographies d'activité.",
      cat_client_portal: "Opérations Digitales",
      proj_ops_desc: "Portail client digital tout-en-un et gestion de projet avec suivi des étapes en temps réel et facturation automatisée.",
      cat_fashion: "Boutique de Mode",
      proj_lm_desc: "Une boutique de mode spécialisée dans la location de costumes et de robes basée à Tlemcen, en Algérie.",
      cat_luxury: "Mode de Luxe",
      proj_dn_desc: "Boutique officielle de vêtements et d'accessoires de luxe, offrant une expérience d'achat haut de gamme.",
      tag_ecommerce: "E-Commerce",
      tag_design: "Design",
      tag_webdev: "Dév. Web",
      tag_corporate: "Entreprise",
      tag_consulting: "Consulting",
      tag_mobile_app: "App Mobile",
      tag_ios_android: "iOS & Android",
      tag_fintech: "FinTech",
      tag_website: "Site Web",
      tag_cloud: "Cloud",
      tag_dashboard: "Tableau de Bord",
      tag_portal: "Portail",
      tag_operations: "Opérations",
      tag_fashion: "Mode",
      tag_rental: "Location",
      tag_luxury: "Luxe",
      contact_label: "Nous Contacter",
      contact_title: "Construisons Quelque Chose d'Incroyable",
      contact_subtitle: "Prêt à donner vie à votre idée ? Contactez-nous pour discuter de la manière dont HOUSE OF HYPE peut vous aider.",
      contact_email: "Écrivez-nous",
      contact_phone: "Appelez-nous",
      contact_visit: "Rendez-nous Visite",
      contact_address: "123 Rue de l'Innovation, Tech City",
      form_name: "Votre Nom",
      form_name_ph: "Jean Dupont",
      form_email: "Votre Email",
      form_email_ph: "jean@exemple.com",
      form_subject: "Sujet",
      form_subject_ph: "Discussion Projet",
      form_message: "Votre Message",
      form_message_ph: "Parlez-nous de votre projet...",
      form_send: "Envoyer le Message",
      footer_text: "© 2026 HOUSE OF HYPE. Tous droits réservés. Construit avec passion.",
      footer_contact: "Contact",
      footer_pre_badge: "NOUVEAUX CLIENTS SÉLECTIONNÉS POUR 2026",
      footer_pre_title: "Prêt à Bâtir Votre Empire Digital ?",
      footer_pre_subtitle: "Des logos d'entreprises prestigieux aux sites web sur mesure, applications mobiles et campagnes publicitaires Google & Meta à fort ROI — nous gérons tout de A à Z.",
      footer_cta_start: "Démarrer Votre Projet",
      footer_brand_bio: "Une agence digitale d'élite et studio d'ingénierie logicielle. Nous créons des logos à haute autorité, des plateformes web sur mesure, des applications iOS & Android et des moteurs de croissance continue.",
      footer_status: "Opérations Mondiales Actives • Support Cloud 24/7",
      footer_title_about: "Profil de l'Agence",
      footer_title_solutions: "Solutions 360°",
      footer_lnk_turnkey: "Architecture Complète 360°",
      footer_lnk_logo: "Logos & Identité de Marque",
      footer_lnk_web: "Sites Web & E-Commerce",
      footer_lnk_apps: "Applications iOS & Android",
      footer_lnk_ads: "Campagnes Google & Meta Ads",
      footer_lnk_hosting: "Hébergement & Sérénité 24/7",
      footer_title_portfolio: "Réalisations",
      footer_title_contact: "Conciergerie Dédiée",
      footer_lbl_email: "Demandes par Email",
      footer_lbl_phone: "Téléphone & WhatsApp",
      footer_lbl_loc: "Siège Social",
      footer_lbl_time: "Délai de Réponse",
      footer_lbl_time_val: "< 2 Heures Garanti",
      footer_rights: "Tous droits réservés. Conçu avec passion et précision."
    },
    ar: {
      nav_home: "الرئيسية",
      nav_services: "خدماتنا",
      nav_all_in_one: "حل متكامل 360°",
      nav_about: "من نحن",
      nav_projects: "مشاريعنا",
      nav_websites: "المواقع",
      nav_applications: "التطبيقات",
      nav_contact: "اتصل بنا",
      turnkey_badge: "هندسة أعمال متكاملة 360°",
      turnkey_title: "لديك أي نشاط تجاري؟ نحن نتولى كل شيء من الألف إلى الياء.",
      turnkey_subtitle: "من تصميم شعارات الشركات الفاخرة إلى المواقع الإلكترونية، تطبيقات الهاتف، وحملات التسويق الآلية — مهما كان مجال عملك، فقط أخبرنا وسيتولى HOUSE OF HYPE بناء وتطوير مشروعك بالكامل.",
      step_1_title: "فقط أخبرنا بفكرتك",
      step_1_desc: "أخبرنا برؤيتك أو نشاطك التجاري الحالي. نقوم بدراسة مجالك ومنافسيك وأهداف نموك بدقة.",
      step_2_title: "شعار مميز وهوية تجارية",
      step_2_desc: "نصمم شعار شركتك المخصص، الدليل البصري الكامل، الخطوط، بطاقات العمل، وهوية علامتك التجارية.",
      step_3_title: "موقع وتطبيق جاهز بالكامل",
      step_3_desc: "نطور مواقع سريعة وفائقة التجاوب، متاجر إلكترونية، وتطبيقات هاتف وويب مخصصة لعملائك.",
      step_4_title: "الإطلاق والإعلانات والرعاية التامة",
      step_4_desc: "نطلق حملات إعلانية مربحة على جوجل وميتا، ونتولى الاستضافة السحابية والصيانة الفنية على مدار الساعة.",
      branding_badge: "دليل هوية بصرية مخصص 100% وملفات فيكتور الأصلية",
      branding_heading: "شعارات الشركات وأنظمة الهوية البصرية الكاملة",
      branding_desc: "شعارك هو التوقيع الذي يخلد نجاحك. نصمم شعارات راقية لا تُنسى وأنظمة بصرية متكاملة تفرض مكانتك بقوة في كل مكان.",
      check_logo: "شعارات ومونوغرامات حصرية",
      check_vector: "صيغ فيكتور كاملة (SVG, AI, PDF)",
      check_guidelines: "دراسة وتنسيق الخطوط والألوان",
      check_print: "بطاقات عمل فاخرة وقوالب السوشيال ميديا",
      cta_order_brand: "اطلب تصميم شعارك وهويتك التجارية",
      industry_heading: "مهما كان مجالك أو مشروعك — نحن نبنيه لك",
      industry_desc: "اضغط على مجالك أدناه لمعاينة باقتك الرقمية المتكاملة:",
      ind_btn_text: "ابدأ هذه الباقة المتكاملة لمشروعك",
      form_service_label: "ما الذي يحتاجه نشاطك التجاري؟",
      hero_badge: "استوديو تطوير برمجي متميز",
      hero_title_1: "نحن نبني",
      hero_title_2: "المستقبل.",
      hero_desc: "هاوس أوف هايب (HOUSE OF HYPE) هي وكالة رقمية متميزة تقدم تطبيقات ويب بمستوى عالمي، برمجيات مخصصة، تصميمات مذهلة، شعارات، وحلول تسويق رقمي قوية.",
      btn_view_work: "شاهد أعمالنا",
      btn_get_in_touch: "تواصل معنا",
      stat_projects: "مشاريع مكتملة",
      stat_clients: "عملاء سعداء",
      stat_years: "سنوات خبرة",
      hero_image_badge: "وكالة رقمية متكاملة الخدمات",
      marquee_1: "أبني الواجهة الأمامية",
      marquee_2: "أبني الواجهة الخلفية",
      marquee_3: "أختبر كل شيء",
      marquee_4: "تطبيقات الويب",
      marquee_5: "تطبيقات الهاتف",
      services_label: "ماذا نفعل",
      services_title: "خدماتنا",
      services_subtitle: "من الفكرة إلى النشر، نقدم حلول تطوير متكاملة بأحدث التقنيات وبأعلى جودة.",
      iphone_badge: "آيفون 18 برو ماكس • تجربة تفاعلية حية 360°",
      iphone_title: "جميع خدماتنا وتطبيقاتنا ومواقعنا مباشرة على شاشة آيفون 18 برو ماكس",
      iphone_subtitle: "شاهد كيف تبدو مواقعك، تطبيقات الهاتف، شعارات الشركات الفاخرة، وحملات الإعلانات عالية العائد على شاشة ريتينا أوليد الأكثر تطوراً في العالم.",
      tab_websites: "المواقع والمتاجر الإلكترونية",
      tab_apps: "تطبيقات الهاتف والويب",
      tab_branding: "الشعارات والهوية البصرية",
      tab_ads: "إعلانات جوجل وميتا",
      tab_turnkey: "حل متكامل وشامل 360°",
      iphone_cta: "اطلب هذه الخدمة الآن",
      svc_dev_title: "التطوير",
      svc_dev_desc: "تطبيقات ويب، برمجيات مخصصة، وحلول متكاملة مبنية بأحدث التقنيات وأفضل الممارسات.",
      svc_design_title: "التصميم",
      svc_design_desc: "تصميمات واجهة وتجربة مستخدم مذهلة تأسر المستخدمين وتقدم تجارب رقمية استثنائية.",
      svc_branding_title: "الشعارات والهوية",
      svc_branding_desc: "تصميم شعارات احترافية وأنظمة هوية تجارية كاملة تجعل عملك متميزًا عن المنافسين.",
      svc_marketing_title: "التسويق",
      svc_marketing_desc: "حملات تسويق رقمي استراتيجية لتعزيز الرؤية، جلب الزيارات، وتنمية عملك عبر الإنترنت.",
      svc_google_title: "إعلانات جوجل",
      svc_google_desc: "حملات إعلانات جوجل عالية الأداء مع استهداف احترافي وعائد استثمار أقصى لميزانيتك.",
      svc_meta_title: "إعلانات ميتا",
      svc_meta_desc: "استراتيجيات إعلانية قوية على فيسبوك وإنستجرام للوصول إلى جمهورك المثالي وتحقيق التحويلات.",
      founder_label: "تعرف على المؤسس",
      founder_title: "العقل المدبر وراء النجاح",
      founder_subtitle: "مدفوعًا بالطموح اللامحدود، الهندسة الدقيقة، والشغف بالحرفية الرقمية ذات المستوى العالمي.",
      founder_exp_title: "قائد تطوير Full-Stack",
      founder_exp_sub: "المهندس المعماري والمؤسس",
      founder_role: "المؤسس والمهندس الرئيسي",
      founder_name_heading: "هندسة تجارب رقمية عالية التأثير للمستقبل",
      founder_bio_1: "مرحبًا بكم في HOUSE OF HYPE. أقوم ببناء أنظمة برمجية قوية وأنيقة وعالية التحويل للشركات التي تبحث دائمًا عن التميز. كل تفصيل وسطح كود مُصمم لجذب الجمهور وتحقيق نمو ملموس.",
      founder_bio_2: "من تطبيقات الويب الحديثة إلى البنى التحتية الخلفية القابلة للتوسع، وحملات إعلانات جوجل وميتا الاحترافية، والهويات البصرية الفريدة — أشرف على كل مشروع بمعايير لا تقبل المساومة.",
      founder_feat_1_title: "إتقان من البداية حتى النهاية",
      founder_feat_1_desc: "من المخطط الأولي إلى الإطلاق النهائي بسرعة واحترافية وجودة برمجية فائقة.",
      founder_feat_2_title: "تصميم فاخر وعصري",
      founder_feat_2_desc: "واجهات مستخدم مخصصة تعزز مكانة علامتك التجارية وتخلق تجارب استثنائية.",
      founder_feat_3_title: "هندسة تركز على النتائج",
      founder_feat_3_desc: "سرعة فائقة، تصدر محركات البحث (SEO)، وحماية قوية لزيادة التحويلات والمبيعات.",
      founder_cta: "لنعمل معًا",
      founder_cta_projects: "استكشف المشاريع",
      projects_label: "معرض أعمالنا",
      projects_title: "مشاريع مميزة",
      projects_subtitle: "معرض لأفضل أعمالنا — نقدم التميز عبر مختلف الصناعات والمنصات.",
      websites_label: "منصات الويب والتجارة الإلكترونية",
      websites_title: "مواقع مميزة",
      websites_subtitle: "معرض لأفضل مواقعنا ومنصات التجارة الإلكترونية — نقدم الفخامة والسرعة الفائقة ومعدلات التحويل العالية.",
      apps_label: "تطبيقات الهاتف والويب",
      apps_title: "تطبيقات رائدة",
      apps_subtitle: "تطبيقات هواتف ذكية متطورة، منصات تحليلات في الوقت الفعلي، وبرمجيات سحابية للمؤسسات مصممة للأداء العالي وتجربة مستخدم سلسة.",
      visit_website: "زيارة الموقع",
      explore_app: "استكشف التطبيق",
      view_demo: "عرض تجريبي",
      launch_demo: "تشغيل العرض",
      live_preview: "معاينة حية",
      cat_skincare: "العناية بالبشرة والجمال",
      proj_glowy_desc: "أنت ببساطة، تتوهجين بنعومة. منصة تجارة إلكترونية جميلة لمنتجات العناية بالبشرة.",
      cat_consulting: "استشارات الأعمال",
      proj_wheel_desc: "شركة استشارات أعمال خبيرة تقدم حلولاً استراتيجية وتوجيهات.",
      proj_wheel_website_desc: "منصة ويب للاستشارات الاقتصادية واستراتيجيات الأعمال، تقدم تحليلات السوق وتقارير الخبراء.",
      cat_mobile_app: "تطبيق الهاتف والويب",
      proj_wheel_app_desc: "تطبيق جوال متطور لحجز استشارات الخبراء فورياً ومتابعة المؤشرات والتحليلات الاقتصادية.",
      cat_fintech: "تكنولوجيا مالية وبنكية",
      proj_finance_desc: "تطبيق مصرفي وإدارة محافظ مالية حديث مع تحليلات المعاملات وأدوات الميزانية وحماية بيومترية متقدمة.",
      cat_saas: "برمجيات سحابية للمؤسسات",
      proj_nexus_desc: "منصة تحليلات للمؤسسات فائقة السرعة تتضمن مقاييس مخصصة وخرائط تفاعل العملاء وتدفقات الأتمتة.",
      cat_client_portal: "عمليات رقمية وبوابة عملاء",
      proj_ops_desc: "بوابة عملاء رقمية متكاملة وإدارة مشاريع مع تتبع الإنجازات فورياً والفوترة الآلية السلسة.",
      cat_fashion: "بوتيك أزياء",
      proj_lm_desc: "بوتيك أزياء لتأجير البدلات والفساتين مقره في تلمسان، الجزائر.",
      cat_luxury: "أزياء فاخرة",
      proj_dn_desc: "المتجر الرسمي للأزياء والإكسسوارات الفاخرة، يقدم تجربة تسوق متميزة.",
      tag_ecommerce: "تجارة إلكترونية",
      tag_design: "تصميم",
      tag_webdev: "تطوير ويب",
      tag_corporate: "شركات",
      tag_consulting: "استشارات",
      tag_mobile_app: "تطبيق جوال",
      tag_ios_android: "iOS و Android",
      tag_fintech: "تكنولوجيا مالية",
      tag_website: "موقع ويب",
      tag_cloud: "سحابي",
      tag_dashboard: "لوحة تحكم",
      tag_portal: "بوابة",
      tag_operations: "عمليات",
      tag_fashion: "أزياء",
      tag_rental: "تأجير",
      tag_luxury: "فخامة",
      contact_label: "تواصل معنا",
      contact_title: "لنبني شيئًا مذهلاً معًا",
      contact_subtitle: "جاهز لتحويل فكرتك إلى حقيقة؟ تواصل معنا ودعنا نناقش كيف يمكن لـ HOUSE OF HYPE مساعدتك في ذلك.",
      contact_email: "راسلنا",
      contact_phone: "اتصل بنا",
      contact_visit: "قم بزيارتنا",
      contact_address: "123 شارع الابتكار، مدينة التكنولوجيا",
      form_name: "اسمك",
      form_name_ph: "محمد أحمد",
      form_email: "بريدك الإلكتروني",
      form_email_ph: "mohammed@example.com",
      form_subject: "الموضوع",
      form_subject_ph: "مناقشة مشروع",
      form_message: "رسالتك",
      form_message_ph: "أخبرنا عن مشروعك...",
      form_send: "إرسال الرسالة",
      footer_text: "© 2026 HOUSE OF HYPE. جميع الحقوق محفوظة. صُنع بشغف.",
      footer_contact: "اتصل بنا",
      footer_pre_badge: "نستقبل نخبة العملاء والمشاريع لعام 2026",
      footer_pre_title: "جاهز لتأسيس إمبراطوريتك الرقمية؟",
      footer_pre_subtitle: "من تصميم شعارات الشركات الفاخرة إلى المواقع الإلكترونية المخصصة، تطبيقات الهاتف وحملات إعلانات جوجل وميتا المربحة — نتولى كل شيء من الألف إلى الياء.",
      footer_cta_start: "ابدأ مشروعك الآن",
      footer_brand_bio: "وكالة رقمية واستوديو هندسة برمجيات من النخبة. نصمم شعارات الشركات ذات الهيبة العالية، منصات الويب المخصصة، تطبيقات هواتف آيفون وأندرويد، ومحركات النمو الاستثنائي.",
      footer_status: "العمليات الدولية نشطة • دعم سحابي مستمر 24/7",
      footer_title_about: "ملف الوكالة",
      footer_title_solutions: "حلول متكاملة 360°",
      footer_lnk_turnkey: "هندسة أعمال شاملة 360°",
      footer_lnk_logo: "شعارات وهوية الشركات",
      footer_lnk_web: "مواقع ومتاجر إلكترونية",
      footer_lnk_apps: "تطبيقات آيفون وأندرويد",
      footer_lnk_ads: "إعلانات جوجل وميتا المربحة",
      footer_lnk_hosting: "استضافة ودعم فني 24/7",
      footer_title_portfolio: "أبرز الأعمال",
      footer_title_contact: "تواصل مباشر",
      footer_lbl_email: "البريد الإلكتروني",
      footer_lbl_phone: "الهاتف وواتساب",
      footer_lbl_loc: "المقر الرئيسي",
      footer_lbl_time: "سرعة الرد",
      footer_lbl_time_val: "أقل من ساعتين مضمونة",
      footer_rights: "جميع الحقوق محفوظة. صُمم بشغف وإتقان متناهٍ."
    }
  };

  const flags = {
    en: '🇬🇧',
    fr: '🇫🇷',
    ar: '🇩🇿'
  };

  const siteLangSwitcher = document.getElementById('site-lang-switcher');
  const siteLangBtn = document.getElementById('site-lang-btn');
  const siteLangFlag = document.getElementById('site-lang-flag');
  const siteLangCode = document.getElementById('site-lang-code');
  const langOptions = document.querySelectorAll('.site-lang-option');

  // Load saved language
  let currentSiteLang = localStorage.getItem('codev_site_lang') || 'en';

  function applySiteTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    // Apply text translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });

    // Apply placeholder translations
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) el.placeholder = t[key];
    });

    // Handle RTL
    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', lang);
    }
    
    // Update button UI
    if (siteLangFlag) siteLangFlag.textContent = flags[lang];
    if (siteLangCode) siteLangCode.textContent = lang.toUpperCase();
    
    // Save to localStorage
    localStorage.setItem('codev_site_lang', lang);
  }

  // Initial apply
  applySiteTranslations(currentSiteLang);

  if (siteLangSwitcher) {
    siteLangBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      siteLangSwitcher.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!siteLangSwitcher.contains(e.target)) {
        siteLangSwitcher.classList.remove('open');
      }
    });

    langOptions.forEach(option => {
      option.addEventListener('click', () => {
        const selectedLang = option.getAttribute('data-lang');
        applySiteTranslations(selectedLang);
        siteLangSwitcher.classList.remove('open');
      });
    });
  }

  // ==========================================
  // INTERACTIVE INDUSTRY SOLUTION SELECTOR
  // ==========================================
  const industryPackages = {
    retail: {
      title: "E-Commerce & Retail Business",
      badge: "Turnkey Package",
      logo: "<strong>Brand & Logo:</strong> Modern e-commerce logo, favicon & packaging design kit.",
      web: "<strong>Online Store:</strong> Ultra-fast online store with seamless payment gateway & cart.",
      app: "<strong>Customer App:</strong> iOS & Android shopping app with push notifications & live tracking.",
      marketing: "<strong>Growth & Ads:</strong> High-ROI Meta & Google Ads campaigns to drive daily sales.",
      care: "<strong>Full Care:</strong> Zero hassle. 24/7 technical hosting, inventory sync & maintenance.",
      subject: "360° Solution — E-Commerce & Retail Business"
    },
    consulting: {
      title: "Consulting & Corporate Firm",
      badge: "Executive Suite",
      logo: "<strong>Brand & Logo:</strong> Prestigious corporate monogram, stationery & executive decks.",
      web: "<strong>Corporate Portal:</strong> High-authority consulting platform with client booking & case studies.",
      app: "<strong>Client Portal App:</strong> Private client consultation dashboard with document vault.",
      marketing: "<strong>Executive Ads:</strong> LinkedIn & Google Search campaigns targeting high-ticket clients.",
      care: "<strong>Full Care:</strong> Enterprise-grade security, automated backups & priority support.",
      subject: "360° Solution — Consulting & Corporate Firm"
    },
    restaurant: {
      title: "Restaurant, Café & Hospitality",
      badge: "Hospitality Suite",
      logo: "<strong>Brand & Logo:</strong> Artisanal restaurant logo, physical menu styling & signage assets.",
      web: "<strong>Dining Website:</strong> Visual menu showcase, table reservation system & instant directions.",
      app: "<strong>Order & Loyalty App:</strong> Mobile app for table ordering, pickup & loyalty rewards.",
      marketing: "<strong>Local Domination:</strong> Local Google Maps SEO & Instagram food reels ad campaigns.",
      care: "<strong>Full Care:</strong> Menu update support, POS integrations & zero server downtime.",
      subject: "360° Solution — Restaurant & Hospitality"
    },
    luxury: {
      title: "Fashion & Luxury Brand",
      badge: "Haute Couture",
      logo: "<strong>Brand & Logo:</strong> Haute-couture minimalist emblem, embossing files & luxury packaging.",
      web: "<strong>Bespoke Boutique:</strong> Editorial-grade luxury storefront with high-definition lookbooks.",
      app: "<strong>VIP Member App:</strong> Exclusive drops app with private invitation codes & Apple Pay.",
      marketing: "<strong>Luxury Brand Ads:</strong> High-aesthetic Instagram & TikTok campaigns with influencer funnels.",
      care: "<strong>Full Care:</strong> White-glove technical concierge & global CDN speed optimization.",
      subject: "360° Solution — Fashion & Luxury Brand"
    },
    health: {
      title: "Healthcare, Clinic & Wellness",
      badge: "Clinical Standard",
      logo: "<strong>Brand & Logo:</strong> Trust-inspiring medical logo, patient stationery & prescription pads.",
      web: "<strong>Clinic Web Portal:</strong> HIPAA-ready booking portal with doctor profiles & service directory.",
      app: "<strong>Patient Mobile App:</strong> Appointment reminders, telemedicine room & test results.",
      marketing: "<strong>Patient Acquisition:</strong> High-intent Google Search ads for local clinic appointments.",
      care: "<strong>Full Care:</strong> Strict data encryption, SSL certifications & continuous compliance.",
      subject: "360° Solution — Healthcare & Wellness Clinic"
    },
    tech: {
      title: "Tech Startup & SaaS Venture",
      badge: "Venture Ready",
      logo: "<strong>Brand & Logo:</strong> Cutting-edge tech logo, dynamic icon system & dark-mode UI kits.",
      web: "<strong>Product Showcase:</strong> High-converting SaaS landing page with interactive pricing & demos.",
      app: "<strong>Cloud App / SaaS:</strong> Scalable web app architecture with auth, stripe billing & APIs.",
      marketing: "<strong>Scale & Growth:</strong> Product Hunt launch kit, retargeting funnels & developer ads.",
      care: "<strong>Full Care:</strong> DevOps cloud pipelines, containerized scaling & error tracking.",
      subject: "360° Solution — Tech Startup & SaaS"
    }
  };

  const industryPills = document.querySelectorAll('.industry-pill');
  const indCardTitle = document.getElementById('indCardTitle');
  const indCardBadge = document.getElementById('indCardBadge');
  const delLogo = document.getElementById('delLogo');
  const delWeb = document.getElementById('delWeb');
  const delApp = document.getElementById('delApp');
  const delMarketing = document.getElementById('delMarketing');
  const delCare = document.getElementById('delCare');
  const subjectInput = document.getElementById('subject');

  if (industryPills.length > 0) {
    industryPills.forEach(pill => {
      pill.addEventListener('click', () => {
        industryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const indKey = pill.getAttribute('data-industry');
        const pkg = industryPackages[indKey];
        if (pkg) {
          if (indCardTitle) indCardTitle.textContent = pkg.title;
          if (indCardBadge) indCardBadge.textContent = pkg.badge;
          if (delLogo) delLogo.innerHTML = pkg.logo;
          if (delWeb) delWeb.innerHTML = pkg.web;
          if (delApp) delApp.innerHTML = pkg.app;
          if (delMarketing) delMarketing.innerHTML = pkg.marketing;
          if (delCare) delCare.innerHTML = pkg.care;

          if (subjectInput) {
            subjectInput.value = pkg.subject;
          }
        }
      });
    });
  }

  // Service Chips Click Handling
  const serviceChips = document.querySelectorAll('.service-chip');
  if (serviceChips.length > 0) {
    serviceChips.forEach(chip => {
      chip.addEventListener('click', () => {
        serviceChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const serviceName = chip.getAttribute('data-service');
        if (subjectInput && serviceName) {
          subjectInput.value = serviceName;
        }
      });
    });
  }

  // ==========================================
  // IPHONE 18 PRO MAX INTERACTIVE SHOWCASE LOGIC
  // ==========================================
  const iphoneScreensData = {
    websites: {
      viewId: "viewWebsites",
      badge: "ULTRA-FAST WEB ARCHITECTURE",
      heading: "Web Platforms & E-Commerce",
      desc: "Custom-engineered, high-conversion web platforms built with luxury aesthetics, sub-second load times, and seamless mobile responsiveness across every device.",
      metrics: [
        { val: "0.4s", lbl: "Page Load Speed" },
        { val: "100/100", lbl: "Google SEO Score" },
        { val: "+35%", lbl: "Conversion Rate" },
        { val: "99.9%", lbl: "Uptime Guarantee" }
      ],
      features: [
        "Ultra-responsive layouts engineered for desktop, tablet, and mobile",
        "Secure checkout & automated payment gateway integrations",
        "High-authority visual presence with custom animations & luxury dark mode"
      ],
      island: "SAFARI • 100/100 SEO",
      subject: "Custom Website & E-Commerce Solution"
    },
    apps: {
      viewId: "viewApps",
      badge: "NATIVE & CROSS-PLATFORM",
      heading: "Mobile Applications (iOS & Android)",
      desc: "High-performance native and cross-platform mobile apps featuring real-time data sync, fluid 60-120 FPS animations, and enterprise-grade cloud architecture.",
      metrics: [
        { val: "60 FPS", lbl: "Fluid Animation" },
        { val: "5.0 ★", lbl: "App Store Quality" },
        { val: "0.02s", lbl: "Cloud Sync Latency" },
        { val: "100%", lbl: "Offline Capability" }
      ],
      features: [
        "Bespoke mobile architecture for iPhone 18 Pro Max and modern smartphones",
        "Biometric authentication, live analytics, and push notifications",
        "Seamless integration with your business CRM and backend systems"
      ],
      island: "iOS APP • 60 FPS",
      subject: "Mobile & Web Application Development"
    },
    branding: {
      viewId: "viewBranding",
      badge: "ICONIC ROYAL IDENTITY",
      heading: "Company Logos & Brand Systems",
      desc: "Prestigious logo design and holistic corporate branding systems that command instant authority, reverence, and luxury appeal across all digital and print mediums.",
      metrics: [
        { val: "100%", lbl: "Custom Monograms" },
        { val: "Vector", lbl: "SVG • AI • EPS • PDF" },
        { val: "Full Kit", lbl: "Brand Style Guide" },
        { val: "4K & 8K", lbl: "Ultra-Res Assets" }
      ],
      features: [
        "Unique handcrafted logo concepts aligned with your business ethos",
        "Comprehensive brand styleguide: typography, color science & rules",
        "Print-ready stationery, packaging, luxury business cards & social media kits"
      ],
      island: "BRAND IDENTITY • MASTER",
      subject: "Company Logo & Brand Identity Suite"
    },
    ads: {
      viewId: "viewAds",
      badge: "HIGH-ROI ACQUISITION",
      heading: "Google Ads & Meta Performance",
      desc: "Data-driven advertising campaigns engineered to generate relentless revenue, acquire high-value customers, and maximize every dollar of your marketing spend.",
      metrics: [
        { val: "+480%", lbl: "Average Client ROI" },
        { val: "5.81x", lbl: "Campaign ROAS" },
        { val: "325K+", lbl: "Monthly Impressions" },
        { val: "-42%", lbl: "Cost Per Acquisition" }
      ],
      features: [
        "High-intent Google Search & Shopping campaigns capturing ready buyers",
        "Hyper-targeted Meta (Instagram & Facebook) video & carousel funnels",
        "Full tracking setup: Pixel, Google Tag Manager, Conversion API & live reports"
      ],
      island: "ADS ENGINE • +480% ROI",
      subject: "Google & Meta Advertising Campaigns"
    },
    turnkey: {
      viewId: "viewTurnkey",
      badge: "TOTAL BUSINESS FREEDOM",
      heading: "360° All-In-One Turnkey Solution",
      desc: "You just inform us about your business or concept — and HOUSE OF HYPE builds, launches, manages, and scales your complete digital empire from A to Z with zero stress for you.",
      metrics: [
        { val: "360°", lbl: "Full Coverage" },
        { val: "A to Z", lbl: "Zero Effort Required" },
        { val: "24/7", lbl: "Hosting & Security" },
        { val: "VIP", lbl: "Dedicated Lead Architect" }
      ],
      features: [
        "Complete package: Custom Logo + Website + Mobile App + Ads + Cloud Care",
        "We handle everything: domain, hosting, server maintenance, security, updates",
        "Single point of contact: inform us once and receive a fully functioning business"
      ],
      island: "360° ARCHITECTURE • ONLINE",
      subject: "360° All-In-One Turnkey Business Architecture"
    }
  };

  const iphoneTabBtns = document.querySelectorAll('.iphone-tab-btn');
  const screenViews = document.querySelectorAll('.screen-view');
  const islandTextEl = document.getElementById('islandText');
  const detailBadgeEl = document.getElementById('iphoneDetailBadge');
  const detailHeadingEl = document.getElementById('iphoneDetailHeading');
  const detailDescEl = document.getElementById('iphoneDetailDesc');
  const detailMetricsEl = document.getElementById('iphoneDetailMetrics');
  const detailFeaturesEl = document.getElementById('iphoneDetailFeatures');
  const detailCtaBtn = document.getElementById('iphoneDetailCta');

  function switchIphoneScreen(screenKey) {
    const data = iphoneScreensData[screenKey];
    if (!data) return;

    // 1. Update Tabs
    iphoneTabBtns.forEach(btn => {
      if (btn.getAttribute('data-screen') === screenKey) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 2. Update Screen Views
    screenViews.forEach(view => {
      if (view.id === data.viewId) {
        view.classList.add('active');
      } else {
        view.classList.remove('active');
      }
    });

    // 3. Dynamic Island Text
    if (islandTextEl) {
      islandTextEl.textContent = data.island;
    }

    // 4. Details Panel
    if (detailBadgeEl) detailBadgeEl.textContent = data.badge;
    if (detailHeadingEl) detailHeadingEl.textContent = data.heading;
    if (detailDescEl) detailDescEl.textContent = data.desc;

    // Metrics
    if (detailMetricsEl && data.metrics) {
      detailMetricsEl.innerHTML = data.metrics.map(m => `
        <div class="metric-item">
          <span class="metric-val">${m.val}</span>
          <span class="metric-lbl">${m.lbl}</span>
        </div>
      `).join('');
    }

    // Features
    if (detailFeaturesEl && data.features) {
      detailFeaturesEl.innerHTML = data.features.map(f => `
        <div class="feature-line">
          <span class="feature-dot">✦</span>
          <span>${f}</span>
        </div>
      `).join('');
    }

    // Update CTA link to auto-fill subject
    if (detailCtaBtn) {
      detailCtaBtn.onclick = () => {
        if (subjectInput) {
          subjectInput.value = data.subject;
        }
      };
    }
  }

  if (iphoneTabBtns.length > 0) {
    iphoneTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const screenKey = btn.getAttribute('data-screen');
        switchIphoneScreen(screenKey);
      });
    });
  }

  // Tapping inside the iPhone switches to next screen
  const iphoneScreenViewport = document.getElementById('iphoneScreenViewport');
  const screenKeysOrder = ['websites', 'apps', 'branding', 'ads', 'turnkey'];
  let currentScreenIdx = 0;

  if (iphoneScreenViewport) {
    iphoneScreenViewport.addEventListener('click', () => {
      currentScreenIdx = (currentScreenIdx + 1) % screenKeysOrder.length;
      switchIphoneScreen(screenKeysOrder[currentScreenIdx]);
    });
  }

});
