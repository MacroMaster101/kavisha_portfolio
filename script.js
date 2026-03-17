/* ========================================
   Kavisha Liyanage Portfolio - JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ═══════════════════════════
    // Background Particles
    // ═══════════════════════════
    const particlesEl = document.getElementById('particles');
    for (let i = 0; i < 40; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        p.style.left = `${Math.random() * 100}%`;
        p.style.animationDuration = `${Math.random() * 18 + 12}s`;
        p.style.animationDelay = `${Math.random() * 12}s`;
        const size = Math.random() * 2.5 + 1;
        p.style.width = p.style.height = `${size}px`;
        particlesEl.appendChild(p);
    }

    // ═══════════════════════════
    // Typing Animation
    // ═══════════════════════════
    const typedEl = document.getElementById('typed-text');
    const phrases = [
        'Full Stack Apps',
        'AI Solutions',
        'React Interfaces',
        'RESTful APIs',
        'ML Models',
        'Scalable Systems'
    ];
    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;

    function type() {
        const current = phrases[phraseIdx];
        if (deleting) {
            charIdx--;
            typedEl.textContent = current.substring(0, charIdx);
        } else {
            charIdx++;
            typedEl.textContent = current.substring(0, charIdx);
        }

        let delay = deleting ? 35 : 70;

        if (!deleting && charIdx === current.length) {
            delay = 2200;
            deleting = true;
        } else if (deleting && charIdx === 0) {
            deleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            delay = 500;
        }

        setTimeout(type, delay);
    }

    type();

    // ═══════════════════════════
    // Mobile Navigation
    // ═══════════════════════════
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') &&
            !navLinks.contains(e.target) &&
            !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // ═══════════════════════════
    // Navbar Scroll
    // ═══════════════════════════
    const navbar = document.getElementById('navbar');
    const scrollTopBtn = document.getElementById('scrollTop');
    let lastScrollY = 0;

    window.addEventListener('scroll', () => {
        const y = window.scrollY;

        // Navbar style
        navbar.classList.toggle('scrolled', y > 50);

        // Scroll-to-top
        scrollTopBtn.classList.toggle('visible', y > 500);

        // Active nav link
        updateActiveLink();

        lastScrollY = y;
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ═══════════════════════════
    // Active Nav Link
    // ═══════════════════════════
    function updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 160;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-link[href="#${id}"]`);

            if (link) {
                if (scrollPos >= top && scrollPos < top + height) {
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    }

    // ═══════════════════════════
    // Smooth Scroll
    // ═══════════════════════════
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ═══════════════════════════
    // Scroll Reveal
    // ═══════════════════════════
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Stagger animations for siblings
                const siblings = entry.target.parentElement.querySelectorAll('.reveal');
                let delay = 0;
                siblings.forEach(sib => {
                    if (sib === entry.target) {
                        entry.target.style.transitionDelay = `${delay * 0.1}s`;
                    }
                    delay++;
                });
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => revealObserver.observe(el));

    // ═══════════════════════════
    // Contact Form
    // ═══════════════════════════
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = form.querySelector('button[type="submit"]');
            const origHTML = btn.innerHTML;

            // Success state
            btn.innerHTML = '<i class="fas fa-check-circle"></i> Message Sent!';
            btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = origHTML;
                btn.style.background = '';
                btn.disabled = false;
                form.reset();
            }, 3500);
        });
    }

    // ═══════════════════════════
    // GitHub API
    // ═══════════════════════════
    const GITHUB_USER = 'MacroMaster101';
    const reposContainer = document.getElementById('githubRepos');

    async function loadRepos() {
        try {
            const res = await fetch(
                `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6&type=all`
            );

            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const repos = await res.json();

            const featured = ['Travel_Genie', 'web-voting-system'];
            const filtered = repos.filter(r => !featured.includes(r.name));

            if (!filtered.length) {
                reposContainer.innerHTML = `
                    <div class="repo-placeholder glass" style="opacity:1">
                        <p>No public repositories found.</p>
                    </div>`;
                return;
            }

            const colors = {
                JavaScript: '#f1e05a',
                TypeScript: '#2b7489',
                Python: '#3572A5',
                Java: '#b07219',
                HTML: '#e34c26',
                CSS: '#563d7c',
                'Jupyter Notebook': '#DA5B0B',
                Shell: '#89e051',
                'C++': '#f34b7d'
            };

            reposContainer.innerHTML = repos.map(r => `
                <a href="${r.html_url}" target="_blank" rel="noopener noreferrer"
                   class="repo-card glass" style="text-decoration:none;">
                    <h4><i class="fas fa-book-bookmark"></i> ${r.name}</h4>
                    <p>${r.description || 'No description available.'}</p>
                    <div class="repo-meta">
                        ${r.language ? `<span><span class="lang-dot" style="background:${colors[r.language] || '#8b8b8b'}"></span>${r.language}</span>` : ''}
                        <span><i class="fas fa-star"></i> ${r.stargazers_count}</span>
                        <span><i class="fas fa-code-branch"></i> ${r.forks_count}</span>
                    </div>
                </a>
            `).join('');
        } catch {
            reposContainer.innerHTML = `
                <div class="repo-placeholder glass" style="opacity:1">
                    <i class="fas fa-exclamation-triangle" style="color:var(--purple)"></i>
                    <p>Could not load repositories.
                        <a href="https://github.com/${GITHUB_USER}" target="_blank"
                           rel="noopener noreferrer" style="color:var(--blue)">
                            Visit GitHub Profile
                        </a>
                    </p>
                </div>`;
        }
    }

    loadRepos();

    // ═══════════════════════════
    // Keyboard navigation support
    // ═══════════════════════════
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
