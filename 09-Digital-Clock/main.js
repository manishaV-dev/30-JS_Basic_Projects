"use strict";

const hourEl = document.querySelector("#hour");
const minEl = document.querySelector("#minute");
const secEl = document.querySelector("#second");
const ampmEl = document.querySelector("#ampm");

function updateClock() {
  let hour = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  let ampm = "AM";

  if (hour > 12) {
    hour = hour - 12;
    ampm = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  hourEl.textContent = hour;
  minEl.textContent = min;
  secEl.textContent = sec;
  ampmEl.textContent = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
