// script.js
// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Expand/collapse reflection content
    const reflectionContent = document.querySelector('.reflection-section .content');
    const expandIcon = reflectionContent.querySelector('.expand-icon');

    expandIcon.addEventListener('click', () => {
        reflectionContent.classList.toggle('expanded');
        expandIcon.querySelector('i').classList.toggle('fa-book-open');
        expandIcon.querySelector('i').classList.toggle('fa-book');
    });

    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.project-section').forEach(section => {
        observer.observe(section);
    });

    // Glitch effect on hover for main title
    const glitchText = document.querySelector('.glitch');
    glitchText.addEventListener('mouseover', () => {
        glitchText.style.animation = 'none';
        setTimeout(() => {
            glitchText.style.animation = '';
        }, 10);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navigation highlight on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.floating-nav a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.project-section').forEach(section => {
        observer.observe(section);
    });

    // Expand/collapse reflection content
    const reflectionContent = document.querySelector('.reflection-section .content');
    const expandIcon = reflectionContent.querySelector('.expand-icon');

    expandIcon.addEventListener('click', () => {
        reflectionContent.classList.toggle('expanded');
        expandIcon.querySelector('i').classList.toggle('fa-book-open');
        expandIcon.querySelector('i').classList.toggle('fa-book');
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Animate typography cards on scroll
    const typocards = document.querySelectorAll('.typo-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    typocards.forEach(card => {
        cardObserver.observe(card);
    });

    // Glitch effect intensity on hover
    const glitchText = document.querySelector('.glitch');
    glitchText.addEventListener('mouseover', () => {
        glitchText.style.animation = 'none';
        setTimeout(() => {
            glitchText.style.animation = '';
        }, 10);
    });

    // Dynamic background for nav icons
    document.querySelectorAll('.floating-nav a').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.backgroundColor = getComputedStyle(document.documentElement)
                .getPropertyValue('--accent-color');
        });

        link.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        });
    });
});
