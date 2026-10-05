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
        

    })
    .catch(error => console.error('Error loading footer:', error));

// Form submission handlers
document.addEventListener('DOMContentLoaded', function() {
    
    // Speaking form: label the notification email with the sender's name
    const speakingForm = document.getElementById('speaking-form');
    if (speakingForm) {
        speakingForm.addEventListener('submit', function() {
            const who = this.querySelector('#name').value.trim();
            this.querySelector('input[name="subject"]').value = 'NEW SPEAKING INQUIRY' + (who ? ' | ' + who : '');
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
