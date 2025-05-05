document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');
    
    // Create overlay for menu
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);

    let isMenuOpen = false;

    // Toggle Menu Function
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        // Toggle button icon
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = isMenuOpen ? 'fas fa-times' : 'fas fa-bars';
        
        // Toggle menu and overlay
        mobileMenuBtn.classList.toggle('active');
        nav.classList.toggle('show');
        overlay.classList.toggle('show');
        
        // Toggle body scroll
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    }

    // Close Menu Function
    function closeMenu() {
        if (isMenuOpen) {
            isMenuOpen = false;
            const icon = mobileMenuBtn.querySelector('i');
            icon.className = 'fas fa-bars';
            mobileMenuBtn.classList.remove('active');
            nav.classList.remove('show');
            overlay.classList.remove('show');
            document.body.style.overflow = '';
        }
    }

    // Event Listeners
    mobileMenuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);
    
    // Close menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            closeMenu();
        }
    });

    // Close menu on window resize (if resized to desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && isMenuOpen) {
            closeMenu();
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});