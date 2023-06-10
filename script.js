let firstNum
let secondNum
let operator

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