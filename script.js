// Language switching functionality
function switchLanguage(lang) {
    // Remove active class from all language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to selected language button
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Change all text content with data attributes
    document.querySelectorAll('[data-ko], [data-en]').forEach(element => {
        if (element.hasAttribute(`data-${lang}`)) {
            element.textContent = element.getAttribute(`data-${lang}`);
        }
    });
    
    // Store language preference in localStorage
    localStorage.setItem('preferredLanguage', lang);
    
    // Add language change animation
    document.body.style.opacity = '0.7';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 300);
}

// Initialize language from localStorage or default to Korean
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'ko';
    switchLanguage(savedLanguage);
}

// Language button event listeners
function setupLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll indicator
function createScrollIndicator() {
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    const scrollBar = document.createElement('div');
    scrollBar.className = 'scroll-indicator-bar';
    scrollIndicator.appendChild(scrollBar);
    document.body.appendChild(scrollIndicator);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollBar.style.width = scrolled + '%';
    });
}

// Intersection Observer for animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.research-item, .achievement-item, .contact-item, .project-category');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Professor photo hover effect
function setupProfessorPhotoEffect() {
    const professorPhoto = document.querySelector('.professor-photo img');
    if (professorPhoto) {
        professorPhoto.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        professorPhoto.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
}

// Counter animation for achievements
function animateCounters() {
    const counters = document.querySelectorAll('.achievement-number, .stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = counter.textContent.replace(/\d+/, target);
            }
        };
        
        // Start animation when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Parallax effect for background
function setupParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('body');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.backgroundPosition = `center ${speed}px`;
        }
    });
}

// Mobile menu toggle (for responsive navigation)
function setupMobileMenu() {
    const nav = document.querySelector('nav');
    const navList = document.querySelector('nav ul');
    
    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.style.display = 'none';
    mobileMenuBtn.style.background = 'none';
    mobileMenuBtn.style.border = 'none';
    mobileMenuBtn.style.fontSize = '1.5rem';
    mobileMenuBtn.style.color = '#2c5530';
    mobileMenuBtn.style.cursor = 'pointer';
    mobileMenuBtn.style.padding = '10px';
    
    nav.insertBefore(mobileMenuBtn, navList);
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', () => {
        navList.classList.toggle('mobile-active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navList.classList.contains('mobile-active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });
    
    // Show/hide mobile menu button based on screen size
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            mobileMenuBtn.style.display = 'block';
            navList.style.display = navList.classList.contains('mobile-active') ? 'flex' : 'none';
        } else {
            mobileMenuBtn.style.display = 'none';
            navList.style.display = 'flex';
            navList.classList.remove('mobile-active');
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
}

// Research item hover effects
function setupResearchItemEffects() {
    const researchItems = document.querySelectorAll('.research-item');
    
    researchItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(74, 124, 89, 0.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.95)';
        });
    });
}

// Project category accordion effect
function setupProjectAccordion() {
    const projectCategories = document.querySelectorAll('.project-category');
    
    projectCategories.forEach(category => {
        const title = category.querySelector('h3');
        const list = category.querySelector('ul');
        
        title.style.cursor = 'pointer';
        title.addEventListener('click', () => {
            if (list.style.maxHeight) {
                list.style.maxHeight = null;
                category.style.background = 'rgba(255, 255, 255, 0.95)';
            } else {
                list.style.maxHeight = list.scrollHeight + 'px';
                category.style.background = 'rgba(74, 124, 89, 0.05)';
            }
        });
        
        // Initialize with collapsed state
        list.style.maxHeight = '0px';
        list.style.overflow = 'hidden';
        list.style.transition = 'max-height 0.3s ease';
    });
}

// Contact item click to copy email
function setupContactInteraction() {
    const emailContact = document.querySelector('.contact-item:nth-child(2) p');
    if (emailContact && emailContact.textContent.includes('@')) {
        emailContact.style.cursor = 'pointer';
        emailContact.title = '클릭하여 이메일 주소 복사';
        
        emailContact.addEventListener('click', () => {
            navigator.clipboard.writeText('ypjang@khu.ac.kr').then(() => {
                // Show temporary notification
                const notification = document.createElement('div');
                notification.textContent = '이메일 주소가 복사되었습니다!';
                notification.style.position = 'fixed';
                notification.style.top = '20px';
                notification.style.right = '20px';
                notification.style.background = '#4a7c59';
                notification.style.color = 'white';
                notification.style.padding = '10px 20px';
                notification.style.borderRadius = '5px';
                notification.style.zIndex = '1000';
                notification.style.fontSize = '14px';
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.remove();
                }, 3000);
            });
        });
    }
}

// Google Scholar link click effect
function setupScholarLinkEffect() {
    const scholarLink = document.querySelector('.achievement-link');
    if (scholarLink) {
        scholarLink.addEventListener('click', (e) => {
            // Add click animation
            scholarLink.style.transform = 'scale(0.98)';
            setTimeout(() => {
                scholarLink.style.transform = 'scale(1)';
            }, 150);
            
            // Show loading notification
            const notification = document.createElement('div');
            notification.innerHTML = '<i class="fas fa-external-link-alt"></i> Google Scholar로 이동 중...';
            notification.style.position = 'fixed';
            notification.style.top = '20px';
            notification.style.right = '20px';
            notification.style.background = '#4a7c59';
            notification.style.color = 'white';
            notification.style.padding = '12px 20px';
            notification.style.borderRadius = '25px';
            notification.style.zIndex = '1000';
            notification.style.fontSize = '14px';
            notification.style.display = 'flex';
            notification.style.alignItems = 'center';
            notification.style.gap = '8px';
            notification.style.boxShadow = '0 5px 15px rgba(74, 124, 89, 0.3)';
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 2000);
        });
    }
}

// Google Maps link click effect
function setupMapsLinkEffect() {
    const mapsLink = document.querySelector('.address-link');
    if (mapsLink) {
        mapsLink.addEventListener('click', (e) => {
            // Add click animation
            mapsLink.style.transform = 'scale(0.98)';
            setTimeout(() => {
                mapsLink.style.transform = 'scale(1)';
            }, 150);
            
            // Show loading notification
            const notification = document.createElement('div');
            notification.innerHTML = '<i class="fas fa-map-marked-alt"></i> Google Maps로 이동 중...';
            notification.style.position = 'fixed';
            notification.style.top = '20px';
            notification.style.right = '20px';
            notification.style.background = '#4a7c59';
            notification.style.color = 'white';
            notification.style.padding = '12px 20px';
            notification.style.borderRadius = '25px';
            notification.style.zIndex = '1000';
            notification.style.fontSize = '14px';
            notification.style.display = 'flex';
            notification.style.alignItems = 'center';
            notification.style.gap = '8px';
            notification.style.boxShadow = '0 5px 15px rgba(74, 124, 89, 0.3)';
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 2000);
        });
    }
}

// Email link click effect
function setupEmailLinkEffect() {
    const emailLink = document.querySelector('.email-link');
    if (emailLink) {
        emailLink.addEventListener('click', (e) => {
            // Add click animation
            emailLink.style.transform = 'scale(0.98)';
            setTimeout(() => {
                emailLink.style.transform = 'scale(1)';
            }, 150);
            
            // Show notification
            const notification = document.createElement('div');
            notification.innerHTML = '<i class="fas fa-envelope-open"></i> 이메일 프로그램이 열립니다...';
            notification.style.position = 'fixed';
            notification.style.top = '20px';
            notification.style.right = '20px';
            notification.style.background = '#4a7c59';
            notification.style.color = 'white';
            notification.style.padding = '12px 20px';
            notification.style.borderRadius = '25px';
            notification.style.zIndex = '1000';
            notification.style.fontSize = '14px';
            notification.style.display = 'flex';
            notification.style.alignItems = 'center';
            notification.style.gap = '8px';
            notification.style.boxShadow = '0 5px 15px rgba(74, 124, 89, 0.3)';
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 2000);
        });
    }
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language first
    initializeLanguage();
    setupLanguageButtons();
    
    createScrollIndicator();
    setupScrollAnimations();
    setupProfessorPhotoEffect();
    animateCounters();
    setupParallaxEffect();
    setupMobileMenu();
    setupResearchItemEffects();
    setupProjectAccordion();
    setupContactInteraction();
    setupScholarLinkEffect();
    setupMapsLinkEffect();
    setupEmailLinkEffect();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add CSS for mobile menu
const mobileMenuCSS = `
    @media (max-width: 768px) {
        .mobile-menu-btn {
            position: absolute;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
        }
        
        nav ul.mobile-active {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            padding: 20px 0;
            z-index: 1000;
        }
        
        nav ul.mobile-active li {
            margin: 10px 0;
            text-align: center;
        }
    }
`;

// Inject mobile menu CSS
const style = document.createElement('style');
style.textContent = mobileMenuCSS;
document.head.appendChild(style);
