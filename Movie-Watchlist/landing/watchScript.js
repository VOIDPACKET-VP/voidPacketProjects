const watchListContent = document.getElementById('watchlist-result')

let movieWatchListArr = []

addMovieBtn.addEventListener('click', (e) => {
    const parentEle = e.target.closest("movie-card")
    movieWatchListArr.push(parentEle)
})

movieWatchListArr.forEach((movie) => {
    watchListContent.innerHTML += movie
}).join('')
