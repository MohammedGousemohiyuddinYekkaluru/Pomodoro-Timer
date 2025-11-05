const timer = document.querySelector('#timer');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let time = 25 * 60;
let interval = null;

function updateDisplay(){
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if(seconds < 10) seconds = '0' + seconds;

    timer.textContent = `${minutes}:${seconds}`;
};

updateDisplay();

startBtn.addEventListener('click', () => {
    if(interval !== null) return; //prevent multiple timers.

    //if timer is running then interval is not equal to null that's why it returns..

    interval = setInterval(() => {
        time--;
        updateDisplay();

        if(time <= 0){
            clearInterval(interval);
            interval = null;
            timer.textContent = "Times's Up!"
        }
    }, 1000)
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
});

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    time = 25 * 60;
    updateDisplay();
})