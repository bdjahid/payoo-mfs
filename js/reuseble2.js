document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = getInputValueById("input-add-amount");
    const pinNumber = getInputValueById("input-pin");

    // validation nan

    if (isNaN(addMoney)) {
      alert("Failed to add money");
      return;
    }

    if (pinNumber === 1234) {
      console.log("amount added");

      const balance = getTextById("balance");
      const newBalance = balance + addMoney;
      document.getElementById("balance").innerText = newBalance;

      // add to transactions history
      const p = document.createElement("p");
      p.innerText = `Added:${addMoney} Tk. New Balance: ${newBalance}`;
      console.log(p);

      document.getElementById("transaction-container").appendChild(p);
    } else {
      alert("failed to add the money");
    }
  });

// cash out

document.getElementById("btn-cash-out").addEventListener("click", function () {
  event.preventDefault();

  const cashOutMoney = getInputValueById("input-cash-out-amount");
  const cashOutPin = getInputValueById("input-cash-out-pin");

  // validation nan

  if (isNaN(cashOutMoney)) {
    alert("Failed to add money");
    return;
  }

  console.log(cashOutMoney, cashOutPin);

  if (cashOutPin === 1234) {
    const balance = getTextById("balance");

    if (cashOutMoney > balance) {
      alert("you do not have enough to money");
      return;
    }
    const newCashOutBalance = balance - cashOutMoney;
    document.getElementById("balance").innerText = newCashOutBalance;

    // add to transactions history

    const div = document.createElement("div");
    div.classList.add("bg-pink-300");
    div.innerHTML = `
    <h4 class="test-2xl font-bold">Cash Out</h4>
    <p>${cashOutMoney} withdraw. New Balance ${newCashOutBalance}</p>
    `;

    document.getElementById("transaction-container").appendChild(div);
  } else {
    alert("failed to cash out money");
  }
});
