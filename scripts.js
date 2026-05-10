// Load header dynamically
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
        
        // Set active navigation link based on current page
        const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
        const navLinks = document.querySelectorAll('nav a[data-page]');
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('data-page');
            if (linkPage === currentPage || (currentPage === 'index' && linkPage === 'home')) {
                link.classList.add('active');
            }
        });
    })
    .catch(error => console.error('Error loading header:', error));

// Load footer dynamically
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
        
        // After footer is loaded, set up the newsletter form handler
        const newsletterForm = document.getElementById('newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thanks for subscribing! (Connect this to your email service provider)');
                this.reset();
            });
        }
    })
    .catch(error => console.error('Error loading footer:', error));

// Form submission handlers
document.addEventListener('DOMContentLoaded', function() {
    
    // Speaking form handler
    const speakingForm = document.getElementById('speaking-form');
    if (speakingForm) {
        speakingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // For now, show an alert. You'll replace this with your actual form handler
            alert('Thank you for your inquiry! I\'ll get back to you soon.\n\nNote: To make this form functional, you\'ll need to:\n1. Set up a form service (like Formspree, Google Forms, or Netlify Forms)\n2. Update the form action or add backend handling');
            
            // Reset form
            this.reset();
        });
    }

    // Scroll animation observer for fade-in sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });
});
