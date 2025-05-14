document.addEventListener('DOMContentLoaded', function() {
    // Handle all form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const formType = this.id;
            
            switch(formType) {
                case 'subscribeForm':
                    alert('Thank you for subscribing to Naija News Network!');
                    break;
                case 'contactForm':
                    alert('Thank you for your message. We will get back to you shortly.');
                    break;
                case 'opinionPoll':
                    alert('Thank you for participating in our opinion poll!');
                    break;
                default:
                    alert('Form submitted successfully!');
            }
            
            this.reset();
        });
    });

    // Add click event to all "Read More" buttons
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real application, this would navigate to the full article
            const category = this.closest('.card').querySelector('.badge').textContent;
            alert(`This would open the full ${category} article in a real implementation.`);
        });
    });

    // Highlight current page in navigation
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            
            // If it's a dropdown item, also highlight the parent
            if (link.classList.contains('dropdown-item')) {
                link.closest('.dropdown-menu').previousElementSibling.classList.add('active');
            }
        }
    });

    // Initialize news ticker if it exists
    const ticker = document.querySelector('.ticker-content');
    if (ticker) {
        // Duplicate content for seamless looping
        ticker.innerHTML += ticker.innerHTML;
    }

    // Add category-specific styling
    const categoryBadges = document.querySelectorAll('.badge');
    categoryBadges.forEach(badge => {
        const text = badge.textContent.toLowerCase();
        if (text.includes('politics')) {
            badge.classList.add('bg-danger');
        } else if (text.includes('sports')) {
            badge.classList.add('bg-success');
        } else if (text.includes('education')) {
            badge.classList.add('bg-primary');
        } else if (text.includes('religion')) {
            badge.classList.add('bg-warning', 'text-dark');
        }
    });
});