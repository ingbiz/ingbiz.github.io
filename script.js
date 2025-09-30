document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // In a real application, you would send this data to a server.
            // For a static GitHub Pages site, we'll just simulate success.
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log("Form Submitted:", { name, email, message });

            // Simulate a successful submission
            formStatus.textContent = 'Thank you for your message, ' + name + '! We will get back to you soon.';
            formStatus.style.color = 'green';
            contactForm.reset(); // Clear the form

            // Optionally, you could redirect to a "thank you" page or clear the message after a few seconds
            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000);
        });
    }
});