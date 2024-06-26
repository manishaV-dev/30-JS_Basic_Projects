"use strict";

const textareaEl = document.querySelector("#textarea");
const totalCounterEl = document.querySelector("#total-counter");
const remainingEl = document.querySelector("#remaining-counter");

// 1 - get to know when user write in textarea by using keyup event handler
textareaEl.addEventListener("keyup", () => {
  // console.log('Key is pressed');
  updateCounter();
});

// 5. to set dynamically total ch == 0 and remaining char to 100, just call the fun
updateCounter();


// 2.
function updateCounter() {
  // 3. update the total character counter
  totalCounterEl.textContent = textareaEl.value.length;

  // 4
  remainingEl.textContent = textareaEl.getAttribute('maxlength') - textareaEl.value.length;

}


