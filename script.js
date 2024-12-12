// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Glitch effect for the main title
    const glitchText = document.querySelector('.glitch');
    if (glitchText) {
        let glitchInterval;
        
        const startGlitch = () => {
            let counter = 0;
            glitchInterval = setInterval(() => {
                const originalText = glitchText.getAttribute('data-text');
                if (counter % 2 === 0) {
                    glitchText.style.transform = `translate(${Math.random() * 2}px, ${Math.random() * 2}px)`;
                    glitchText.style.textShadow = `
                        ${Math.random() * 2}px ${Math.random() * 2}px 0 rgba(255,0,0,0.7),
                        ${Math.random() * -2}px ${Math.random() * -2}px 0 rgba(0,255,255,0.7)
                    `;
                } else {
                    glitchText.style.transform = 'none';
                    glitchText.style.textShadow = 'none';
                }
                counter++;
                if (counter > 10) {
                    clearInterval(glitchInterval);
                    setTimeout(startGlitch, Math.random() * 5000 + 3000);
                }
            }, 100);
        };

        glitchText.addEventListener('mouseover', startGlitch);
        // Occasionally trigger the effect automatically
        setInterval(() => {
            if (Math.random() > 0.7) startGlitch();
        }, 8000);
    }

    // Project cards expansion animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
    });

    // Intersection Observer for fade-in animations
    const fadeInElements = document.querySelectorAll('.project-section, .typo-card');
    const fadeInOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, fadeInOptions);

    fadeInElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        fadeInObserver.observe(element);
    });

    // Floating navigation visibility
    let lastScrollPosition = window.pageYOffset;
    const floatingNav = document.querySelector('.floating-nav');
    
    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset;
        
        // Show/hide navigation based on scroll direction
        if (currentScrollPosition > lastScrollPosition) {
            floatingNav.style.transform = 'translateY(-100%)';
        } else {
            floatingNav.style.transform = 'translateY(0)';
        }
        
        // Hide navigation at the top of the page
        if (currentScrollPosition < 100) {
            floatingNav.style.transform = 'translateY(-100%)';
        }
        
        lastScrollPosition = currentScrollPosition;
    });

    // Typography grid hover effects
    const typoCards = document.querySelectorAll('.typo-card');
    typoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.02)';
            card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll('.film-festival-image');
    
    images.forEach(img => {
        // If image is already loaded
        if (img.complete) {
            img.classList.add('loaded');
        }
        
        // For images that load after DOMContentLoaded
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
        
        // If image fails to load
        img.addEventListener('error', () => {
            console.error('Failed to load image:', img.src);
        });
    });

    // Force images to be visible after a short delay as fallback
    setTimeout(() => {
        images.forEach(img => {
            if (!img.classList.contains('loaded')) {
                img.classList.add('loaded');
            }
        });
    }, 1000);
// Add corresponding CSS classes in your styles.css:
/*
.fade-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.project-card {
    transition: all 0.3s ease;
}

.project-card.expanded {
    transform: scale(1.02);
}

.floating-nav {
    transition: transform 0.3s ease;
}

img {
    opacity: 0;
    transition: opacity 0.3s ease;
}

img.loaded {
    opacity: 1;
}
*/
