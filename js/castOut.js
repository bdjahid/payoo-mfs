// btn-cash-out
document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("cash out");

    const inputAddAmount = document.getElementById(
      "input-cash-out-amount"
    ).value;
    console.log(inputAddAmount);

    const inputPin = document.getElementById("input-cash-out-pin").value;
    console.log(inputPin);

    if (inputPin === "1234") {
      console.log("your amount is cash out");
      // step2
      const balance = document.getElementById("balance").innerText;
      //   console.log(balance);

      //   const newBalance1 = balance - inputAddAmount;
      //   console.log(newBalance1);
      // step3
      const addMoneyNumber = parseFloat(balance);
      // step4
      const balanceNumber = parseFloat(inputAddAmount);
      //   console.log(addMoneyNumber);
      // step5
      const newBalance = addMoneyNumber - balanceNumber;
      console.log(newBalance);
      // step6
      document.getElementById("balance").innerText = newBalance;
    } else {
      alert("failed your cash out amount please valid pin");
    }
  });

//   btn-show-cash-out

document
  .getElementById("btn-show-cash-out")
  .addEventListener("click", function () {
    console.log("btn-show-cash-out");

    //   btn-show-cash-out clicked
    document.getElementById("cash-out-money-form").classList.remove("hidden");

    //   btn-hide-add-money clicked
    document.getElementById("add-money-form").classList.add("hidden");
  });
