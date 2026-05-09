const price = document.getElementById('price-display')
const displayStatus = document.getElementById('connection-status')

const eventSource = new EventSource('/live-price')
eventSource.onmessage = (e) => {
    price.innerText = e.data
}

eventSource.onerror = () => {
    displayStatus.innerText = "Connection Lost 🔴"
    eventSource.close()
}