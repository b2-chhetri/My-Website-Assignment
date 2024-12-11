// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Cache DOM elements
    const hero = document.querySelector('.hero');
    const glitchText = document.querySelector('.glitch');
    const reflectionContent = document.querySelector('.reflection-section .content');
    const expandIcon = reflectionContent.querySelector('.expand-icon');
    const navLinks = document.querySelectorAll('.floating-nav a');
    const projectSections = document.querySelectorAll('.project-section');
    const typographyCards = document.querySelectorAll('.typo-card');

    // Smooth scroll for navigation
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navigation highlight on scroll
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    // Observe project sections for nav highlighting
    projectSections.forEach(section => {
        navObserver.observe(section);
    });

    // Intersection Observer for fade-in animation
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    // Observe project sections and typography cards for fade-in
    projectSections.forEach(section => fadeObserver.observe(section));
    typographyCards.forEach(card => fadeObserver.observe(card));

    // Expand/collapse reflection content
    expandIcon.addEventListener('click', () => {
        reflectionContent.classList.toggle('expanded');
        const iconElement = expandIcon.querySelector('i');
        iconElement.classList.toggle('fa-book-open');
        iconElement.classList.toggle('fa-book');
    });

    // Parallax effect for hero section
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                ticking = false;
            });
            ticking = true;
        }
    });

    // Glitch effect on hover for main title
    glitchText.addEventListener('mouseover', () => {
        glitchText.style.animation = 'none';
        // Force a reflow
        void glitchText.offsetWidth;
        glitchText.style.animation = '';
    });

    // Dynamic background for nav icons
    navLinks.forEach(link => {
        const handleNavHover = (event, isEnter) => {
            link.style.backgroundColor = isEnter 
                ? getComputedStyle(document.documentElement).getPropertyValue('--accent-color')
                : 'rgba(255, 255, 255, 0.9)';
        };

        link.addEventListener('mouseenter', e => handleNavHover(e, true));
        link.addEventListener('mouseleave', e => handleNavHover(e, false));
    });
});
