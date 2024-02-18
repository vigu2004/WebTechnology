console.log("Hello")

let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let output = document.getElementById("output").innerHTML

function add() {
    
    output.innerHTML = num1 + num2
}
function subtract() {
    x = num1 - num2
    output.innerHTML = x
    
}
function multiply() {
    x = num1 * num2
    output.innerHTML = x
    
}
function divide() {
    x = num1 / num2
    output.innerHTML = x
    
}


