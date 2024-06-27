document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        if (nameInput.value.trim() === '') {
            alert('Veuillez entrer votre nom.');
            nameInput.focus();
            event.preventDefault();
            return false;
        }

        if (emailInput.value.trim() === '') {
            alert('Veuillez entrer votre adresse e-mail.');
            emailInput.focus();
            event.preventDefault();
            return false;
        }

        // If validation passes, the form will be submitted
    });
});
