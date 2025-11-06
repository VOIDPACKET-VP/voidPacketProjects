const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two")
let gen = true
function passwdGenerat() {
    if (gen) {
        for (let i = 0; i < 16; i++) {
            let pass1 = Math.floor(Math.random()* characters.length)
            let pass2 = Math.floor(Math.random()* characters.length)
            passOne.textContent += characters[pass1]
            passTwo.textContent += characters[pass2]
        }
    }
    gen = false
}

function passwdReset() {
    i = 0
    passOne.textContent = ""
    passTwo.textContent = "" 
    gen = true
}