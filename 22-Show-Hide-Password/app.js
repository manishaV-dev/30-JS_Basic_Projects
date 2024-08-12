const eyeIcon = document.querySelector("#eyeIcon");
const passwordEl = document.querySelector("#password");

eyeIcon.addEventListener("click", () => {
  if (passwordEl.type === "password") {
    passwordEl.type = "text";
    eyeIcon.src = "icons/view.png";
  } else {
    passwordEl.type = "password";
    eyeIcon.src = "icons/hide.png";
  }
});
