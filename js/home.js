document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("btn add money");

    const inputAddAmount = document.getElementById("input-add-amount").value;
    console.log(inputAddAmount);

    const inputPin = document.getElementById("input-pin").value;
    console.log(inputPin);

    if (inputPin === "1234") {
      console.log("your amount is added");
      // step2
      const balance = document.getElementById("balance").innerText;
      //   console.log(balance);

      //   const newBalance1 = balance + inputAddAmount;
      //   console.log(newBalance1);
      // step3
      const addMoneyNumber = parseFloat(balance);
      // step4
      const balanceNumber = parseFloat(inputAddAmount);
      //   console.log(addMoneyNumber);
      // step5
      const newBalance = addMoneyNumber + balanceNumber;
      console.log(newBalance);
      // step6
      document.getElementById("balance").innerText = newBalance;
    } else {
      alert("failed your add amount please valid pin");
    }
  });

//   btn-show-add-money

document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function () {
    console.log("btn-show-add-money");

    //   btn-show-add-money clicked
    document.getElementById("add-money-form").classList.remove("hidden");

    //   btn-hide-cash-out clicked
    document.getElementById("cash-out-money-form").classList.add("hidden");
  });
