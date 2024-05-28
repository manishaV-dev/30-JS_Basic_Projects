'use strict';

const container = document.querySelector('.container');

// 1. manipulate the container with innerHTM
// container.innerHTML = "hhu"

// 2. Make dynamic career

const careers = ['Web Developer', "Freelancer", "Instructor", "Home-maker"]

// 3. let create Index for career
let careerIndex = 0;

// 6. get the first letter of array element so we can add typing effect
let characterIndex = 0;

// 5. Call function
updateText();

// 4. create a function then wrap all thing in it

// 6. careers[careerIndex] gives full lenght index, 
// <p>I am a ${careers[careerIndex]}</p>
// instead using this
// we can use slice method (return part of an array)




function updateText(){
    // 7. then increament it
    characterIndex++;

    //11. if instructor then use "an" otherwise a
    container.innerHTML = `
    <p>I am ${careers[careerIndex].slice(0,1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}</p>
`


// 9. get all element after finishing one
// but here we can't get the last letter of last element
// so fix this - we have to move character index at top of fun
if(characterIndex === careers[careerIndex].length){
    careerIndex++
    characterIndex = 0;
}

// 10 - after reaching last element it stop and doesnot back to first element
// to do so we have to set careerIndex = 0

if(careerIndex === careers.length){
    careerIndex = 0;
}

// 8. update text after 4 mili sec
    setTimeout(updateText, 400)

}

