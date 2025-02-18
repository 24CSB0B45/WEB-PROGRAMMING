let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function calculateResult() {
    try {
        display.value = eval(display.value.replace(/π/g, Math.PI).replace(/e/g, Math.E));
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}