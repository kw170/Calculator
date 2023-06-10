let firstNum = ""
let secondNum = ""
let operator = ""
let displayValue = "0"
let counter = 0

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
let mainScreen = document.querySelector('.mainScreen')

//numbers are on the screen when you click a button!
//and a variable stores the value
number.forEach((button) =>{
    button.addEventListener('click', ()=>{
        if(displayValue === "0" && counter < 1){
            mainScreen.textContent = button.value
            displayValue = button.value
            if(firstNum !== ""){
                counter++
            }   
        }

        else{
            if(parseInt(displayValue) > 1000000000){
                //Do nothing
            }
            else{
                mainScreen.textContent += button.value
                displayValue += button.value
            }
        }
    })
})

//when the operator button is click firstNum is set 
//operator is set
let operand = document.querySelectorAll('.operator')
operand.forEach((button) =>{
    button.addEventListener('click', () =>{
        firstNum = displayValue
        console.log(firstNum)
        operator = button.textContent
        displayValue = "0"
        counter = 0
    })
})
