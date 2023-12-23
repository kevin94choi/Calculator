let firstOperand = '';
let secondOperand = '';
let operator = '';

const numberBtn = document.querySelectorAll('.numberBtn');
const operatorBtn = document.querySelectorAll('.operatorBtn');
const btnClear = document.querySelector('#btnClear');
const btnEquals = document.querySelector('#btnEquals');
const currentScreen = document.querySelector('.currentScreen');
const previousScreen = document.querySelector('.previousScreen');

function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    if (b != 0) {
        return parseFloat(a) / parseFloat(b);
    }else {
        alert("Cannot divide by zero");
    }
}

function operate(a, operator, b) {
    switch (operator){
        case '+':
            return add(a, b);
            break;
        case '−':
            return subtract(a, b);
            break;
        case '×':
            return multiply(a, b);
            break;
        case '÷': 
            return divide(a, b);
            break;
    }
}

btnClear.addEventListener('click', clear)

numberBtn.forEach((button) => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent)
    });
});


operatorBtn.forEach(button => {
    button.addEventListener('click', () => {
        // if (currentScreen.textContent === '' || previousScreen.textContent === 'Press a number first!'){
        //     previousScreen.textContent = 'Press a number first!'
        // }else {
        // // firstOperand = currentScreen.textContent
        // previousScreen.textContent = currentScreen.textContent;
        // currentScreen.textContent = '';
        updateOperator(button.textContent)})
    });
// });

btnEquals.addEventListener('click', calculate)
    // previousScreen.textContent = `${previousScreen.textContent} ${currentScreen.textContent} =`;
    // currentScreen.textContent = '';
    // currentScreen.textContent = operate(firstOperand, operator, secondOperand);
    // firstOperand = operate(firstOperand, operator, secondOperand);
// })

function clear(){
    currentScreen.textContent = '';
    previousScreen.textContent = '';
    firstOperand = ''
    secondOperand = ''
    operator = ''
}

function appendNumber(number){
    // if (previousScreen.textContent == ''){
        if (currentScreen.textContent !== '' && previousScreen.textContent !== ''){
            currentScreen.textContent = '';
            currentScreen.textContent += number;
        } else {
            currentScreen.textContent += number;
        }
    //     firstOperand += number;
    // }else if (previousScreen.textContent !== '' && currentScreen.textContent !== ''){
    //     firstOperand = currentScreen.textContent;
    //     currentScreen.textContent += number;
    //     secondOperand += number;
    // }else{
    //     currentScreen.textContent += number;
    //     secondOperand += number;
    // }
};

function updateOperator(value){
    if(operator !== '')calculate();
    firstOperand = currentScreen.textContent;
    operator = value;
    previousScreen.textContent =  `${firstOperand} ${value}`;
    currentScreen.textContent = '';
}

function calculate(){
    secondOperand = currentScreen.textContent;
    currentScreen.textContent = operate(firstOperand, operator, secondOperand);
    previousScreen.textContent = `${firstOperand} ${operator} ${secondOperand} =`
    operator = ''
}
