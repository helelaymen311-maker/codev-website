document.addEventListener('DOMContentLoaded', () => {
  // Initialize LocalStorage Data
  const defaultProjects = [
    { id: 1, title: 'Wheelworld.dz', category: 'Business Consulting', image: 'images/CODEV_website_concept_wheelworld_consulting_luxury_202609072010.jpeg' },
    { id: 2, title: 'LM Boutique', category: 'Fashion Store', image: 'images/CODEV_website_concept_ecommerce_fashion_boutique_lmboutique_202609072010.jpeg' },
    { id: 3, title: 'D&N Lumiere', category: 'Luxury Fashion', image: 'images/CODEV_website_concept_ecommerce_fashion_boutique_202609072013.jpeg' },
    { id: 4, title: 'Glowy Original', category: 'Skincare', image: 'images/CODEV_website_concept_ecommerce_skincare_cosmetics_glowyoriginal_202609072010.jpeg' }
  ];

  const defaultServices = [
    { id: 1, title: 'Development', desc: 'Web applications, custom software, and full-stack solutions built with cutting-edge technology and best practices.' },
    { id: 2, title: 'Design', desc: 'Stunning UI/UX designs that captivate users and deliver exceptional digital experiences across all platforms.' },
    { id: 3, title: 'Logos & Branding', desc: 'Premium logo design and complete brand identity systems that make your business stand out from the competition.' }
  ];

  if (!localStorage.getItem('codev_projects')) {
    localStorage.setItem('codev_projects', JSON.stringify(defaultProjects));
  }
  if (!localStorage.getItem('codev_services')) {
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
              <button class="btn-delete" onclick="deleteProject(${p.id})">Delete</button>
            </div>
          </div>
        </div>
      `;
    });
  }

  window.deleteProject = function(id) {
    if(confirm("Are you sure you want to delete this project?")) {
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
  const closeProjModalBtn = projectModal?.querySelector('.close-modal');
  const saveProjectBtn = document.getElementById('save-project');

  if (addProjectBtn) addProjectBtn.addEventListener('click', () => projectModal.classList.add('active'));
  if (closeProjModalBtn) closeProjModalBtn.addEventListener('click', () => projectModal.classList.remove('active'));
  
  if (saveProjectBtn) {
    saveProjectBtn.addEventListener('click', () => {
      const title = document.getElementById('project-title').value;
      const category = document.getElementById('project-category').value;
      const image = document.getElementById('project-image').value || 'https://via.placeholder.com/400x250?text=New+Project';
      
      if (!title || !category) {
        alert("Please fill in title and category");
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
      alert("Project Saved Successfully to Local Storage!");
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
        alert("Please fill in all fields");
        return;
      }

      let services = JSON.parse(localStorage.getItem('codev_services')) || [];
      const newId = services.length > 0 ? Math.max(...services.map(s => s.id)) + 1 : 1;
      
      services.push({ id: newId, title, desc });
      localStorage.setItem('codev_services', JSON.stringify(services));
      
      document.getElementById('service-title').value = '';
      document.getElementById('service-desc').value = '';
      
      serviceModal.classList.remove('active');
      alert("Service Saved Successfully to Local Storage!");
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
      alert(this.innerText + ' clicked! (Demo mode)');
    });
  });

  // Initialize Chart.js for Analytics Tab
  const ctx = document.getElementById('trafficChart');
  if (ctx && typeof Chart !== 'undefined') {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Website Traffic (Thousands)',
          data: [65, 82, 90, 115, 140, 185, 240],
          borderColor: '#06b6d4', // Cyan neon
          backgroundColor: 'rgba(6, 182, 212, 0.1)',
          borderWidth: 3,
          pointBackgroundColor: '#d4af37', // Gold points
          pointBorderColor: '#fff',
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
              color: '#fff',
              font: { family: "'Outfit', sans-serif", size: 14 }
            }
          }
        },
        scales: {
          x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8', font: { family: "'Outfit', sans-serif" } } },
          y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#94a3b8', font: { family: "'Outfit', sans-serif" } } }
        }
      }
    });
  }
});
