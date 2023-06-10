let firstNum = ""
let secondNum = ""
let operator = ""

function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

function operate(operand, first, second){
    if(operand === "+"){
        add(first, second)
    }
    else if(operand === "-"){
        subtract(first, second)
    }
    else if(operand === "*"){
        multiply(first, second)
    }
    else if(operand === "/"){
        divide(first, second)
    }
}


let number = document.querySelectorAll('.number')
let screen = document.querySelector('.screen')
console.log(screen.textContent)

number.forEach((button) =>{
    button.addEventListener('click', ()=>{
        if(screen.textContent === "0"){
            screen.textContent = button.value
        }
        else{
            screen.textContent += button.value
        }
    })
})