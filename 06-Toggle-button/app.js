'use strict';
// 1
const inputEl = document.querySelector('.toggle-input');
const body = document.querySelector("body")
// console.log(inputEl.checked); // false

// inputEl.checked = false;
// 5
inputEl.checked = JSON.parse(localStorage.getItem('mode'))
updateBody();

// 2
function updateBody() {
    if(inputEl.checked){
        body.style.backgroundColor = "#212121"
    }else{
        body.style.backgroundColor = "lightgrey"
    }
}

// 3
inputEl.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();
})

// 4 set previous toggle to localStorage
function updateLocalStorage(){
    localStorage.setItem('mode', JSON.stringify(inputEl.checked))
    // mode == key
    // JSON.... == value (true or false)
}