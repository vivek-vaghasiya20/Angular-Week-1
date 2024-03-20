let displayValue = "";

const clearValue = () => {
  displayValue = "";
  document.getElementById("display-screen").innerHTML = displayValue;
};

const deleteLastInput = () => {
  displayValue = document.getElementById("display-screen").innerHTML;
  displayValue = displayValue.slice(0, -1);
  document.getElementById("display-screen").innerHTML = displayValue;
};

const appendToDisplay = (value) => {
  displayValue = document.getElementById("display-screen").innerHTML;
  const lastChar = displayValue.slice(-1);
  const operators = ["+", "-", "*", "/"];
  const isLastCharOperator = operators.includes(lastChar);

  if (!isLastCharOperator || value.match(/[0-9]/)) {
    displayValue += value;
  }

  document.getElementById("display-screen").innerHTML = displayValue;
};

const calculte = () => {
  try {
    const result = eval(displayValue);
    document.getElementById("display-screen").innerHTML = result;
  } catch (error) {
    document.getElementById("display-screen").innerHTML = "Error";
  }
};

const percentageCalculate = () => {
  displayValue = document.getElementById("display-screen").innerHTML;
  try {
    let result = eval(displayValue);
    if (!isNaN(result)) {
      result /= 100;
    }
    document.getElementById("display-screen").innerHTML = result;
  } catch (error) {
    document.getElementById("display-screen").innerHTML = "Error";
  }
};

const addDot = (value) => {
  displayValue = document.getElementById("display-screen").innerHTML;
  const operators = ["+", "-", "*", "/"];
  const lastIndex = displayValue.length - 1;
  let lastOperatorIndex = -1;
  let hasDot = displayValue.includes(".");

  for (let i = lastIndex; i >= 0; i--) {
    if (operators.includes(displayValue[i])) {
      lastOperatorIndex = i;
      break;
    }
  }

  if (lastOperatorIndex !== -1) {
    const substringAfterOperator = displayValue.substring(
      lastOperatorIndex + 1
    );
    if (!substringAfterOperator.includes(".")) {
      displayValue += value;
    }
  } else {
    if (!hasDot) {
      displayValue += value;
    }
  }
  document.getElementById("display-screen").innerHTML = displayValue;
};
