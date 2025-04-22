function getInputValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}
function getTextById(id) {
  const inputText = document.getElementById(id).innerText;
  const textNumber = parseFloat(inputText);
  return textNumber;
}

function showSectionById(id) {
  // hide section
  document.getElementById("addMoney").classList.add("hidden");
  document.getElementById("cashOut").classList.add("hidden");
  document.getElementById("transactions").classList.add("hidden");

  //show section

  document.getElementById(id).classList.remove("hidden");
}
