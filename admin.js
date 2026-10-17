document.addEventListener('DOMContentLoaded', () => {
  // ============================================
  // TRANSLATION SYSTEM (EN / FR / AR)
  // ============================================
  const translations = {
    en: {
      // Navigation
      nav_dashboard: 'Dashboard',
      nav_projects: 'Projects',
      nav_messages: 'Messages',
      nav_analytics: 'Analytics',
      nav_settings: 'Settings',
      back_to_site: '← Back to Site',

      // Dashboard
      overview: 'Overview',
      total_visitors: 'Total Visitors',
      new_messages: 'New Messages',
      active_projects: 'Active Projects',
      revenue: 'Revenue',
      recent_inquiries: 'Recent Inquiries',
      quick_actions: 'Quick Actions',

      // Table Headers
      th_name: 'Name',
      th_service: 'Service',
      th_date: 'Date',
      th_status: 'Status',

      // Services
      service_webdev: 'Web Development',
      service_logo: 'Logo Design',
      service_marketing: 'Marketing',
      service_mobile: 'Mobile App',

      // Dates
      date_today: 'Today',
      date_yesterday: 'Yesterday',

      // Status
      status_new: 'New',
      status_pending: 'Pending',
      status_replied: 'Replied',

      // Buttons
      add_project: 'Add New Project',
      update_services: 'Update Services',
      generate_report: 'Generate Report',
      btn_edit: 'Edit',
      btn_delete: 'Delete',
      save_project: 'Save Project',
      save_service: 'Save Service',
      reply_message: 'Reply to Message',

      // Projects
      manage_projects: 'Manage Projects',
      cat_skincare: 'Skincare & Beauty',
      cat_consulting: 'Business Consulting',
      cat_mobile_app: 'Mobile & Web App',
      cat_fashion: 'Fashion Store',
      cat_luxury: 'Luxury Fashion',

      // Messages
      inbox: 'Inbox',
      msg_webdev_inquiry: 'Web Development Inquiry',
      msg_logo_project: 'Logo Design Project',
      msg_time_today: 'Today, 10:30 AM',
      msg_time_yesterday: 'Yesterday, 2:15 PM',
      msg_from_john: 'Message from John Doe',
      label_email: 'Email:',
      label_service: 'Service:',
      msg_body: '"Hi, I need a luxury website built for my real estate agency. Please let me know your availability."',

      // Analytics
      analytics_dashboard: 'Analytics Dashboard',
      chart_label: 'Website Traffic (Thousands)',

      // Modals
      add_service: 'Add New Service',
      label_project_title: 'Project Title',
      label_category: 'Category',
      label_image_url: 'Image URL',
      label_service_title: 'Service Title',
      label_description: 'Description',

      // Placeholders
      search_placeholder: 'Search anything...',
      ph_project_title: 'e.g. My New Website',
      ph_category: 'e.g. E-Commerce',
      ph_service_title: 'e.g. SEO Optimization',
      ph_description: 'Brief description of the service',

      // Alerts
      alert_fill_title_cat: 'Please fill in title and category',
      alert_fill_all: 'Please fill in all fields',
      alert_project_saved: 'Project Saved Successfully!',
      alert_service_saved: 'Service Saved Successfully!',
      alert_confirm_delete: 'Are you sure you want to delete this project?',
      alert_demo: 'clicked! (Demo mode)'
    },

    fr: {
      // Navigation
      nav_dashboard: 'Tableau de Bord',
      nav_projects: 'Projets',
      nav_messages: 'Messages',
      nav_analytics: 'Analytique',
      nav_settings: 'Paramètres',
      back_to_site: '← Retour au Site',

      // Dashboard
      overview: 'Vue d\'ensemble',
      total_visitors: 'Visiteurs Totaux',
      new_messages: 'Nouveaux Messages',
      active_projects: 'Projets Actifs',
      revenue: 'Revenus',
      recent_inquiries: 'Demandes Récentes',
      quick_actions: 'Actions Rapides',

      // Table Headers
      th_name: 'Nom',
      th_service: 'Service',
      th_date: 'Date',
      th_status: 'Statut',

      // Services
      service_webdev: 'Développement Web',
      service_logo: 'Création de Logo',
      service_marketing: 'Marketing',
      service_mobile: 'Application Mobile',

      // Dates
      date_today: 'Aujourd\'hui',
      date_yesterday: 'Hier',

      // Status
      status_new: 'Nouveau',
      status_pending: 'En Attente',
      status_replied: 'Répondu',

      // Buttons
      add_project: 'Ajouter un Projet',
      update_services: 'Mettre à Jour les Services',
      generate_report: 'Générer un Rapport',
      btn_edit: 'Modifier',
      btn_delete: 'Supprimer',
      save_project: 'Enregistrer le Projet',
      save_service: 'Enregistrer le Service',
      reply_message: 'Répondre au Message',

      // Projects
      manage_projects: 'Gérer les Projets',
      cat_skincare: 'Soins & Beauté',
      cat_consulting: 'Conseil en Entreprise',
      cat_mobile_app: 'Application Mobile & Web',
      cat_fashion: 'Boutique de Mode',
      cat_luxury: 'Mode de Luxe',

      // Messages
      inbox: 'Boîte de Réception',
      msg_webdev_inquiry: 'Demande de Développement Web',
      msg_logo_project: 'Projet de Création de Logo',
      msg_time_today: 'Aujourd\'hui, 10h30',
      msg_time_yesterday: 'Hier, 14h15',
      msg_from_john: 'Message de John Doe',
      label_email: 'Email :',
      label_service: 'Service :',
      msg_body: '"Bonjour, j\'ai besoin d\'un site web de luxe pour mon agence immobilière. Merci de me faire connaître votre disponibilité."',

      // Analytics
      analytics_dashboard: 'Tableau Analytique',
      chart_label: 'Trafic du Site (Milliers)',

      // Modals
      add_service: 'Ajouter un Service',
      label_project_title: 'Titre du Projet',
      label_category: 'Catégorie',
      label_image_url: 'URL de l\'Image',
      label_service_title: 'Titre du Service',
      label_description: 'Description',

      // Placeholders
      search_placeholder: 'Rechercher...',
      ph_project_title: 'ex. Mon Nouveau Site',
      ph_category: 'ex. E-Commerce',
      ph_service_title: 'ex. Optimisation SEO',
      ph_description: 'Brève description du service',

      // Alerts
      alert_fill_title_cat: 'Veuillez remplir le titre et la catégorie',
      alert_fill_all: 'Veuillez remplir tous les champs',
      alert_project_saved: 'Projet Enregistré avec Succès !',
      alert_service_saved: 'Service Enregistré avec Succès !',
      alert_confirm_delete: 'Êtes-vous sûr de vouloir supprimer ce projet ?',
      alert_demo: 'cliqué ! (Mode démo)'
    },

    ar: {
      // Navigation
      nav_dashboard: 'لوحة التحكم',
      nav_projects: 'المشاريع',
      nav_messages: 'الرسائل',
      nav_analytics: 'التحليلات',
      nav_settings: 'الإعدادات',
      back_to_site: 'العودة إلى الموقع →',

      // Dashboard
      overview: 'نظرة عامة',
      total_visitors: 'إجمالي الزوار',
      new_messages: 'رسائل جديدة',
      active_projects: 'مشاريع نشطة',
      revenue: 'الإيرادات',
      recent_inquiries: 'الاستفسارات الأخيرة',
      quick_actions: 'إجراءات سريعة',

      // Table Headers
      th_name: 'الاسم',
      th_service: 'الخدمة',
      th_date: 'التاريخ',
      th_status: 'الحالة',

      // Services
      service_webdev: 'تطوير الويب',
      service_logo: 'تصميم الشعار',
      service_marketing: 'التسويق',
      service_mobile: 'تطبيق الهاتف',

      // Dates
      date_today: 'اليوم',
      date_yesterday: 'أمس',

      // Status
      status_new: 'جديد',
      status_pending: 'قيد الانتظار',
      status_replied: 'تم الرد',

      // Buttons
      add_project: 'إضافة مشروع جديد',
      update_services: 'تحديث الخدمات',
      generate_report: 'إنشاء تقرير',
      btn_edit: 'تعديل',
      btn_delete: 'حذف',
      save_project: 'حفظ المشروع',
      save_service: 'حفظ الخدمة',
      reply_message: 'الرد على الرسالة',

      // Projects
      manage_projects: 'إدارة المشاريع',
      cat_skincare: 'العناية بالبشرة والجمال',
      cat_consulting: 'استشارات الأعمال',
      cat_mobile_app: 'تطبيق الهاتف والويب',
      cat_fashion: 'متجر أزياء',
      cat_luxury: 'أزياء فاخرة',

      // Messages
      inbox: 'صندوق الوارد',
      msg_webdev_inquiry: 'استفسار تطوير الويب',
      msg_logo_project: 'مشروع تصميم الشعار',
      msg_time_today: 'اليوم، 10:30 صباحاً',
      msg_time_yesterday: 'أمس، 2:15 مساءً',
      msg_from_john: 'رسالة من John Doe',
      label_email: 'البريد الإلكتروني:',
      label_service: 'الخدمة:',
      msg_body: '"مرحباً، أحتاج إلى موقع ويب فاخر لوكالتي العقارية. يرجى إعلامي بمدى توفركم."',

      // Analytics
      analytics_dashboard: 'لوحة التحليلات',
      chart_label: 'حركة مرور الموقع (بالآلاف)',

      // Modals
      add_service: 'إضافة خدمة جديدة',
      label_project_title: 'عنوان المشروع',
      label_category: 'الفئة',
      label_image_url: 'رابط الصورة',
      label_service_title: 'عنوان الخدمة',
      label_description: 'الوصف',

      // Placeholders
      search_placeholder: 'ابحث عن أي شيء...',
      ph_project_title: 'مثال: موقعي الجديد',
      ph_category: 'مثال: تجارة إلكترونية',
      ph_service_title: 'مثال: تحسين محركات البحث',
      ph_description: 'وصف مختصر للخدمة',

      // Alerts
      alert_fill_title_cat: 'يرجى ملء العنوان والفئة',
      alert_fill_all: 'يرجى ملء جميع الحقول',
      alert_project_saved: 'تم حفظ المشروع بنجاح!',
      alert_service_saved: 'تم حفظ الخدمة بنجاح!',
      alert_confirm_delete: 'هل أنت متأكد أنك تريد حذف هذا المشروع؟',
      alert_demo: 'تم النقر! (وضع تجريبي)'
    }
  };

  let currentLang = localStorage.getItem('codev_admin_lang') || 'en';

  const langFlags = { en: '🇬🇧', fr: '🇫🇷', ar: '🇩🇿' };
  const langCodes = { en: 'EN', fr: 'FR', ar: 'AR' };

  function t(key) {
    return translations[currentLang]?.[key] || translations.en[key] || key;
  }

  function applyTranslations() {
    // Translate text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = t(key);
      if (translation) el.textContent = translation;
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = t(key);
      if (translation) el.setAttribute('placeholder', translation);
    });

    // Update page title
    const titleSuffix = { en: 'HOUSE OF HYPE Admin Dashboard', fr: 'HOUSE OF HYPE Tableau de Bord', ar: 'HOUSE OF HYPE لوحة التحكم' };
    document.title = titleSuffix[currentLang] || titleSuffix.en;

    // Set RTL/LTR direction
    const htmlEl = document.documentElement;
    if (currentLang === 'ar') {
      htmlEl.setAttribute('dir', 'rtl');
      htmlEl.setAttribute('lang', 'ar');
    } else {
      htmlEl.setAttribute('dir', 'ltr');
      htmlEl.setAttribute('lang', currentLang);
    }

    // Update language button display
    const flagEl = document.getElementById('lang-flag');
    const codeEl = document.getElementById('lang-code');
    if (flagEl) flagEl.textContent = langFlags[currentLang];
    if (codeEl) codeEl.textContent = langCodes[currentLang];

    // Update active state in dropdown
    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === currentLang);
    });

    // Re-init chart with translated label
    initChart();
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('codev_admin_lang', lang);
    applyTranslations();
    // Re-render projects with translated delete button
    renderAdminProjects();
  }

  // Language Switcher UI
  const langSwitcher = document.getElementById('lang-switcher');
  const langBtn = document.getElementById('lang-btn');

  if (langBtn) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langSwitcher.classList.toggle('open');
    });
  }

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const lang = opt.getAttribute('data-lang');
      setLanguage(lang);
      langSwitcher.classList.remove('open');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (langSwitcher && !langSwitcher.contains(e.target)) {
      langSwitcher.classList.remove('open');
    }
  });

  // ============================================
  // Initialize LocalStorage Data
  // ============================================
  const defaultProjects = [
    { id: 1, title: 'Glowy Original', category: 'Skincare & Beauty', image: 'images/project_glowyoriginal.png', link: 'https://glowyoriginal.com', desc: 'Simply you, softly glowing. A beautiful e-commerce platform for skincare products.' },
    { id: 2, title: 'Wheel World Consulting — Website', category: 'Business Consulting', image: 'images/project_wheelworld.png', link: 'https://wheelworld.dz', desc: 'Elite business & economic consulting web platform offering strategic clarity, market insights, and expert reports.' },
    { id: 3, title: 'Wheel World — Mobile App', category: 'Mobile & Web App', image: 'images/project_wheelworld_app.jpg', link: 'https://wheelworld.dz', desc: 'Cross-platform mobile application for real-time consultation booking, financial analytics, and economic indicators.' },
    { id: 4, title: 'LM Boutique', category: 'Fashion Boutique', image: 'images/project_lmboutique.png', link: 'https://lmboutique.store', desc: 'A fashion boutique for suit & dress rental based in Tlemcen, Algeria.' },
    { id: 5, title: 'D&N Lumiere', category: 'Luxury Fashion', image: 'images/project_dnlumiere.png', link: 'https://dn-lumiere.com', desc: 'Official shop for luxury fashion and accessories, offering a premium shopping experience.' }
  ];

  const defaultServices = [
    { id: 1, title: 'Development', image: 'images/project_wheelworld.png', badge: 'Full-Stack Web & APIs', desc: 'Web applications, custom software, and full-stack solutions built with cutting-edge technology and best practices.' },
    { id: 2, title: 'Design', image: 'images/project_dashboard.jpg', badge: 'Bespoke UI/UX Design', desc: 'Stunning UI/UX designs that captivate users and deliver exceptional digital experiences across all platforms.' },
    { id: 3, title: 'Logos & Branding', image: 'images/branding_showcase.jpg', badge: 'Royal Brand Identity', desc: 'Premium logo design and complete brand identity systems that make your business stand out from the competition.' },
    { id: 4, title: 'Marketing', image: 'images/project_dashboard.jpg', badge: '+480% Growth Engine', desc: 'Strategic digital marketing campaigns that boost visibility, drive traffic, and grow your business online.' },
    { id: 5, title: 'Google Ads', image: 'images/project_wheelworld.png', badge: 'Google Ads Partner', desc: 'High-performance Google Ads campaigns with expert targeting, optimization, and maximum ROI for your budget.' },
    { id: 6, title: 'Meta Ads', image: 'images/project_wheelworld_app.jpg', badge: 'Meta & Social Scale', desc: 'Powerful Facebook and Instagram advertising strategies that reach your ideal audience and drive conversions.' }
  ];

  // Refresh or initialize projects if invalid
  const existingStored = localStorage.getItem('codev_projects');
  if (!existingStored || existingStored.includes('CODEV_website_concept') || !existingStored.includes('Wheel World — Mobile App')) {
    localStorage.setItem('codev_projects', JSON.stringify(defaultProjects));
  }
  const existingServicesStored = localStorage.getItem('codev_services');
  if (!existingServicesStored || existingServicesStored.includes('svc_development.jpg')) {
    localStorage.setItem('codev_services', JSON.stringify(defaultServices));
  }

  // Sidebar Navigation & Tab Switching
  const navLinks = document.querySelectorAll('.sidebar-nav a');
  const tabContents = document.querySelectorAll('.tab-content');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      navLinks.forEach(item => item.parentElement.classList.remove('active'));
      tabContents.forEach(tab => tab.classList.remove('active'));
      this.parentElement.classList.add('active');
      const targetId = this.getAttribute('href').substring(1);
      const targetTab = document.getElementById(targetId);
      if (targetTab) targetTab.classList.add('active');
    });
  });

  // Render Projects in Admin Grid
  function renderAdminProjects() {
    const grid = document.querySelector('.projects-grid-admin');
    if (!grid) return;
    
    const projects = JSON.parse(localStorage.getItem('codev_projects')) || [];
    grid.innerHTML = '';
    
    projects.forEach(p => {
      grid.innerHTML += `
        <div class="admin-project-card">
          <img src="${p.image}" alt="${p.title}" onerror="this.src='https://via.placeholder.com/400x250?text=No+Image'">
          <div class="project-info">
            <h3>${p.title}</h3>
            <p>${p.category}</p>
            <div class="project-actions">
              <button class="btn-delete" onclick="deleteProject(${p.id})">${t('btn_delete')}</button>
            </div>
          </div>
        </div>
      `;
    });
  }

  window.deleteProject = function(id) {
    if(confirm(t('alert_confirm_delete'))) {
      let projects = JSON.parse(localStorage.getItem('codev_projects')) || [];
      projects = projects.filter(p => p.id !== id);
      localStorage.setItem('codev_projects', JSON.stringify(projects));
      renderAdminProjects();
    }
  };

  renderAdminProjects();

  // Modal Logic for Projects
  const projectModal = document.getElementById('project-modal');
  const addProjectBtn = document.getElementById('add-project-btn');
  const addProjectBtnTab = document.getElementById('add-project-btn-tab');
  const closeProjModalBtn = projectModal?.querySelector('.close-modal');
  const saveProjectBtn = document.getElementById('save-project');

  if (addProjectBtn) addProjectBtn.addEventListener('click', () => projectModal.classList.add('active'));
  if (addProjectBtnTab) addProjectBtnTab.addEventListener('click', () => projectModal.classList.add('active'));
  if (closeProjModalBtn) closeProjModalBtn.addEventListener('click', () => projectModal.classList.remove('active'));
  
  if (saveProjectBtn) {
    saveProjectBtn.addEventListener('click', () => {
      const title = document.getElementById('project-title').value;
      const category = document.getElementById('project-category').value;
      const image = document.getElementById('project-image').value || 'https://via.placeholder.com/400x250?text=New+Project';
      
      if (!title || !category) {
        alert(t('alert_fill_title_cat'));
        return;
      }

      let projects = JSON.parse(localStorage.getItem('codev_projects')) || [];
      const newId = projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1;
      
      projects.push({ id: newId, title, category, image });
      localStorage.setItem('codev_projects', JSON.stringify(projects));
      
      document.getElementById('project-title').value = '';
      document.getElementById('project-category').value = '';
      document.getElementById('project-image').value = '';
      
      projectModal.classList.remove('active');
      renderAdminProjects();
      alert(t('alert_project_saved'));
    });
  }

  // Modal Logic for Services
  const serviceModal = document.getElementById('service-modal');
  const addServiceBtn = document.getElementById('update-services-btn');
  const closeServModalBtn = document.getElementById('close-service-modal');
  const saveServiceBtn = document.getElementById('save-service');

  if (addServiceBtn) addServiceBtn.addEventListener('click', () => serviceModal.classList.add('active'));
  if (closeServModalBtn) closeServModalBtn.addEventListener('click', () => serviceModal.classList.remove('active'));

  if (saveServiceBtn) {
    saveServiceBtn.addEventListener('click', () => {
      const title = document.getElementById('service-title').value;
      const desc = document.getElementById('service-desc').value;
      
      if (!title || !desc) {
        alert(t('alert_fill_all'));
        return;
      }

      let services = JSON.parse(localStorage.getItem('codev_services')) || [];
      const newId = services.length > 0 ? Math.max(...services.map(s => s.id)) + 1 : 1;
      
      services.push({ id: newId, title, desc });
      localStorage.setItem('codev_services', JSON.stringify(services));
      
      document.getElementById('service-title').value = '';
      document.getElementById('service-desc').value = '';
      
      serviceModal.classList.remove('active');
      alert(t('alert_service_saved'));
    });
  }

  // Close modals when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === projectModal) projectModal.classList.remove('active');
    if (e.target === serviceModal) serviceModal.classList.remove('active');
  });

  // Action Buttons (General)
  const actionBtns = document.querySelectorAll('.action-btn:not(#add-project-btn):not(#save-project):not(#update-services-btn):not(#save-service)');
  actionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => this.style.transform = '', 150);
      alert(this.innerText + ' ' + t('alert_demo'));
    });
  });

  // Initialize Chart.js for Analytics Tab
  let trafficChart = null;

  function initChart() {
    const ctx = document.getElementById('trafficChart');
    if (!ctx || typeof Chart === 'undefined') return;
    
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    
    if (trafficChart) {
      trafficChart.destroy();
    }

    const monthLabels = {
      en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      fr: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil'],
      ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو']
    };

    trafficChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: monthLabels[currentLang] || monthLabels.en,
        datasets: [{
          label: t('chart_label'),
          data: [65, 82, 90, 115, 140, 185, 240],
          borderColor: isLight ? '#0891b2' : '#06b6d4',
          backgroundColor: isLight ? 'rgba(8, 145, 178, 0.08)' : 'rgba(6, 182, 212, 0.1)',
          borderWidth: 3,
          pointBackgroundColor: isLight ? '#b8960c' : '#d4af37',
          pointBorderColor: isLight ? '#0f172a' : '#fff',
          pointRadius: 6,
          pointHoverRadius: 8,
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: isLight ? '#0f172a' : '#fff',
              font: { family: currentLang === 'ar' ? "'Cairo', sans-serif" : "'Outfit', sans-serif", size: 14 }
            }
          }
        },
        scales: {
          x: { grid: { color: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255, 255, 255, 0.05)' }, ticks: { color: isLight ? '#64748b' : '#94a3b8', font: { family: currentLang === 'ar' ? "'Cairo', sans-serif" : "'Outfit', sans-serif" } } },
          y: { grid: { color: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255, 255, 255, 0.05)' }, ticks: { color: isLight ? '#64748b' : '#94a3b8', font: { family: currentLang === 'ar' ? "'Cairo', sans-serif" : "'Outfit', sans-serif" } } }
        }
      }
    });
  }

  initChart();

  // ============================================
  // THEME TOGGLE (Dark / Light Mode)
  // ============================================
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('codev_admin_theme');

  // Apply saved theme on load (default to original luxury dark theme)
  if (savedTheme && savedTheme !== 'light') {
    document.documentElement.setAttribute('data-theme', savedTheme);
    initChart();
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.removeItem('codev_admin_theme');
    initChart();
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('codev_admin_theme', newTheme);

      // Refresh the chart with theme-appropriate colors
      initChart();
    });
  }

  // ============================================
  // APPLY SAVED LANGUAGE ON LOAD
  // ============================================
  applyTranslations();
});
