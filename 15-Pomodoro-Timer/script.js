"use strict";

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
const timer = document.querySelector("#timer");

let interval;
let timeLeft = 1500; // 25mins

const updateTimer = function () {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  // to add 0 if one digit using padStart -- for padStart first need to convert minute into string
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  timer.textContent = formattedTime;
};

const startTimer = function () {
  interval = setInterval(() => {
    // console.log("Timer");
    timeLeft--;
    updateTimer();
    if(timeLeft === 0){
        clearInterval(interval)
        alert("Time's up!")
        timeLeft = 1500;
        updateTimer()
    }
  }, 1000);
};

const stopTimer = function () {
  clearInterval(interval);
};

const resetTimer = function () {
  clearInterval(interval)
  timeLeft = 1500;
  updateTimer();
};

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
