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
