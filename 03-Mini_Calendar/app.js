'use strict';

const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dateName = document.getElementById("day-number");
const yearName = document.getElementById("year");


const date = new Date();
// const month = date.getMonth();

monthName.textContent = date.toLocaleString("en", {
    month : "long"
})

dayName.textContent = date.toLocaleString("en", {
    weekday : "long"
})

// dateName.textContent = date.toLocaleString("en", {
//    day : "2-digit"
// })

dateName.textContent = date.getDate()

yearName.textContent = date.getFullYear();