document.getElementById('applyButton').addEventListener('click', function() {
    const name = document.getElementById('name').value.trim();
    const passport = document.getElementById('passport').value.trim();
    const country = document.getElementById('countrySelect').value;
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    result.textContent = '';
    error.textContent = '';

    if (!name || !passport || !country) {
        error.textContent = "All fields are required!";
        return;
    }

    if (passport.length < 8 || passport.length > 10) {
        error.textContent = "Invalid passport number!";
        return;
    }

    result.textContent = "Visa application submitted successfully!";
});