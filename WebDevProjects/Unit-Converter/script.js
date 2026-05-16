
const conBtn = document.getElementById("conv-btn")
const numInput = document.getElementById("num-convert")
const conLength = document.getElementById("con-length")
const conVolume = document.getElementById("con-volume")
const conMass = document.getElementById("con-mass")

function convertAll() {
    const numValue = Number(numInput.value)
    if (!isNaN(numValue)) {

            const lResult =`${numValue} meters = ${(numValue * 3.281).toFixed(3)}
            feet | ${numValue} feet = ${(numValue / 3.281).toFixed(3)} meters`
            conLength.textContent = lResult
        
            const vResult = `${numValue} liters = ${(numValue * 0.264).toFixed(3)}
            gallons | ${numValue} gallons = ${(numValue / 0.264 ).toFixed(3)} liters`
            conVolume.textContent = vResult
        
            const mResult = `${numValue} kilograms = ${(numValue * 2.204).toFixed(3)}
            pounds | ${numValue} pounds = ${(numValue / 2.204).toFixed(3)} kilograms`
            conMass.textContent = mResult
        
    } else {
        console.log("Not a valide number")
    }
}

conBtn.addEventListener("click", convertAll)

// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

