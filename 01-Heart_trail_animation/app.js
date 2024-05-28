'use strict';

const body = document.querySelector('body');

// detect mouse movement

body.addEventListener("mousemove", (e) => {
    // console.log("moved");
    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // 1. hold X,Y mouse position in a variable
    const xPosition = e.offsetX;
    const yPosition = e.offsetY;

    // 2. create a span and append this span in body 
    const spanEl = document.createElement("span")

    // 4. give span position -- here value comes in Number so add px to give val in pixel
    spanEl.style.top = yPosition + "px";
    spanEl.style.left = xPosition + "px";

    // 6. set different size to span
    const size = Math.random() * 100;
    spanEl.style.height = size + "px";
    spanEl.style.width = size + "px";

    // 3. append this span in body but before appending we have to give span postion from top and left
    body.appendChild(spanEl)

    // 5. Delete span after 3 sec
    setTimeout(() => {
        spanEl.remove();
    }, 3000);


})
