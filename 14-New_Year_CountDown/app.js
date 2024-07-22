"use strict";

const dayEl = document.querySelector("#day");
const hourEl = document.querySelector("#hour");
const minEl = document.querySelector("#min");
const secEl = document.querySelector("#second");

const newYearTime = new Date("Jan 1, 2025 00:00:00").getTime();

updateCountDown();

function updateCountDown() {
  const now = new Date().getTime();
  const timeGap = newYearTime - now;
//   console.log(timeGap);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let d = Math.floor(timeGap / day);
  // console.log(d);
  let h = Math.floor((timeGap % day) / hour);
  let m = Math.floor((timeGap % hour) / minute);
  let s = Math.floor((timeGap % minute) / second);

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  dayEl.textContent = d;
  hourEl.textContent = h;
  minEl.textContent = m;
  secEl.textContent = s;

  setTimeout(updateCountDown, second);
}
