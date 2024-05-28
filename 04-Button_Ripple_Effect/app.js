'use strict';

const btn = document.querySelector("#btn")

// track mouse movement inside btn
btn.addEventListener("mouseover", (e) => {
    // console.log(e.pageX); get position from x-axis
    // console.log(e.pageY); get position from y-axix

    // get exact postion of mouse withIn button
    // console.log("left :" , e.pageX - btn.offsetLeft)
    // console.log("top : " , e.pageY - btn.offsetTop)

    const x = (e.pageX - btn.offsetLeft);
    const y = (e.pageY - btn.offsetTop);


    // set property to css
    btn.style.setProperty("--posX", x + "px");
    btn.style.setProperty("--posY", y + "px")

})