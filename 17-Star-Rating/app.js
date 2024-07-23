const stars = document.querySelectorAll(".fa-star");
const ratingGave = document.querySelector(".rating-gave");

let currentTotSelectedStar = -1;


// 1.
stars.forEach((star, index) => {
  star.dataset.rating = index + 1;
  star.addEventListener("mouseover", handleMouseOver);
  star.addEventListener("click", handleClick);
  star.addEventListener("mouseleave", handleMouseLeave);
});


// 2
function handleMouseOver(event) {
//   console.log(event.target.dataset); // DOMStringMap {rating: '5'}
  const currentRatingValue = event.target.dataset.rating;
//   console.log(currentRatingValue); // eg .1
  if(!currentRatingValue) return;
  else handleUpdatedRatingState(currentRatingValue)
}

// 3
function handleUpdatedRatingState(getCurrentRatingVal){
    for(let i=0; i<5; i++){
        if(i<getCurrentRatingVal){
            stars[i].classList.replace('fa-regular', 'fa-solid')
        }else{
            stars[i].classList.replace('fa-solid', 'fa-regular')
        }
    }
}


// 4
function handleClick(event){
    const currentRatingValue = event.target.dataset.rating;
    currentTotSelectedStar = currentRatingValue;
    handleUpdatedRatingState(currentTotSelectedStar);
    ratingGave.textContent = currentTotSelectedStar
}

// 5
function handleMouseLeave(){
    handleUpdatedRatingState(currentTotSelectedStar)
}