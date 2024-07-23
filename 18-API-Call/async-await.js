const postContainer = document.querySelector(".post-container");
const requestURL = "https://jsonplaceholder.typicode.com/posts";

async function fetchUsingAsyncAwait() {
  const response = await fetch(requestURL, {
    method: "GET",
  });

  const result = await response.json();
  showResult(result);
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

fetchUsingAsyncAwait();
