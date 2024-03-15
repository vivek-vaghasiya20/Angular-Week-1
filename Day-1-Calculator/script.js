let displayValue = "";

function clearValue() {
  displayValue = "";
  document.getElementById("display-screen").innerHTML = displayValue;
}
function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display-screen").innerHTML = displayValue;
}

function calculte() {
  try {
    const result = eval(displayValue);
    document.getElementById("display-screen").innerHTML = result;
  } catch (error) {
    document.getElementById("display-screen").innerHTML = "Error";
  }
}
