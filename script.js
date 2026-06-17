let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');
let lapBtn = document.getElementById('lapBtn');
let lapsList = document.getElementById('lapsList');

let msec = 0, secs = 0, mins = 0, timerId = null, lapCount = 1;

startBtn.addEventListener('click', function(){
    if(timerId !== null) clearInterval(timerId);
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function(){
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.textContent = `00 : 00 : 00`;
    msec = secs = mins = 0;
    lapsList.innerHTML = '';
    lapCount = 1;
});

lapBtn.addEventListener('click', function(){
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    let lapTime = `${minsString} : ${secsString} : ${msecString}`;
    let li = document.createElement('li');
    li.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapsList.appendChild(li);
    lapCount++;
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}
