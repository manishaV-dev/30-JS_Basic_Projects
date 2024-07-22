const data = [
  {
    id: "1",
    question: "What is Javascript?",
    answer:
      "Javascript is a high-level object-Oriented multi-paradigm programming language that is used to convert static web pages to interactive and dynamic web pages.",
  },

  {
    id: "2",
    question: "What is scope in JS?",
    answer:
      "Scope is a current context of an execution where variables or expression are visible. Id variable or expression are not in current context then we'll not able to use it",
  },

  {
    id: "3",
    question: "What is the difference between Var, let and const?",
    answer:
      "Var creates a function scoped variable whereas let and const create block-scoped variable.",
  },

  {
    id: "4",
    question: "What is callbacks in JS?",
    answer:
      "A Callback function is a function that passed as an argument to another function.",
  },
];

const accordionEl = document.querySelector(".accordion");

function createAccordionData() {
  accordionEl.innerHTML = data
    .map(
      (item) => `
    <div class="accordion_item">
        <div class="accordion_title">
            <h3>${item.question}</h3>
            <i class="fa-solid fa-circle-down"></i>
        </div>
        <div class="accordion_content">
          <p>${item.answer}</p>
        </div>
    </div>
    `
    )
    .join(" ");
}

createAccordionData();

const getAccordionTitle = document.querySelectorAll(".accordion_title");
console.log(getAccordionTitle);

getAccordionTitle.forEach((currentItem) => {
  currentItem.addEventListener("click", (e) => {
    // if accordian item have active class then first remove it.
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
    } else {
      // then check - if accordion item have active class and when we click on other item then first remove from then item and and added to now item
      let getAlreadyAddedActiveClass = document.querySelectorAll(".active");
      getAlreadyAddedActiveClass.forEach((currentActiveItem) => {
        currentActiveItem.classList.remove("active");
      });

      // and lasty add active class
      currentItem.classList.add("active");
    }
  });
});
