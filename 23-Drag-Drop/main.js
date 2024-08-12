const lists = document.getElementsByClassName("list");
const rightBox = document.getElementById("right");
const leftBox = document.getElementById("left");

for (let list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;
  });
}

rightBox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

rightBox.addEventListener("drop", function (e) {
  let selected = document.querySelector(".dragging");

  rightBox.appendChild(selected);
});

leftBox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

leftBox.addEventListener("drop", function (e) {
  let selected = document.querySelector(".dragging");

  leftBox.appendChild(selected);
});

for (let list of lists) {
  list.addEventListener("dragstart", function (e) {
    e.target.classList.add("dragging");
  });

  list.addEventListener("dragend", function (e) {
    e.target.classList.remove("dragging");
  });
}


// Event listeners for dragover and drop are added only once per box.


// Elements being dragged get the class .dragging, which is then used to identify the dragged element when dropped.