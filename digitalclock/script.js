const clockElement = document.getElementById('clock');
const dateElement = document.getElementById('date');
const alarmTimeInput = document.getElementById('alarmTime');
const setAlarmButton = document.getElementById('setAlarm');
const lightThemeButton = document.getElementById('lightTheme');
const darkThemeButton = document.getElementById('darkTheme');
const neonThemeButton = document.getElementById('neonTheme');
const stopwatchDisplay = document.getElementById('stopwatchDisplay');
const countdownDisplay = document.getElementById('countdownDisplay');
let alarmTimeout;
let stopwatchInterval;
let countdownInterval;
let stopwatchTime = 0;
let countdownTime = 0;

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;


}

function setAlarm() {
    const alarmTime = alarmTimeInput.value;
    if (alarmTime) {
        const [alarmHours, alarmMinutes] = alarmTime.split(':');
        const now = new Date();
        const alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), alarmHours, alarmMinutes);
        const timeToAlarm = alarmDate - now;

        if (timeToAlarm >= 0) {
            alarmTimeout = setTimeout(() => {
                const stopAlarm = confirm('Alarm ringing! Do you want to stop the alarm?');
                if (stopAlarm) {
                    clearTimeout(alarmTimeout);
                    clockElement.classList.remove('vibrate');
                    clockElement.classList.remove('blink');
                } else {
                    clockElement.classList.add('vibrate');
                    clockElement.classList.add('blink');
                }
            }, timeToAlarm);
        }
    }
}

function changeTheme(theme) {
    document.body.className = theme;
}

function startStopwatch() {
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
        const seconds = String(stopwatchTime % 60).padStart(2, '0');
        stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    stopwatchDisplay.textContent = '00:00:00';
}

function startCountdown() {
    countdownTime = parseInt(document.getElementById('countdownInput').value);
    countdownDisplay.textContent = formatTime(countdownTime);
    countdownInterval = setInterval(() => {
        if (countdownTime > 0) {
            countdownTime--;
            countdownDisplay.textContent = formatTime(countdownTime);
        } else {
            clearInterval(countdownInterval);
            alert('Countdown finished!');
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

setAlarmButton.addEventListener('click', setAlarm);
lightThemeButton.addEventListener('click', () => changeTheme('light'));
darkThemeButton.addEventListener('click', () => changeTheme('dark'));
neonThemeButton.addEventListener('click', () => changeTheme('neon'));
document.getElementById('startStopwatch').addEventListener('click', startStopwatch);
document.getElementById('stopStopwatch').addEventListener('click', stopStopwatch);
document.getElementById('resetStopwatch').addEventListener('click', resetStopwatch);
document.getElementById('startCountdown').addEventListener('click', startCountdown);

setInterval(updateClock, 1000);
