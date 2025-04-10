
let firstNumber = "";
let secondNumber = "";
let opr = "";
let isSecond = false;


function calculator() {
    if (firstNumber === "" || secondNumber === "" || opr === "") return;

    const a = parseFloat(firstNumber);
    const b = parseFloat(secondNumber);

    switch (opr) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "/":
            result = a / b;
            break;
        case "*":
            result = a * b;
            break;
        default:
            result = "invalid";
    }

    updateDisplay(result);

    // reset for the next operations
    firstNumber = result.toString()
    isSecond = false;
    secondNumber = "";
}

function updateDisplay(result) {
    document.getElementById("display").value = result
}


function appendNumber(val) {
    if (!isSecond) {
        firstNumber += val;
        updateDisplay(firstNumber);
        isSecond = true
    } else {
        secondNumber += val;
        updateDisplay(secondNumber);
    }
}

function setOperator(oprator) {
    if (firstNumber === "") return;
    isSecond = true;
    opr = oprator;
    updateDisplay(oprator);
}

function clearDisplay() {
    firstNumber = "";
    secondNumber = "";
    isSecond = false;
    opr = "";
    updateDisplay("")
}

function print(val) {
    console.log(val);
}