let firstNum = ""
let secondNum = ""
let operator = ""
let displayValue = ""
let counter = 0
let result = ""

function add(a, b){
    console.log("second step")
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    if(a * b > 9999999999999){
        return "TOO LARGE"
    }
    return a * b
}

function divide(a, b){
    if(b == 0){
        return "ERROR"
    }
    return Math.round((a / b) * 1000) / 1000
}

function operate(operand, first, second){
    if(operand === "+"){
        console.log("first step")
        return add(first, second)
    }
    else if(operand === "-"){
        return subtract(first, second)
    }
    else if(operand === "*"){
        return multiply(first, second)
    }
    else if(operand === "÷"){
        return divide(first, second)
    }
}


let number = document.querySelectorAll('.number')
let mainScreen = document.querySelector('.mainScreen')

//numbers are on the screen when you click a button!
//and a variable stores the value
number.forEach((button) =>{
    button.addEventListener('click', ()=>{
        if(displayValue === "" && counter < 1){
            mainScreen.textContent = button.value
            displayValue = button.value
            if(firstNum !== ""){
                counter++
            }   
        }

        else{
            if(parseInt(displayValue) > 1000000000000){
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
        firstNum = parseInt(displayValue)
        if(button.textContent === "x"){
            operator = "*"
        }
        else{
            operator = button.textContent
        }
        displayValue = ""
        counter = 0
    })
})

//to do equals sign
//bullet points of #six
let equals = document.querySelector('#equals')
equals.addEventListener('click',()=>{
    if(firstNum !== "" && displayValue !== ""){
        secondNum = parseInt(displayValue)
        result = operate(operator,firstNum, secondNum)
        mainScreen.textContent = result
        firstNum = result
    }
})


//mini upper screen works
let upperScreen = document.querySelector('.upperScreen')
operand.forEach((button) =>{
    button.addEventListener('click', () =>{
        upperScreen.textContent = firstNum + " " + operator
    })
})

equals.addEventListener('click',()=>{
    upperScreen.textContent += " " + secondNum + " ="
})


//clear button resets calculator
let clear = document.querySelector('#clear')
clear.addEventListener('click', () =>{
    firstNum = ""
    secondNum = ""
    operator = ""
    displayValue = ""
    counter = 0
    result = ""
    upperScreen.textContent = ""
    mainScreen.textContent = 0
})