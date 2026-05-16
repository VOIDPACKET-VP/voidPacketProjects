const authLink = document.getElementById('auth-link')
const injectionLink = document.getElementById('injection-link')
const jsLink = document.getElementById('js-link')
const responsiveDesignLink = document.getElementById('responsive-design-link')
const gsapLink = document.getElementById('gsap-link')
const cppLink = document.getElementById('cpp-link')

const mainEle = document.querySelector('.main')
const notesEle = document.getElementById('notes')

// adding the left fade transition class to the main div
function addFadeLeft() {
    mainEle.addEventListener('click', () => {
        mainEle.classList.add('fade-left')
    })
}

authLink.addEventListener('click', () => {
    addFadeLeft()
    notesEle.innerHTML 
})

injectionLink.addEventListener('click', () => {
    addFadeLeft()
    
})

jsLink.addEventListener('click', () => {
    addFadeLeft()
    
})

responsiveDesignLink.addEventListener('click', () => {
    addFadeLeft()
    
})

gsapLink.addEventListener('click', () => {
    addFadeLeft()
    
})

cppLink.addEventListener('click', () => {
    addFadeLeft()
    
})