document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Mysterious light click event
    const lightElement = document.getElementById('mysterious-light');
    if (lightElement) {
        lightElement.addEventListener('click', function() {
            const modalElement = document.getElementById('lightModal');
            if (modalElement) {
                const modal = new bootstrap.Modal(modalElement);
                modal.show();
                
                // Forcer la mise à jour de la traduction dans le modal
                const currentLang = localStorage.getItem('preferredLanguage') || 'fr';
                const modalTitle = document.querySelector('#lightModalLabel[data-i18n]');
                const modalAuthor = document.querySelector('#lightModal [data-i18n="modal.author"]');
                
                if (modalTitle) modalTitle.textContent = translations[currentLang]["modal.title"];
                if (modalAuthor) modalAuthor.textContent = translations[currentLang]["modal.author"];
            }
        });
    }

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Fermer le menu mobile si ouvert
                const navbar = document.querySelector('.navbar-collapse');
                if (navbar.classList.contains('show')) {
                    navbar.classList.remove('show');
                }
                
                if ('scrollBehavior' in document.documentElement.style) {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                } else {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Animate elements with Intersection Observer
    const animateElements = document.querySelectorAll('.timeline-item, .knowledge-card, .feature-box');
    
    // Set initial state
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        animateElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers
        const animateOnScroll = function() {
            animateElements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementPosition < windowHeight - 100) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Debounce scroll event
        let isScrolling;
        window.addEventListener('scroll', () => {
            window.clearTimeout(isScrolling);
            isScrolling = setTimeout(animateOnScroll, 66);
        });
        
        animateOnScroll(); // Run once on load
    }
});