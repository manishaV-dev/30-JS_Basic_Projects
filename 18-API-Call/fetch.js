const postContainer = document.querySelector(".post-container");
const requestURL = "https://jsonplaceholder.typicode.com/posts";

console.log("Hello");

function usingFetch() {
  fetch(requestURL, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => showResult(result))
    .catch((error) => console.log(error));
}

function showResult(posts) {
  postContainer.innerHTML = posts
    .map(
      (post) => `
    <div class="post-container-content">
        <div class="card">
            <div class="post-title">
              <p class="post-num">${post.id}</p>
              <p class="post-heading">
                ${post.title}
              </p>
            </div>
            <div class="post-content">
              <p>
                ${post.body}
              </p>
            </div>
          </div>
        </div>
    `
    )
    .join(" ");
}

usingFetch();
