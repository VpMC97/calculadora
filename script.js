let currentinput = '';
let currentOperator = '';
let previousInput = '';

function appendNumber(number) {
    currentinput += number;
    document.getElementById('display').value = `${previousInput} ${currentOperator} ${currentinput}`;
}

function appendOperation(operator) {
    if (currentinput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    currentOperator = operator;
    previousInput = currentinput;
    currentinput = '';
    document.getElementById('display').value = `${previousInput} ${currentOperator}`;
}

function calculate() {
    if (currentinput === '' || previousInput === '') return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentinput); 

    if (isNaN(prev) || isNaN(current)) return;

    switch (currentOperator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                error();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    currentinput = result.toString();
    currentOperator = '';
    previousInput = '';
    document.getElementById('display').value = currentinput;
}

function clearAll() {
    currentinput = '';
    currentOperator = '';
    previousInput = '';
    document.getElementById('display').value = '';
}

function error(){
    document.getElementById('display').value = 'Math ERROR';
    setTimeout(clearAll, 2000); 
}