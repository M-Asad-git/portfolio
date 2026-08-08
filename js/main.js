// =========================================================================
// MUHAMMAD ASAD - PORTFOLIO INTERACTIVE LOGIC & ENGINE
// =========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initParticleCanvas();
  initTypewriter();
  renderProfileMetrics();
  renderProjects('all');
  renderSkills();
  renderServices();
  renderTimeline();
  initFilterButtons();
  initModalEvents();
  initContactForm();
  initNavigation();
});

// --- 1. Theme Toggle System ---
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('asad_portfolio_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('asad_portfolio_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;
  toggleBtn.innerHTML = theme === 'dark' 
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></svg>`
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
}

// --- 2. Interactive Canvas Particle Background ---
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = Math.min(Math.floor(window.innerWidth / 20), 65);
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 1.8 + 0.8,
      color: Math.random() > 0.5 ? 'rgba(6, 182, 212, ' : 'rgba(139, 92, 246, '
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + '0.7)';
      ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(6, 182, 212, ${0.18 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

// --- 3. Live Typewriter Effect ---
function initTypewriter() {
  const textEl = document.getElementById('typewriter-text');
  if (!textEl) return;

  const roles = PORTFOLIO_DATA.profile.subtitles;
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let speed = 90;

  function type() {
    const current = roles[roleIdx];
    if (isDeleting) {
      textEl.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      speed = 40;
    } else {
      textEl.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      speed = 85;
    }

    if (!isDeleting && charIdx === current.length) {
      speed = 1800; // Pause at full string
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      speed = 450;
    }

    setTimeout(type, speed);
  }
  type();
}

// --- 4. Render Profile Metrics ---
function renderProfileMetrics() {
  const container = document.getElementById('hero-metrics-container');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.profile.metrics.map(m => `
    <div class="metric-card">
      <div class="metric-val">${m.value}</div>
      <div class="metric-lbl">${m.label}</div>
    </div>
  `).join('');
}

// --- 5. Render Project Grid ---
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filtered = filter === 'all' 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => {
    const displayUrl = p.liveUrl 
      ? p.liveUrl.replace('https://', '').replace('http://', '').replace(/\/$/, '') 
      : (p.githubUrl ? p.githubUrl.replace('https://', '') : 'internal-build');

    return `
      <article class="glass-card project-card" data-category="${p.category}">
        <div class="project-thumb">
          <div class="browser-bar">
            <span class="browser-dot red"></span>
            <span class="browser-dot yellow"></span>
            <span class="browser-dot green"></span>
            <span class="browser-url">${displayUrl}</span>
          </div>
          <div class="project-img-wrap">
            <img src="${p.image}" alt="${p.title}" loading="lazy" />
            <div class="project-img-overlay"></div>
          </div>
          <span class="project-badge-tag">${p.badge}</span>
        </div>
        <div class="project-content">
          <span class="project-category-meta">${p.categoryLabel}</span>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.subtitle || p.description}</p>
          <div class="project-tags">
            ${p.techStack.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}
            ${p.techStack.length > 4 ? `<span class="tech-tag">+${p.techStack.length - 4}</span>` : ''}
          </div>
          <div class="project-footer">
            <button class="btn btn-secondary btn-sm" onclick="openProjectModal('${p.id}')">
              <span>Explore Details</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <div class="project-links">
              ${p.githubUrl ? `
                <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="social-link btn-icon" title="View Source on GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
              ` : ''}
              ${p.liveUrl ? `
                <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="social-link btn-icon" title="Open Live Website">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// --- 6. Filter Buttons Interaction ---
function initFilterButtons() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

// --- 7. Render Skills & Engineering Capabilities Matrix ---
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.skillCategories.map(cat => `
    <div class="glass-card skill-category-card">
      <div class="skill-category-header">
        <div class="skill-cat-icon">
          ${getCategoryIcon(cat.icon)}
        </div>
        <div>
          <h3 class="skill-cat-title">${cat.category}</h3>
          <span class="skill-cat-subtitle">${cat.subtitle}</span>
        </div>
      </div>
      <p class="skill-cat-description">${cat.description}</p>
      <div class="skill-badge-wrap">
        ${cat.badges.map(b => `<span class="capability-badge">${b}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function getCategoryIcon(type) {
  switch (type) {
    case 'brain':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"/></svg>`;
    case 'code':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
    case 'design':
    case 'paint':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`;
    case 'server':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`;
    default:
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`;
  }
}

// --- 8. Render Experience & Career Timeline ---
function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="glass-card timeline-card">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-role">${exp.role}</h3>
            <div class="timeline-company">${exp.companyUrl ? `<a href="${exp.companyUrl}" target="_blank" rel="noopener noreferrer">${exp.company} ↗</a>` : exp.company}</div>
          </div>
          <span class="timeline-period">${exp.period} • ${exp.badge}</span>
        </div>
        <p class="timeline-desc">${exp.description}</p>
        <ul class="timeline-highlights">
          ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
        <div class="project-tags">
          ${exp.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// --- 9. Interactive Project Modal Logic ---
function openProjectModal(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const body = document.getElementById('modal-body-content');
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="modal-img-wrap">
      <img src="${project.image}" alt="${project.title}" />
    </div>
    <span class="project-category-meta">${project.categoryLabel} • ${project.badge}</span>
    <h2 style="font-size: 1.8rem; font-weight: 800; margin: 0.35rem 0 1rem; color: var(--text-primary);">${project.title}</h2>
    <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.25rem;">${project.description}</p>
    
    ${project.impact ? `
      <div style="padding: 0.85rem 1.15rem; background: var(--bg-tertiary); border-left: 3px solid var(--cyan); border-radius: var(--radius-sm); margin-bottom: 1.5rem;">
        <strong style="color: var(--cyan); font-size: 0.85rem; text-transform: uppercase; font-family: var(--font-mono); display: block; margin-bottom: 0.25rem;">Key Impact</strong>
        <span style="font-size: 0.92rem; color: var(--text-primary);">${project.impact}</span>
      </div>
    ` : ''}

    <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--text-primary);">Core Technical Capabilities</h4>
    <ul class="timeline-highlights" style="margin-bottom: 1.5rem;">
      ${project.features.map(f => `<li>${f}</li>`).join('')}
    </ul>

    ${project.stats ? `
      <div class="modal-stats-grid">
        ${Object.entries(project.stats).map(([k, v]) => `
          <div class="modal-stat-box">
            <div class="modal-stat-val">${v}</div>
            <div class="modal-stat-lbl">${k}</div>
          </div>
        `).join('')}
      </div>
    ` : ''}

    <div style="margin-top: 1.5rem;">
      <h4 style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 0.65rem;">Tech Stack &amp; Tools</h4>
      <div class="project-tags">
        ${project.techStack.map(t => `<span class="tech-tag" style="background: var(--bg-primary); border-color: var(--cyan); color: var(--cyan);">${t}</span>`).join('')}
      </div>
    </div>

    <div style="display: flex; gap: 1rem; margin-top: 2rem; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem; flex-wrap: wrap;">
      ${project.liveUrl ? `
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <span>Launch Live Platform</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      ` : ''}
      ${project.githubUrl ? `
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          <span>View GitHub Repo</span>
        </a>
      ` : ''}
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function initModalEvents() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });
  }
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// --- 10. Copy Email & Quick Toast Notification ---
function copyEmailToClipboard() {
  const email = PORTFOLIO_DATA.profile.email;
  navigator.clipboard.writeText(email).then(() => {
    showToast(`✓ Copied ${email} to clipboard!`);
  }).catch(() => {
    showToast(`Email: ${email}`);
  });
}

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// --- 11. Contact Form Handler ---
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-msg').value;

    if (!name || !email || !message) {
      showToast('⚠️ Please fill out all fields.');
      return;
    }

    // Direct mailto link preparation
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Muhammad Asad,\n\n${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${subject}&body=${body}`;

    showToast('🚀 Opening your email client to dispatch message...');
    form.reset();
  });
}

// --- 13. Render What I Can Deliver For You (Services Grid) ---
function renderServices() {
  const container = document.getElementById('services-container');
  const servicesList = PORTFOLIO_DATA.services || (PORTFOLIO_DATA.profile && PORTFOLIO_DATA.profile.services);
  if (!container || !servicesList) return;

  container.innerHTML = servicesList.map(svc => `
    <div class="glass-card service-card">
      <div class="service-card-top">
        <div class="service-icon-box">
          ${getServiceIcon(svc.icon)}
        </div>
        <span class="service-badge">${svc.badge}</span>
      </div>
      <h3 class="service-title">${svc.title}</h3>
      <p class="service-desc">${svc.desc}</p>
      <ul class="service-deliverables">
        ${svc.deliverables.map(d => `
          <li>
            <span class="service-check">✓</span>
            <span>${d}</span>
          </li>
        `).join('')}
      </ul>
      <a href="https://wa.me/923467042119?text=${encodeURIComponent(`Hi Muhammad Asad, I would like to inquire about: ${svc.title}`)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="margin-top: auto; width: 100%;">
        <span>${svc.actionText}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  `).join('');
}

function getServiceIcon(type) {
  switch (type) {
    case 'globe':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
    case 'bot':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4M8 15h.01M16 15h.01"></path></svg>`;
    default:
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`;
  }
}

// --- 14. Resume Preview Modal Logic ---
function openResumeModal() {
  const modal = document.getElementById('project-modal');
  const body = document.getElementById('modal-body-content');
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="resume-modal-body" id="printable-resume">
      <div class="resume-header">
        <h1 class="resume-name">Muhammad Asad</h1>
        <div class="resume-subtitle">AI &amp; Full-Stack Developer • BS Artificial Intelligence (3rd Sem)</div>
        <div class="resume-contact-bar">
          <span>📍 Multan, Pakistan</span>
          <span>✉️ asadpgc125@gmail.com</span>
          <span>📱 +92 346 7042119</span>
          <span>🐙 github.com/M-Asad-git</span>
        </div>
      </div>

      <div class="resume-section">
        <h2 class="resume-section-title">Education</h2>
        <div class="resume-item">
          <div class="resume-item-top">
            <span>BS in Artificial Intelligence</span>
            <span>2025 — 2029 (Expected)</span>
          </div>
          <div class="resume-item-sub">Emerson University Multan • 3rd Semester</div>
          <p class="resume-item-desc">Core Focus: Machine Learning, Data Structures &amp; Algorithms, Autonomous Systems, and Computational Mathematics.</p>
        </div>
      </div>

      <div class="resume-section">
        <h2 class="resume-section-title">Work Experience &amp; Organizations</h2>
        
        <!-- AZ25 Lab (Current) -->
        <div class="resume-item">
          <div class="resume-item-top">
            <span>AZ25 Lab (az25lab.com)</span>
            <span style="color: var(--emerald); font-weight: 700;">March 2025 — Present (Current Role)</span>
          </div>
          <div class="resume-item-sub">AI &amp; Software Developer • Autonomous Bot Engineering</div>
          <p class="resume-item-desc">Joined in March 2025. Developing autonomous web scraping agents, Slack webhook notification bots, automated daily email digests, and productivity suites.</p>
        </div>

        <!-- TriTechTeal -->
        <div class="resume-item">
          <div class="resume-item-top">
            <span>TriTechTeal (tritechteal.com)</span>
            <span>2024 — Jan 2025 (Former Workplace)</span>
          </div>
          <div class="resume-item-sub">Web Developer (Former Intern) • Client Web Platforms</div>
          <p class="resume-item-desc">Architected, developed, and deployed 5+ live client web platforms across healthcare, international commerce, real estate, and luxury architecture with custom DNS and cPanel hosting.</p>
        </div>
      </div>

      <div class="resume-section">
        <h2 class="resume-section-title">Featured Client Deliverables &amp; Key Projects</h2>
        
        <div class="resume-item">
          <div class="resume-item-top">
            <span>Global eTelerad &amp; Telerad Partner</span>
            <span>globaletelerad.com • teleradpartner.com</span>
          </div>
          <div class="resume-item-sub">Diagnostic Telemedicine &amp; Healthcare Portals (Live Production)</div>
          <p class="resume-item-desc">Engineered diagnostic telemedicine platforms for remote radiology reporting and partner consultations with high-trust healthcare UX and SEO optimization.</p>
        </div>

        <div class="resume-item">
          <div class="resume-item-top">
            <span>Brightexx Global Commerce</span>
            <span>brightexx.com</span>
          </div>
          <div class="resume-item-sub">International Trade &amp; B2B Catalog (Live Production)</div>
          <p class="resume-item-desc">Architected international product catalog with detailed specifications and instant B2B quotation request workflows.</p>
        </div>

        <div class="resume-item">
          <div class="resume-item-top">
            <span>A One Source Interior &amp; A-One Real Estate</span>
            <span>aonesourceinterior.com • aonerealestatebuilder.com</span>
          </div>
          <div class="resume-item-sub">Luxury Architecture &amp; Property Listings (Live Portals)</div>
          <p class="resume-item-desc">Designed editorial visual project galleries, property listings, and appointment scheduling workflows with custom vector branding.</p>
        </div>

        <div class="resume-item">
          <div class="resume-item-top">
            <span>Autonomous Remote Job Agent &amp; Bot</span>
            <span style="color: var(--text-muted); font-size: 0.8rem;">Private Tool (AZ25 Lab)</span>
          </div>
          <div class="resume-item-sub">AI Automation &amp; Web Scraping Engine (Python, Slack API, SMTP)</div>
          <p class="resume-item-desc">Built autonomous job hunting scraper scanning LinkedIn and ATS job boards with real-time Slack webhook alerts and daily automated email digests.</p>
        </div>
      </div>

      <div class="resume-section">
        <h2 class="resume-section-title">Technical Capabilities</h2>
        <p class="resume-item-desc">
          <strong>Web &amp; Hosting:</strong> JavaScript (ES6+), React/Next.js basics, HTML5, CSS3 Glassmorphism, DNS Configuration (A/CNAME/MX), Verpex &amp; cPanel, SSL, SEO.<br />
          <strong>AI &amp; Automation:</strong> Autonomous Scraping Bots, Slack Webhooks, SMTP Email Digests, LLM APIs &amp; Prompting, Python Automation.<br />
          <strong>Design &amp; Mobile:</strong> Custom Vector Logo Design (SVG), Brand Color Systems, Typography Hierarchy, Swift iOS Native Basics, Git &amp; GitHub.
        </p>
      </div>

      <div style="display: flex; gap: 1rem; margin-top: 2rem; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem; flex-wrap: wrap;">
        <a href="resume.html" target="_blank" class="btn btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          <span>Open Full Printable Resume (New Tab)</span>
        </a>
        <button onclick="window.print()" class="btn btn-secondary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
          <span>Print / Save as PDF</span>
        </button>
        <a href="https://wa.me/923467042119" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <span>Contact on WhatsApp</span>
        </a>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// --- 15. Mobile Navigation & Drawer Toggle ---
function initNavigation() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isOpen);
      menuBtn.innerHTML = isOpen
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });

    // Close mobile drawer when any link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      });
    });

    // Close when clicking outside of nav drawer
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        if (navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
          menuBtn.setAttribute('aria-expanded', 'false');
          menuBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
        }
      }
    });
  }
}
