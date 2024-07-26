const postContainer = document.querySelector(".post-container");

function helperMethod(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    console.log(xhr.readyState);
    xhr.responseType = "json";

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.onerror = () => {
      reject("Network Error");
    };

    xhr.send();
  });
}

async function fetchUsingXHRandAsyncAwait() {
  const requestURL = "https://jsonplaceholder.typicode.com/posts";
  try {
    const data = await helperMethod("GET", requestURL);
    console.log(data);
    showResult(data);
  } catch (error) {
    console.error("Error : ", error);
  }
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
    .join("");
}

fetchUsingXHRandAsyncAwait();
