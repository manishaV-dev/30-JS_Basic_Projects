const tabContainer = document.querySelector(".container");
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".content");

tabContainer.addEventListener("click", (e) => {
  // console.log(e.target.dataset); DOMStringMap {id: 'about'}
  const currentID = e.target.dataset.id;

  if (currentID) {
    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");


    tabContents.forEach(content => {
        content.classList.remove('active')
    })
    const currentElement = document.getElementById(currentID)
    // console.log(currentElement);
    currentElement.classList.add('active')
    
  }
});
