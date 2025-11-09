
const conBtn = document.getElementById("conv-btn")
const numInput = document.getElementById("num-convert")
const conLength = document.getElementById("con-length")
const conVolume = document.getElementById("con-volume")
const conMass = document.getElementById("con-Mass")
const numValue = Number(numInput.value)

conBtn.addEventListener("click", function() {
    toLength(numValue)
    toMass(numValue)
    toVolume(numValue)
})

// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

function toLength(num) {
    const lconverted1 = numValue * 3.281
    const lconverted2 = numValue / 3.281 
    const lResult =`${num} meters = ${lconverted1.toFixed(3)}
    feet | ${num} feet = ${lconverted2.toFixed(3)} meters`
    conLength.textContent = lResult
    console.log(lResult)
    return conLength.textContent
}

function toVolume(num) {
    const vconverted1 = numValue * 0.264
    const vconverted2 = numValue / 0.264 
    const vResult = `${num} liters = ${vconverted1.toFixed(3)}
    gallons | ${num} gallons = ${vconverted2.toFixed(3)} liters`
    conVolume.textContent = vResult
    console.log(vResult)
    return conVolume.textContent
}

function toMass(num) {
    const mconverted1 = numValue * 2.204
    const mconverted2 = numValue / 2.204 
    const mResult = `${num} kilograms = ${mconverted1.toFixed(3)}
    pounds | ${num} pounds = ${mconverted2.toFixed(3)} kilograms`
    conMass.textContent = mResult
    console.log(mResult)
    return conMass.textContent
}