document.getElementById('checkVisaButton').addEventListener('click', function() {
    const country = document.getElementById('countrySelect').value;
    const resultDiv = document.getElementById('result');

    switch (country) {
        case 'USA':
            document.getElementById('result').innerHTML = "Visa required for most applicants.";
            break;
        case 'Canada':
            document.getElementById('result').innerHTML = "Visa required unless you have an eTA.";
            break;
        case 'India':
            document.getElementById('result').innerHTML = "Visa required before travel.";
            break;
        case 'UK':
            document.getElementById('result').innerHTML = "Visa depends on the duration of stay.";
            break;
        case 'Australia':
            document.getElementById('result').innerHTML = "eVisa available for eligible travelers.";
            break;
        default:
            document.getElementById('result').innerHTML = "Please select a country.";
    }
});