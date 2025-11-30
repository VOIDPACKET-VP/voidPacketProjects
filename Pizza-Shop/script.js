import menuArray from "./data"

const orderMenu = document.getElementById('container')
const order = document.getElementById('order')
const total = document.getElementById('total-price')
const checkoutBtn = document.getElementById("checkout-btn")
const modal = document.getElementById('checkout-modal')
const closeBtn = document.querySelector('.close')
const checkoutForm = document.getElementById('checkout-form')
const confirmationMessage = document.getElementById('order-confirmation')

menuArray.forEach(food => {
    orderMenu.innerHTML += `
            <div class="food-container">
                <h1 class="food-emoji">${food.emoji}</h1>
                <div class="food-details">
                    <h2>${food.name}</h2>
                    <h3>${food.ingredients.join(', ')}</h3>
                    <p>$${food.price}</p>
                </div>
                <button class="add-to-cart-btn" data-id="${food.id}" data-price="${food.price}" data-name="${food.name}">+</button>
            </div>
        `
})

orderMenu.addEventListener('click', function(e){
    if (e.target.classList.contains('add-to-cart-btn')){
        const foodId = e.target.dataset.id
        const foodPrice = parseFloat(e.target.dataset.price)
        const foodName = e.target.dataset.name
        
        addToCart(foodId, foodPrice, foodName)
    }
})

let cart = []

function addToCart(id, price, name){
    const food = {
        id: id,
        name: name,
        price: price
    }
    if (!cart.find(item => item.id === id)){
        cart.push(food)
    } else (
        alert("Item already in cart")
    )
    render()
}

function render(){
    order.innerHTML = ''
    
    cart.forEach(item => {
        order.innerHTML += `
            <h4 id="${item.id}">${item.name} <button class="remove-btn" data-id="${item.id}" data-price="${item.price}">remove</button> <p>$${item.price}</p> </h4>
        `})
        
    updateTotal()
}

let totalPrice = 0

function updateTotal(){
    totalPrice = cart.reduce((sum, item) => sum + item.price, 0)   
    total.innerHTML = `Total price:<p>$${totalPrice}</p>`

}

order.addEventListener('click', function(e){
    if (e.target.classList.contains('remove-btn')){
        const foodId = e.target.dataset.id
        
        removeFromCart(foodId)
    }
})

function removeFromCart(id){
    cart = cart.filter(item => id !== item.id)
    render()
}

checkoutBtn.addEventListener('click', function(){
    if (cart.length === 0){
        alert('Your cart is empty')
        return
    }
    modal.classList.remove('hidden')
})

closeBtn.addEventListener('click', function(){
    modal.classList.add('hidden')
})

checkoutForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const address = document.getElementById('address').value
    
    if (!name || !email || !address){
        alert('All forms must be filled')
        return
    }
    processOrder(name)
})

function processOrder(name){
    console.log(`Confirming email for : ${name}`)
    modal.classList.add('hidden')
    confirmationMessage.classList.remove('hidden')
    
    setTimeout(()=>{
        confirmationMessage.classList.add('hidden')
        checkoutForm.reset()
        cart = []
        render()
    }, 3000)
}