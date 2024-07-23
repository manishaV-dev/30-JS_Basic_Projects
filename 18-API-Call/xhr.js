const container = document.querySelector(".post-container");
const url = "https://jsonplaceholder.typicode.com/posts";

function fetchXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
        // console.log(typeof (xhr.response));
      displayResult(xhr.response);
    } else {
      console.log("Some Error Occured");
    }
  };
}

function displayResult(posts) {
  container.innerHTML = posts.map(
    (postItem) => `
        <div class="post-container-content">
        <div class="card">
            <div class="post-title">
              <p class="post-num">${postItem.id}</p>
              <p class="post-heading">
                ${postItem.title}
              </p>
            </div>
            <div class="post-content">
              <p>
                ${postItem.body}
              </p>
            </div>
          </div>
        </div>
        `
  );
}

fetchXHR();
