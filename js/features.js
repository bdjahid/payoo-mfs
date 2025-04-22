// add btn
document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function () {
    console.log("add");
    showSectionById("addMoney");
  });
// cash out btn
document
  .getElementById("btn-show-cash-out")
  .addEventListener("click", function () {
    console.log("cash out");
    showSectionById("cashOut");
  });
// transaction
document
  .getElementById("btn-show-transactions")
  .addEventListener("click", function () {
    console.log("btn-show-transactions");
    showSectionById("transactions");
  });
