const animateEl = document.querySelectorAll(".animate");

animateEl.forEach((el, index) => {
  setTimeout(() => {
    el.classList.add("show");
  }, index * 350);
});
