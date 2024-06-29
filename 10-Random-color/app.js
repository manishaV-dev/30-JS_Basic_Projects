const containerEL = document.querySelector(".container");

// 1
for (let i = 0; i < 45; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEL.appendChild(colorContainerEl);
}

// 3
const colorContainerEl = document.querySelectorAll(".color-container");
// console.log(colorContainerEl); // NodeList(45) [get all div ]

// 4
function generateColors() {
  colorContainerEl.forEach((el) => {
    // console.log(el);
    const newColorCode = randomColor();
    // console.log(newColorCode);
    el.style.backgroundColor = "#" + newColorCode;
    el.textContent = "#" + newColorCode;

  });
}

generateColors();

// 2
function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";

  for (let i = 0; i < colorCodeLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    // console.log(randomNum);
    colorCode += chars.substring(randomNum, randomNum + 1);
    // console.log(colorCode);
  }
  // return color code
  return colorCode;
}
