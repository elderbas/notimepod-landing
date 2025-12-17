// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('waitlistForm');
    const successMessage = document.getElementById('successMessage');
    const formContainer = document.querySelector('.waitlist-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            email: document.getElementById('email').value,
            podcasts: document.getElementById('podcasts').value,
            name: document.getElementById('name').value || '', // Optional field
            timestamp: new Date().toISOString()
        };

        // Log the submission (in production, you'd send this to a backend/database)
        console.log('Form submitted:', formData);

        // Store in localStorage for now (you can retrieve this later or send to a backend)
        const submissions = JSON.parse(localStorage.getItem('waitlistSubmissions') || '[]');
        submissions.push(formData);
        localStorage.setItem('waitlistSubmissions', JSON.stringify(submissions));

        // Optional: Send to a backend API
        // You can uncomment and modify this section to send data to your server
        /*
        fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        */

        // Show success message
        formContainer.style.display = 'none';
        successMessage.classList.remove('hidden');

        // Optional: Reset form after a delay
        setTimeout(() => {
            form.reset();
        }, 1000);
    });
});

// Function to retrieve all submissions (useful for testing)
function getSubmissions() {
    const submissions = JSON.parse(localStorage.getItem('waitlistSubmissions') || '[]');
    console.log('All submissions:', submissions);
    return submissions;
}

// Function to clear all submissions (useful for testing)
function clearSubmissions() {
    localStorage.removeItem('waitlistSubmissions');
    console.log('All submissions cleared');
}

// Make functions available in console for testing
window.getSubmissions = getSubmissions;
window.clearSubmissions = clearSubmissions;
