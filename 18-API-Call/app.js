const postContainer = document.querySelector(".post-container");

const requestURL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();
xhr.open("GET", requestURL);
console.log(xhr.readyState);
xhr.onreadystatechange = function() {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.response);
    console.log(data);
    showResult(data);
  }
};

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
    .join("");
}

xhr.send();
