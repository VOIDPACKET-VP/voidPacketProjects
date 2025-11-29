import menuArray from "./data"

const orderMenu = document.getElementById('container')
const order = document.getElementById('order')
const total = document.getElementById('total-price')

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
    cart.push({
        id: id,
        name: name,
        price: price
    })
    render()  
}

function render(){
    order.innerHTML = ''
    
    cart.forEach(item => {
        order.innerHTML += `
            <h4>${item.name} <button class="remove-btn" data-id="${item.id}">remove</button> <p>$${item.price}</p> </h4>
        `})
        
    updateTotal()
}

let totalPrice = 0

function updateTotal(){
    cart.forEach(item =>{
        totalPrice += item.id
        total.innerHTML = `<p>$${totalPrice}</p>`
    })
}

order.addEventListener('click', function(e){
    if (e.target.classList.contains('remove-btn')){
        
    }
})