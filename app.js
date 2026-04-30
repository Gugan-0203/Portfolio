// ===== PORTFOLIO DATA =====
const portfolioData = {
  name: "Gugan Senthilnathan",
  title: "Senior Front-End Developer & Scrum Master",
  location: "Chennai, Tamil Nadu",
  email: "gugan.qlik23@gmail.com",
  phone: "+91 98947 46314",
  linkedin: "https://www.linkedin.com/in/gugan-s-b82656230",
  experience_years: "4+",
  summary: `Results-driven Senior Front-End Developer and Scrum Master with 4+ years of hands-on experience delivering high-performance, scalable web applications across fintech, CRM, and enterprise domains. Proficient in React.js, TypeScript, Next.js, and real-time technologies (WebSockets, Socket.IO). Demonstrated ability to lead Agile teams, boost sprint velocity by 30%, and reduce codebase redundancy by 40% through component-driven architecture. Adept at bridging technical execution with business goals — transforming stakeholder requirements into clean, accessible, and production-ready UIs.`,

  experiences: [
    {
      role: "Front-End Developer",
      company: "Cipherbizz (CipherTech Solution)",
      type: "Full Time – Remote",
      location: "Dubai, UAE",
      period: "Nov 2025 – Present",
      project: "Auction Management System",
      tech: ["ASP.NET Razor", "C#", "REST APIs", "CSS3", "HTML5"],
      bullets: [
        "Designed and delivered a full-featured auction management UI covering bidder registration, lot configuration, real-time bidding engine, and reporting dashboards — supporting live auction operations for international clients.",
        "Engineered cross-browser responsive interfaces using ASP.NET Razor views with modern CSS techniques, ensuring consistent UX across Chrome, Firefox, Safari, and Edge.",
        "Integrated frontend with .NET Web APIs for real-time bidding data flow; implemented live UI state updates using polling and REST hooks, reducing bid reflection latency to under 500ms.",
        "Enforced secure, scalable UI architecture aligned with enterprise coding standards; optimized bundle size and load performance, achieving measurable improvements in page render times."
      ]
    },
    {
      role: "Senior Front-End Developer & Scrum Master",
      company: "IAT Technologies",
      type: "Full Time – Hybrid",
      location: "Chennai, Tamil Nadu",
      period: "Jan 2025 – Nov 2025",
      project: "Custom CRM Application",
      tech: ["React.js", "TypeScript", "Material UI", "FastAPI", "Socket.IO", "Svelte", "SDLC"],
      bullets: [
        "Facilitated all Scrum ceremonies (daily stand-ups, sprint planning, reviews, retrospectives) for a 6-member cross-functional team, driving a 30% increase in sprint velocity over 3 quarters.",
        "Acted as primary liaison between product owners and the engineering team; decomposed business requirements into well-defined user stories with clear acceptance criteria, reducing mid-sprint scope changes by ~35%.",
        "Architected a modular, feature-based CRM frontend (Leads, Deals, Contacts, Tickets, Tasks) using React.js + TypeScript, enabling independent team ownership of modules and faster feature delivery.",
        "Built a shared component library (forms, modals, data tables, filters) using Material UI + Svelte, eliminating 40% redundant code and enforcing visual consistency across all product screens.",
        "Integrated Socket.IO for real-time CRM event notifications (new leads, ticket updates, deal status changes), streamlining agent workflows and improving team productivity by ~25%."
      ]
    },
    {
      role: "Front-End Developer",
      company: "Gravitus IT Services Pvt. Ltd.",
      type: "Full Time – Hybrid",
      location: "Salem, Tamil Nadu",
      period: "Aug 2022 – Dec 2024",
      project: "Gravitus Crypto Exchange (Spot & P2P)",
      tech: ["React.js", "JavaScript ES6+", "WebSockets", "Material UI", "REST APIs", "Git", "HTML5", "CSS3"],
      bullets: [
        "Built Spot & P2P cryptocurrency exchange UI from scratch — real-time order books, live candlestick charts, price tickers, and transaction history — serving thousands of concurrent traders.",
        "Architected WebSocket data pipelines for live trade and order-book feeds, enabling near-instant UI synchronization during high-frequency trading peaks with zero perceptible lag.",
        "Optimized wallet management and order dashboards with React lazy loading, code splitting, and API response caching — reducing average page interaction time by 20% across key user flows.",
        "Championed WCAG 2.1 AA accessibility standards and cross-browser compatibility (Chrome, Firefox, Safari, Edge); established design token system and component documentation to accelerate onboarding for new developers."
      ]
    }
  ],

  skills: {
    frontend: ["React.js / Next.js", "TypeScript", "Vue.js / Svelte", "JavaScript ES6+", "HTML5", "CSS3 / SASS"],
    ui: ["Material UI", "Tailwind CSS", "Bootstrap", "Styled Components", "Redux / Context API"],
    api: ["REST APIs / Axios", "WebSockets", "Socket.IO", "Postman", "JSON / FastAPI"],
    build: ["Vite", "Webpack", "Babel", "NPM / Yarn"],
    testing: ["Jest", "Cypress", "React Testing Library"],
    devops: ["Git / GitHub", "CI/CD", "Vercel", "Firebase", "Jira"],
    soft: ["Agile / Scrum", "Problem Solving", "Clean Code", "Time Management", "Communication"]
  },

  coreSkills: [
    { name: "React.js / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Vue.js / Svelte", level: 80 },
    { name: "Material UI / Tailwind", level: 88 },
    { name: "WebSockets / Socket.IO", level: 85 },
    { name: "REST APIs / Axios", level: 92 },
    { name: "Jest / Cypress", level: 78 },
    { name: "Git / CI/CD", level: 88 },
    { name: "Agile / Scrum", level: 95 },
  ],

  projects: [
    {
      emoji: "🏦",
      title: "Auction Management System",
      year: "2025 – Present",
      company: "Cipherbizz",
      tech: ["ASP.NET Razor", "C#", "REST APIs", "CSS3"],
      description: "Full-featured auction management UI covering bidder registration, lot configuration, real-time bidding engine, and reporting dashboards for international clients in Dubai.",
      highlights: ["Real-time bidding engine", "Sub-500ms bid updates", "Cross-browser compatible", "Enterprise scalable architecture"]
    },
    {
      emoji: "📊",
      title: "Custom CRM Application",
      year: "Jan 2025 – Nov 2025",
      company: "IAT Technologies",
      tech: ["React.js", "TypeScript", "Material UI", "Socket.IO", "FastAPI"],
      description: "Modular CRM platform with Leads, Deals, Contacts, Tickets, and Tasks modules. Shared component library reduced code redundancy by 40% with real-time Socket.IO notifications.",
      highlights: ["+30% sprint velocity", "40% less redundant code", "6-member team led", "Real-time notifications"]
    },
    {
      emoji: "₿",
      title: "Gravitus Crypto Exchange",
      year: "Aug 2022 – Dec 2024",
      company: "Gravitus IT Services",
      tech: ["React.js", "WebSockets", "Material UI", "JavaScript ES6+"],
      description: "Spot & P2P cryptocurrency exchange UI from scratch with real-time order books, live candlestick charts, price tickers, and transaction history serving thousands of concurrent traders.",
      highlights: ["Spot & P2P trading", "Real-time WebSocket feeds", "20% faster interactions", "WCAG 2.1 AA compliant"]
    },
    {
      emoji: "🤖",
      title: "AI-Based Image Conversion Tool",
      year: "2025",
      company: "External Product",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs", "Git"],
      description: "Responsive frontend for an AI-powered image conversion tool with drag-and-drop uploads, real-time progress tracking, and live AI preview rendering, optimized for large file handling.",
      highlights: ["Drag & drop uploads", "Real-time AI preview", "REST API integration", "Performance optimized"]
    }
  ],

  education: [
    { degree: "Bachelor of Engineering", school: "VSB Engineering College", year: "2016 – 2020", detail: "CGPA: 7.25 / 10", emoji: "🎓" },
    { degree: "HSC", school: "Kongu Matric Higher Secondary School", year: "2015 – 2016", detail: "Score: 65.83%", emoji: "📚" },
    { degree: "SSLC", school: "Sri Ramakrishna Matric School", year: "2013 – 2014", detail: "Score: 65.83%", emoji: "📖" }
  ],

  languages: [
    { lang: "Tamil", level: "Native" },
    { lang: "English", level: "Professional" }
  ]
};

// ===== RESPONSE GENERATORS =====
function buildAbout() {
  return `
    <div class="highlight-box">
      <strong style="color:var(--accent)">👋 Hey there!</strong> I'm Gugan Senthilnathan — a Senior Front-End Developer & Scrum Master based in Chennai, Tamil Nadu.
    </div>
    <p>${portfolioData.summary}</p>
    <div class="stats-row">
      <div class="stat-item"><div class="stat-value">4+</div><div class="stat-label">Years Experience</div></div>
      <div class="stat-item"><div class="stat-value">3</div><div class="stat-label">Companies</div></div>
      <div class="stat-item"><div class="stat-value">4</div><div class="stat-label">Major Projects</div></div>
      <div class="stat-item"><div class="stat-value">30%</div><div class="stat-label">Sprint Velocity ↑</div></div>
    </div>
    <p style="color:var(--text-secondary);font-size:13px;">💬 Feel free to ask me about my <strong style="color:var(--text-primary)">experience</strong>, <strong style="color:var(--text-primary)">skills</strong>, <strong style="color:var(--text-primary)">projects</strong>, or how to get in <strong style="color:var(--text-primary)">contact</strong>!</p>
  `;
}

function buildExperience() {
  let html = `<p>Here's a walkthrough of my professional journey — <strong>${portfolioData.experience_years} years</strong> of building production-grade UIs across fintech, CRM, and enterprise domains:</p>`;
  portfolioData.experiences.forEach((exp, i) => {
    html += `
      <div class="exp-card">
        <div class="exp-header">
          <span class="exp-role">${exp.role}</span>
          <span class="exp-period">${exp.period}</span>
        </div>
        <div class="exp-company">${exp.company}</div>
        <div class="exp-location">📍 ${exp.location} · ${exp.type}</div>
        <div class="exp-project">🗂 ${exp.project}</div>
        <div class="tech-tags">${exp.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
        <ul class="exp-bullets">${exp.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      </div>
    `;
  });
  return html;
}

function buildSkills() {
  const s = portfolioData.skills;
  let html = `<p>Here's my complete technical toolkit — built through hands-on experience across multiple production projects:</p>
    <div class="skills-grid">
      <div class="skill-category">
        <div class="skill-cat-title">⚛️ Front-End</div>
        <div class="skill-list">${s.frontend.map(sk => `<span class="skill-pill">${sk}</span>`).join('')}</div>
      </div>
      <div class="skill-category">
        <div class="skill-cat-title">🎨 UI Frameworks</div>
        <div class="skill-list">${s.ui.map(sk => `<span class="skill-pill">${sk}</span>`).join('')}</div>
      </div>
      <div class="skill-category">
        <div class="skill-cat-title">🔌 API & Real-Time</div>
        <div class="skill-list">${s.api.map(sk => `<span class="skill-pill">${sk}</span>`).join('')}</div>
      </div>
      <div class="skill-category">
        <div class="skill-cat-title">🛠 Build Tools</div>
        <div class="skill-list">${s.build.map(sk => `<span class="skill-pill">${sk}</span>`).join('')}</div>
      </div>
      <div class="skill-category">
        <div class="skill-cat-title">🧪 Testing</div>
        <div class="skill-list">${s.testing.map(sk => `<span class="skill-pill">${sk}</span>`).join('')}</div>
      </div>
      <div class="skill-category">
        <div class="skill-cat-title">🚀 DevOps & Tools</div>
        <div class="skill-list">${s.devops.map(sk => `<span class="skill-pill">${sk}</span>`).join('')}</div>
      </div>
    </div>
    <div class="section-divider">Proficiency</div>
    <div class="info-card">
      <div class="info-card-header">
        <div class="info-card-icon">📊</div>
        <div><div class="info-card-title">Core Skill Levels</div><div class="info-card-subtitle">Self-assessed based on production usage</div></div>
      </div>
      ${portfolioData.coreSkills.map(cs => `
        <div class="skill-bar-item">
          <div class="skill-bar-label"><span>${cs.name}</span><span>${cs.level}%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" style="width:0%" data-width="${cs.level}%"></div></div>
        </div>
      `).join('')}
    </div>`;
  return html;
}

function buildProjects() {
  let html = `<p>Here are the key projects I've delivered — from crypto exchanges to AI tools:</p>`;
  portfolioData.projects.forEach(p => {
    html += `
      <div class="project-card">
        <div class="project-header">
          <span class="project-emoji">${p.emoji}</span>
          <div>
            <div class="project-title">${p.title}</div>
            <div class="project-year">${p.company} · ${p.year}</div>
          </div>
        </div>
        <p class="project-desc">${p.description}</p>
        <div class="tech-tags">${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
        <div class="skill-list" style="margin-top:10px">${p.highlights.map(h => `<span class="skill-pill" style="color:var(--green);border-color:rgba(76,175,125,0.2);background:rgba(76,175,125,0.08)">✓ ${h}</span>`).join('')}</div>
      </div>
    `;
  });
  return html;
}

function buildEducation() {
  let html = `<p>My academic background that shaped my technical foundation:</p>`;
  portfolioData.education.forEach(e => {
    html += `
      <div class="edu-card">
        <div class="edu-icon">${e.emoji}</div>
        <div>
          <div class="edu-degree">${e.degree}</div>
          <div class="edu-school">${e.school}</div>
          <div class="edu-detail">${e.year} · ${e.detail}</div>
        </div>
      </div>
    `;
  });
  html += `
    <div class="section-divider">Languages</div>
    <div class="skills-grid" style="grid-template-columns:1fr 1fr">
      ${portfolioData.languages.map(l => `
        <div class="skill-category" style="text-align:center">
          <div class="skill-cat-title" style="justify-content:center">🌐 ${l.lang}</div>
          <span class="skill-pill">${l.level}</span>
        </div>
      `).join('')}
    </div>
  `;
  return html;
}

function buildContact() {
  return `
    <p>I'm open to exciting opportunities and collaborations! Feel free to reach out through any of the channels below:</p>
    <div class="contact-grid">
      <a href="mailto:${portfolioData.email}" class="contact-item">
        <div class="contact-icon">📧</div>
        <div><div class="contact-label">Email</div><div class="contact-value">${portfolioData.email}</div></div>
      </a>
      <a href="tel:${portfolioData.phone}" class="contact-item">
        <div class="contact-icon">📞</div>
        <div><div class="contact-label">Phone</div><div class="contact-value">${portfolioData.phone}</div></div>
      </a>
      <a href="${portfolioData.linkedin}" target="_blank" rel="noopener" class="contact-item">
        <div class="contact-icon">💼</div>
        <div><div class="contact-label">LinkedIn</div><div class="contact-value">linkedin.com/in/gugan-s</div></div>
      </a>
      <div class="contact-item">
        <div class="contact-icon">📍</div>
        <div><div class="contact-label">Location</div><div class="contact-value">${portfolioData.location}</div></div>
      </div>
    </div>
    <div class="highlight-box">
      🟢 <strong>Currently open to new opportunities!</strong> I'm particularly interested in Senior Front-End Developer roles and Scrum Master positions in product companies, startups, and fintech domains.
    </div>
  `;
}

// ===== RESPONSE ROUTER =====
function getResponse(query) {
  const q = query.toLowerCase().trim();

  if (q === 'about' || q.includes('about') || q.includes('who') || q.includes('yourself') || q.includes('background') || q.includes('summary') || q.includes('introduce')) {
    return { title: 'About Me', content: buildAbout() };
  }
  if (q === 'experience' || q.includes('experience') || q.includes('work') || q.includes('job') || q.includes('career') || q.includes('history') || q.includes('company') || q.includes('companies')) {
    return { title: 'Work Experience', content: buildExperience() };
  }
  if (q === 'skills' || q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('technolog') || q.includes('language') || q.includes('framework') || q.includes('speciali') || q.includes('proficient') || q.includes('expert')) {
    return { title: 'Technical Skills', content: buildSkills() };
  }
  if (q === 'projects' || q.includes('project') || q.includes('built') || q.includes('portfolio') || q.includes('work sample') || q.includes('app') || q.includes('product')) {
    return { title: 'Projects', content: buildProjects() };
  }
  if (q === 'education' || q.includes('education') || q.includes('degree') || q.includes('college') || q.includes('university') || q.includes('study') || q.includes('academic') || q.includes('school')) {
    return { title: 'Education', content: buildEducation() };
  }
  if (q === 'contact' || q.includes('contact') || q.includes('reach') || q.includes('email') || q.includes('phone') || q.includes('hire') || q.includes('available') || q.includes('connect') || q.includes('linkedin')) {
    return { title: 'Contact Info', content: buildContact() };
  }

  // Catch-all smart responses
  if (q.includes('react') || q.includes('typescript') || q.includes('next.js') || q.includes('socket') || q.includes('websocket')) {
    return { title: 'Technical Skills', content: buildSkills() };
  }
  if (q.includes('cipherbizz') || q.includes('iat') || q.includes('gravitus') || q.includes('auction') || q.includes('crm') || q.includes('crypto')) {
    return { title: 'Work Experience', content: buildExperience() };
  }
  if (q.includes('scrum') || q.includes('agile') || q.includes('master')) {
    return {
      title: 'Scrum Master',
      content: `<p>Yes! I'm a <strong>Scrum Master</strong> with hands-on Agile leadership experience.</p>
        <div class="highlight-box">
          As a Scrum Master at IAT Technologies, I facilitated all Scrum ceremonies for a 6-member cross-functional team, achieving a <strong style="color:var(--accent)">30% increase in sprint velocity</strong> over 3 quarters. I decomposed business requirements into user stories, reducing mid-sprint scope changes by ~35%.
        </div>
        <p>My Agile toolkit includes: Sprint Planning, Daily Stand-ups, Sprint Reviews, Retrospectives, Backlog Refinement, and Stakeholder Communication.</p>`
    };
  }

  return {
    title: 'Response',
    content: `<p>Thanks for your message! Let me guide you through what I can share:</p>
      <div class="suggestion-grid" style="margin-top:12px">
        <button class="suggestion-card" data-query="about"><div class="suggestion-icon">👋</div><div class="suggestion-text"><strong>About Me</strong><span>My background & summary</span></div></button>
        <button class="suggestion-card" data-query="experience"><div class="suggestion-icon">💼</div><div class="suggestion-text"><strong>Experience</strong><span>4+ years history</span></div></button>
        <button class="suggestion-card" data-query="skills"><div class="suggestion-icon">⚡</div><div class="suggestion-text"><strong>Skills</strong><span>Tech stack</span></div></button>
        <button class="suggestion-card" data-query="contact"><div class="suggestion-icon">📬</div><div class="suggestion-text"><strong>Contact</strong><span>Let's connect</span></div></button>
      </div>`
  };
}

// ===== DOM ELEMENTS =====
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const messagesContainer = document.getElementById('messagesContainer');
const welcomeScreen = document.getElementById('welcomeScreen');
const chatWindow = document.getElementById('chatWindow');
const sidebar = document.getElementById('sidebar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const sidebarToggle = document.getElementById('sidebarToggle');
const shareBtn = document.getElementById('shareBtn');

// ===== STATE =====
let isTyping = false;
let hasStartedChat = false;

// ===== INIT =====
function init() {
  setupEventListeners();
  autoResizeTextarea();
  animateSkillBarsOnView();
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
  // Input events
  chatInput.addEventListener('input', () => {
    autoResizeTextarea();
    sendBtn.disabled = !chatInput.value.trim();
  });

  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!sendBtn.disabled && !isTyping) sendMessage();
    }
  });

  sendBtn.addEventListener('click', () => {
    if (!isTyping) sendMessage();
  });

  // Nav items
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const query = btn.dataset.query;
      triggerQuery(query);
      closeMobileSidebar();
    });
  });

  // Suggestion cards (welcome)
  document.querySelectorAll('.suggestion-card').forEach(card => {
    card.addEventListener('click', () => triggerQuery(card.dataset.query));
  });

  // Quick question buttons
  document.querySelectorAll('.quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      triggerQuery(btn.dataset.query);
      closeMobileSidebar();
    });
  });

  // Mobile menu
  mobileMenuBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
    showOverlay();
  });

  // Sidebar toggle (collapse on desktop)
  sidebarToggle.addEventListener('click', () => {
    sidebar.style.display = sidebar.style.display === 'none' ? 'flex' : 'none';
  });

  // Share
  shareBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href).then(() => showToast('Link copied!'));
  });
}

// ===== SEND MESSAGE =====
function sendMessage() {
  const text = chatInput.value.trim();
  if (!text || isTyping) return;

  if (!hasStartedChat) {
    hasStartedChat = true;
    welcomeScreen.style.display = 'none';
  }

  appendUserMessage(text);
  chatInput.value = '';
  chatInput.style.height = 'auto';
  sendBtn.disabled = true;

  const typingEl = appendTyping();
  isTyping = true;

  const delay = 600 + Math.random() * 600;
  setTimeout(() => {
    typingEl.remove();
    isTyping = false;
    const response = getResponse(text);
    appendAssistantMessage(response.title, response.content);
    animateSkillBarsOnView();
    // Re-bind suggestion cards inside messages
    messagesContainer.querySelectorAll('.suggestion-card[data-query]').forEach(card => {
      card.addEventListener('click', () => triggerQuery(card.dataset.query));
    });
  }, delay);
}

function triggerQuery(query) {
  chatInput.value = query;
  sendMessage();
}

// ===== MESSAGE BUILDERS =====
function appendUserMessage(text) {
  const group = document.createElement('div');
  group.className = 'message-group user-message';
  group.innerHTML = `<div class="user-bubble">${escapeHtml(text)}</div>`;
  messagesContainer.appendChild(group);
  scrollToBottom();
}

function appendTyping() {
  const el = document.createElement('div');
  el.className = 'assistant-message';
  el.innerHTML = `
    <div class="assistant-avatar">GS</div>
    <div class="assistant-body">
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    </div>`;
  messagesContainer.appendChild(el);
  scrollToBottom();
  return el;
}

function appendAssistantMessage(title, content) {
  const el = document.createElement('div');
  el.className = 'message-group assistant-message';
  el.innerHTML = `
    <div class="assistant-avatar">GS</div>
    <div class="assistant-body">
      <div class="assistant-name">Gugan · ${title}</div>
      <div class="assistant-content">${content}</div>
    </div>`;
  messagesContainer.appendChild(el);
  scrollToBottom();
}

// ===== HELPERS =====
function scrollToBottom() {
  setTimeout(() => chatWindow.scrollTop = chatWindow.scrollHeight, 50);
}

function autoResizeTextarea() {
  chatInput.style.height = 'auto';
  chatInput.style.height = Math.min(chatInput.scrollHeight, 180) + 'px';
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function showOverlay() {
  let overlay = document.querySelector('.sidebar-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', closeMobileSidebar);
  }
  overlay.classList.add('active');
}

function closeMobileSidebar() {
  sidebar.classList.remove('open');
  const overlay = document.querySelector('.sidebar-overlay');
  if (overlay) overlay.classList.remove('active');
}

// Animate skill bars when they come into view
function animateSkillBarsOnView() {
  const bars = document.querySelectorAll('.skill-bar-fill[data-width]');
  if (!bars.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.width;
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.1 });
  bars.forEach(bar => { if (bar.style.width === '0%' || bar.style.width === '') observer.observe(bar); });
}

// ===== START =====
init();
