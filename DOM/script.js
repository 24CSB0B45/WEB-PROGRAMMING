const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const container = document.querySelector('.container');
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
} else {
    body.classList.add('light-mode');
}

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});
let timer;
let timeLeft = 0;
let isPaused = false;
const timeInput = document.getElementById('time-input');
const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const resetButton = document.getElementById('reset-btn');

startButton.addEventListener('click', () => {
    if (timeInput.value > 0) {
        timeLeft = parseInt(timeInput.value);
        isPaused = false;
        startTimer();
    }
});
pauseButton.addEventListener('click', () => {
    isPaused = true;
});
resetButton.addEventListener('click', () => {
    clearInterval(timer);
    timeLeft = 0;
    timerDisplay.textContent = "00:00";
    container.style.backgroundColor = ''; 
});
function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        if (!isPaused && timeLeft > 0) {
            timeLeft--;
            updateDisplay();
            updateContainerBackgroundColor();
        } else if (timeLeft <= 0) {
            clearInterval(timer);
            container.style.backgroundColor = '';
        }
    }, 1000);
}
function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
function updateContainerBackgroundColor() {
    if (timeLeft > 10) {
        container.style.backgroundColor = 'green';
    } else if (timeLeft > 5) {
        container.style.backgroundColor = 'yellow';
    } else {
        container.style.backgroundColor = 'red';
    }
}
const itemList = [];
document.getElementById('add-item-btn').addEventListener('click', () => {
    const itemInput = document.getElementById('list-input').value;
    if (itemInput) {
        itemList.push(itemInput);
        renderList();
        document.getElementById('list-input').value = '';
    }
});
document.getElementById('sort-btn').addEventListener('click', () => {
    itemList.sort();
    renderList();
});
document.getElementById('remove-duplicates-btn').addEventListener('click', () => {
    const uniqueItems = [...new Set(itemList)];
    itemList.length = 0; 
    uniqueItems.forEach(item => itemList.push(item));
    renderList();
});
document.getElementById('reverse-btn').addEventListener('click', () => {
    itemList.reverse();
    renderList();
});
function renderList() {
    const itemListElement = document.getElementById('item-list');
    itemListElement.innerHTML = '';
    itemList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itemListElement.appendChild(li);
    });
}
const addRowButton = document.getElementById('add-row-btn');
const nameInput = document.getElementById('name-input');
const tableBody = document.querySelector('#data-table tbody');

addRowButton.addEventListener('click', () => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${nameInput.value}</td><td><button class="delete-btn">Delete</button></td>`;
    tableBody.appendChild(newRow);
    nameInput.value = '';

    newRow.querySelector('.delete-btn').addEventListener('click', () => {
        tableBody.removeChild(newRow);
    });
});
const thumbnails = document 
