const resultBox = document.getElementById("result-box");

const calculatorButtons = document.querySelectorAll(".cal-btn");
const resetButton = document.querySelector(".reset");
const submitButton = document.querySelector(".submit-btn");

/*  add events to buttons */

for (btn of calculatorButtons)
{
    btn.addEventListener("click", addCharToResultBox);
}
resetButton.addEventListener("click", resetInputBox);
submitButton.addEventListener("click", handleCalculationOnSubmit);

/* events funcions */

function addCharToResultBox() {
    let char = this.innerHTML;
    if (+char < 10 || char === ".")
    {
        resultBox.value += char;
    }
    else
    {
        resultBox.value += " " + char + " ";
    }   
}

function resetInputBox() {
    resultBox.value = "";
}

function handleCalculationOnSubmit() {
    let operation = resultBox.value;
    splitedOperation = operation.split(" ");
    if (splitedOperation.length != 3)
    {
        resetInputBox();
        return;
    }

    op = splitedOperation[1];
    let result = null;
    switch (op)
    {
        case "+": 
        {
            result = +splitedOperation[0] + +splitedOperation[2];
        }
        break;
        case "-": 
        {
            result = +splitedOperation[0] - +splitedOperation[2];
        }
        break;
        case "*": 
        {
            result = +splitedOperation[0] * +splitedOperation[2];
        }
        break;
        case "/": 
        {
            result = +splitedOperation[0] / +splitedOperation[2];
        }
        break;
        default:
        {
            result = 0;
        }
        break;
    }

    resultBox.value = +(result.toFixed(3));
}