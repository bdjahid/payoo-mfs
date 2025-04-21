document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = getInputValueById("input-add-amount");
    const pinNumber = getInputValueById("input-pin");

    if (pinNumber === 1234) {
      console.log("amount added");

      const balance = getTextById("balance");
      const newBalance = balance + addMoney;
      document.getElementById("balance").innerText = newBalance;
    } else {
      alert("failed to add the money");
    }
  });

// cash out

document.getElementById("btn-cash-out").addEventListener("click", function () {
  event.preventDefault();

  const cashOutMoney = getInputValueById("input-cash-out-amount");
  const cashOutPin = getInputValueById("input-cash-out-pin");

  console.log(cashOutMoney, cashOutPin);

  if (cashOutPin === 1234) {
    const balance = getTextById("balance");
    const newCashOutBalance = balance - cashOutMoney;
    document.getElementById("balance").innerText = newCashOutBalance;
  } else {
    alert("failed to cash out money");
  }
});
