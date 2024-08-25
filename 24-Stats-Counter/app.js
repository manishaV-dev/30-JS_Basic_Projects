const counter = document.querySelectorAll(".counter");

counter.forEach((el) => {
  // console.log(el.tagName);

  el.innerText = "0";
  incrementCounter();


  function incrementCounter() {
    // change string to number
    let currentCount = +el.innerText;
    const dataCeil = el.getAttribute("data-ceil");
    // console.log(dataCeil);

    // get the smallest data-ceil from html tag that you define for divided by data ceil value
    const increment = dataCeil / 5;
    currentCount = Math.ceil(currentCount + increment);
    if (currentCount < dataCeil) {
      el.innerHTML = currentCount;
      setTimeout(incrementCounter, 50);
    } else {
      el.innerText = dataCeil;
    }
  }
});
