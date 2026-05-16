
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homePoints = 0
let guestPoints = 0

let homeIsLead = document.getElementsByid("home-score")
let guestIsLead = document.getElementById("guest-score")

function add1Home() {
    homePoints += 1
    homeScore.textContent = homePoints
}

function add2Home() {
    homePoints += 2
    homeScore.textContent = homePoints
}

function add3Home() {
    homePoints += 3
    homeScore.textContent = homePoints
}

function add1Guest() {
    guestPoints += 1
    guestScore.textContent = guestPoints
}

function add2Guest() {
    guestPoints += 2
    guestScore.textContent = guestPoints
}

function add3Guest() {
    guestPoints += 3
    guestScore.textContent = guestPoints
}

function reset() {
    guestPoints = 0
    guestScore.textContent = 0
    homePoints = 0
    homeScore.textContent = 0
}