let firstOperand = '';
let secondOperand = '';

const numberBtn = document.querySelectorAll('.numberBtn');
const operatorBtn = document.querySelectorAll('.OperatorBtn');
const btnClear = document.querySelector('#btnClear');
const btnEquals = document.querySelector('#btnEquals');
const currentOperand = document.querySelector('.current_operand');
const previousOperand = document.querySelector('.previous_operand');

function add(a,b) {
    return a + b;
}

function substract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if (b != 0) {
        return a / b;
    }else {
        return "Cannot divide by zero";
    }
}

function operate(firstOperand, operator, secondOperand){
    switch (operator){
        case '+':
            return add(firstOperand, secondOperand);
            break;
        case '−':
            return subtract(firstOperand, secondOperand);
            break;
        case '×':
            return multiply(firstOperand, secondOperand);
            break;
        case '÷': 
            return divide(firstOperand, secondOperand);
            break;
    }
}

btnClear.addEventListener('click', () => {
    clear();
})

numberBtn.forEach(item => {
    item.addEventListener('click', () => {
        updateOperands(item.textContent)
    });
});

operatorBtn.forEach(item => {
    item.addEventListener('click', () => {
        updateOperator(item.textContent)
    });
});

function clear(){
    currentOperand.textContent = '';
    previousOperand.textContent = '';
}

function updateOperands(value){
    if (operatorBtn.textContent == ''){
        currentOperand.textContent += value;
    } else {
        previousOperand.textContent += value;
    }
};

function updateOperator(value){
    currentOperand.textContent += value;
    previousOperand.textContent += value;

}
