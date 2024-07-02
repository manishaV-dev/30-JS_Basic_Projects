const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const imgContainer = document.querySelector(".image-container");

let x = 0;
let timer;
prevBtn.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
});

nextBtn.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

function updateGallery() {
  imgContainer.style.transform = `perspective(1000px) rotateY(${x})`;

  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
}

updateGallery();
