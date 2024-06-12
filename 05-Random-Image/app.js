'use strict';

const imageContainer = document.querySelector('.image-container')
const btnEl = document.querySelector('.btn')

let imageNum = 10;

btnEl.addEventListener('click', function(){
    addNewImage();
})

function addNewImage(){
    for (let index = 0; index < imageNum; index++) {

        // if only use these below code and call it then only load 1 pic per click
        // so wrap this into loop so per click 10 image loaded
        const newImgEl = document.createElement('img')
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 200 + 1)}`
        imageContainer.appendChild(newImgEl)
    }

    
}