
import CONFIG from "./config"

const searchForm = document.getElementById('search-form')
const inputValue = document.getElementById('site-search')
const content = document.getElementById('content-result')

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    if (!inputValue.value) return

    try {
        
        const response = await fetch(`${CONFIG.BASE_URL}?s=${inputValue.value}&apikey=${CONFIG.API_KEY}`)
        const data = await response.json()
                
        if (data.Response === 'False') {
            content.innerHTML = `
                <div class="initial-state">
                    Unable to find what you're looking for<br>Please try another search.
                </div>
            `
            return
        }

        const fullMovies = await Promise.all(
            data.Search.map(async (movie) => {
                const res = await fetch(`${CONFIG.BASE_URL}}?i=${movie.imdbID}&apikey=${CONFIG.API_KEY}`)
                return res.json()
            })
        )

        const movies = fullMovies.map(movie => {
            let posterImg = movie.Poster !== 'N/A' ? movie.Poster : '/assets/andre-tan-THJJRUhNlEc-unsplash.jpg'
            return `
            
            <div class="movie-card">
                <img class="poster" src="${posterImg}" alt="${movie.Title}" />
                <div class="info">
                <div class="title-row">
                    <span class="title">${movie.Title}</span>
                    <div class="rating">
                    <span class="star">★</span>
                    <span>${movie.imdbRating}</span>
                    </div>
                </div>
                <div class="meta">
                    <span class="runtime">${movie.Runtime}</span>
                    <span class="genres">${movie.Genre}</span>
                    <button class="watchlist-btn" data-id="${movie.imdbID}">
                        Watchlist
                    </button>
                </div>
                <p class="desc">${movie.Plot}</p>
                </div>
            </div>
            `
        }).join('')

        content.innerHTML = `<div id="movie-list-container" class="movie-list">${movies}</div>`
        
    } catch {
        content.innerHTML = `
            <div class="initial-state">
                Something went wrong. Please try again.
            </div>
        `
    }
})
