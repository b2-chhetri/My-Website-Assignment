// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typography system card animations
    const typocards = document.querySelectorAll('.typo-card');
    typocards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Dilatational system animation
    const dilatationalTexts = document.querySelectorAll('.dilatational-layout span');
    dilatationalTexts.forEach((text, index) => {
        text.style.setProperty('--scale', 1 + (index * 0.2));
    });

    // Random system text positioning
    const randomTexts = document.querySelectorAll('.random-layout span');
    randomTexts.forEach(text => {
        const randomX = Math.random() * 80;
        const randomY = Math.random() * 80;
        const randomRotate = (Math.random() - 0.5) * 45;
        
        text.style.left = `${randomX}%`;
        text.style.top = `${randomY}%`;
        text.style.setProperty('--rotation', `${randomRotate}deg`);
    });

    // Transitional system animations
    const transTexts = document.querySelectorAll('.transitional-layout span');
    transTexts.forEach((text, index) => {
        text.style.transform = `scale(${1 + (index * 0.1)})`;
    });

    // Navigation highlight on scroll
    const sections = document.querySelectorAll('.project-section');
    const navLinks = document.querySelectorAll('.floating-nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Modal functionality for expanded views
    document.querySelectorAll('.expand-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            const card = this.closest('.typo-card');
            const example = card.querySelector('.typo-example').cloneNode(true);
            
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    ${example.outerHTML}
                </div>
            `;
            
            document.body.appendChild(modal);
            
            modal.querySelector('.close').onclick = function() {
                modal.remove();
            };
            
            window.onclick = function(event) {
                if (event.target === modal) {
                    modal.remove();
                }
            };
        });
    });
});

// Helper function for random distribution
function getRandomPosition(min, max) {
    return Math.random() * (max - min) + min;
}

// Helper function for smooth transitions
function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}
