// Contact form validation
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    
    // Basic validation
    if (name && email && message) {
        // Here you would typically send the form data to a server
        alert('Message sent successfully!');
        contactForm.reset();
    } else {
        alert('Please fill in all fields');
    }
});