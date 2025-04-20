document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById("phone-number").value;
    console.log(phoneNumber);

    const pin = document.getElementById("pin").value;
    console.log(pin);

    if (phoneNumber === "5" && pin === "1234") {
      console.log("you r logged  in");
      window.location.href = "/home.html";
    } else {
      alert("Wrong phone or pin");
    }
    console.log("click");
  });
