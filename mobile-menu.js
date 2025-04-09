(function() {
    // Cache DOM elements
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    const icon = mobileMenuBtn.querySelector('i');
    
    if (!mobileMenuBtn || !nav || !icon) return;
    
    // Toggle menu state and update icon
    function toggleMenu() {
        const isActive = nav.classList.toggle('active');
        icon.classList.toggle('fa-bars', !isActive);
        icon.classList.toggle('fa-times', isActive);
        
        // Update ARIA attributes
        mobileMenuBtn.setAttribute('aria-expanded', isActive);
        nav.setAttribute('aria-hidden', !isActive);
    }
    
    // Close menu
    function closeMenu() {
        nav.classList.remove('active');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        nav.setAttribute('aria-hidden', 'true');
    }
    
    // Event listeners
    mobileMenuBtn.addEventListener('click', toggleMenu);
    mobileMenuBtn.addEventListener('touchstart', toggleMenu, { passive: true });
    
    // Event delegation for nav links
    nav.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            closeMenu();
        }
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            closeMenu();
            mobileMenuBtn.focus();
        }
    });
    
    // Initialize ARIA attributes
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenuBtn.setAttribute('aria-controls', 'main-nav');
    nav.setAttribute('aria-hidden', 'true');
    nav.id = 'main-nav';
})();
