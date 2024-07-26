const postContainer = document.querySelector(".post-container");
const loadBtn = document.querySelector("#loadMore");

let currentProductList = 0;
let isLoading = true; // to track loading state

const fetchListOfProducts = async (currentProductList) => {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${currentProductList * 10}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    // console.log(data);
    if (data && data.products) {
      showProducts(data.products);
    }
  } catch (error) {
    console.log("Some Error Occured", error);
  } finally {
    isLoading = false; // set loading state to false when fetching data
  }
};

function showProducts(productList) {
  //   console.log(productList);
  const content = productList
    .map(
      (list) => `
<div class="post-container-content">
    <div class="card">
        <div class="post-img">
          <img src="${list.thumbnail}" alt="image" class="img-tag" />
        </div>
        <div class="post-title">
          <p class="post-heading">${list.title}</p>
          <p class="post-num">$${list.price}</p>
        </div>
        <div class="post-content">
          <p>
            ${list.description}
          </p>
        </div>
    </div>
</div>
`
    )
    .join(" ");
  postContainer.innerHTML += content;

  // when reached at 100, load button should disable

  if (postContainer.children.length === 100) {
    // loadBtn.setAttribute("disabled", "true");
    loadBtn.style.display = "none";
    document.querySelector(
      ".showMsg"
    ).textContent = `You have reached at the end of product list 😊`;
  }
  console.log(postContainer.children);
}

fetchListOfProducts(currentProductList);

loadBtn.addEventListener("click", () => {
  if (!isLoading) {
    // check if a fetch is already in progress
    currentProductList += 1; // increment currentProductList
    fetchListOfProducts(currentProductList);
  }
});
