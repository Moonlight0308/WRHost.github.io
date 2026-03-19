document.addEventListener('DOMContentLoaded', function() {
    console.log('Document loaded and ready');
    // Header scroll effect
    const header = document.querySelector('header');

     window.addEventListener('scroll', function() { //als er gescrolled word
        if (window.scrollY > 100) { //als er meer dan 100 pixels gescrolled word, css class toevoegen
            header.classList.add('scrolled');
        } else { //als er minder dan 100 pixels gescrolled word, css class verwijderen
            header.classList.remove('scrolled');
        }
        console.log('Header scroll effect applied:', window.scrollY);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => { //select alle links die beginnen met # (anchor links)	
        anchor.addEventListener('click', function(e) { //add een click event aan de links
            e.preventDefault(); //voorkom de standaard actie van de link (scrollen naar de anker)
            // Id ophalen en controleren of het niet # is
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; 
            
            // Selecteer het doel element en smooth scroll naar de juiste positie 
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
        console.log('Smooth scroll to:', );
        //Code van www.youtube.com/watch?v=9nh0snfJ7Ao
        // How to Add Smooth Scrolling Anchor Links to Jump to a Specific Part of a Web Page :/
    });
    
    // Project filtering van projects sectie
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
        console.log('Filter applied');
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
        console.log('Contact form initialized');
    }
    
    // Animate progress bars on scroll
    const skillItems = document.querySelectorAll('.skill-item');
    
    function animateProgressBars() {
        skillItems.forEach(item => {
            const progressBar = item.querySelector('.progress');
            const percent = item.querySelector('.skill-info span').textContent;
            
            if (isElementInViewport(item) && !progressBar.style.width) {
                progressBar.style.width = percent;
                progressBar.style.transition = 'width 2s ease';
            }
        });
        console.log('Progress bars animated');
    }
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    window.addEventListener('scroll', animateProgressBars);
    // Initial check als sommige elements in viewport already zijn
    animateProgressBars();
});