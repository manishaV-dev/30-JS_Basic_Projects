"use strict";
// 1.
const testimonials = [
    {
        name: "Sandy Olsen",
        photoUrl:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        text: `I recently completed the Javascript course and I must say it exceeded my expectations. The
                  course material was well-organized and easy to follow, even for someone like me who had minimal coding
                  experience.`,
    },

    {
        name: "Monica Geller",
        photoUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        text: `I am beyond impressed with the JavaScript course offered by Javascript. The content was thorough, engaging, and really helped me grasp complex concepts easily. I highly recommend Javascript to anyone looking to enhance their coding skills.`,
    },

    {
        name: "Emiily Thompson",
        photoUrl:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        text: `Taking the Javascript course was a game-changer for me! The instructors were top-notch and the content was easy to follow. I now feel confident using Javascript in my projects. Highly recommend it to anyone looking to level up their coding skills.`,
    },

    {
        name: "Raeyn Reynolds",
        photoUrl:
            "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        text: `Javascript's course helped me master programming concepts with ease. The comprehensive curriculum and practical exercises made learning enjoyable and rewarding.`,
    },
];

// 2.
const imgEl = document.querySelector('img')
const userName = document.querySelector('.user-name')
const description = document.querySelector('.text') 

// 3.
let indx = 0;

// 5
updateTestimonial();

// 4.
function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[indx];
    imgEl.src = photoUrl;
    userName.textContent = name;
    description.textContent = text;
    indx++;

    // 7. after reaching last testimonial, need to start again from index 0
    if(indx === testimonials.length){
        indx = 0
    }

    // 6. change after every 8 sec but here it stop updating as it reached last testimonial
    setTimeout(() => {
        updateTestimonial()
    }, 8000);
}