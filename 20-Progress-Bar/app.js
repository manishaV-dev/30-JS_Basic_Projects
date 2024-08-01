const progress = document.querySelector(".progress");
const progressLabel = document.querySelector(".progress-label");
const startBtn = document.querySelector(".start-btn");

function handleClick() {
  let value = 0;
  let interval;
  interval = setInterval(() => {
    if (value >= 100) {
      clearInterval(interval);
      startBtn.disabled = false; // Enable the button after progress is complete
    } else {
      value += 10;
      progress.style.width = `${value}%`;
      progressLabel.textContent = `${value}%`;
      startBtn.disabled = true;  // Disable the button while progress is ongoing
    }
  }, 1000);
}

startBtn.addEventListener('click', () => {
    handleClick()
})