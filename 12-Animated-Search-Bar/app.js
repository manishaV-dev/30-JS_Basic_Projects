const searchBarContainer = document.querySelector('.search-bar-container')

const magnifierEl = document.querySelector('.maginify');

magnifierEl.addEventListener('click', () => {
    searchBarContainer.classList.toggle('active')
})

