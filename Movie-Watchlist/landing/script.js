
// import CONFIG from "./config"

const searchForm = document.getElementById('search-form')
const inputValue = document.getElementById('site-search')
const content = document.getElementById('content-result')

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    if (!inputValue.value) return

    try {
        // fetch(`${CONFIG.BASE_URL}?s=${inputValue.value}&apikey=${CONFIG.API_KEY}`)
        const response = await fetch(`https://www.omdbapi.com/?s=${inputValue.value}&apikey=b0c56a89`)
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
                const res = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=b0c56a89`)
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
                    <button class="watchlist-btn">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.2"/>
                        <line x1="8" y1="4.5" x2="8" y2="11.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                        <line x1="4.5" y1="8" x2="11.5" y2="8"  stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                    </svg>
                    Watchlist
                    </button>
                </div>
                <p class="desc">${movie.Plot}</p>
                </div>
            </div>
            `
        }).join('')

        content.innerHTML = `<div class="movie-list">${movies}</div>`
        
    } catch {
        content.innerHTML = `
            <div class="initial-state">
                Something went wrong. Please try again.
            </div>
        `
    }
})

