document.getElementById("calculate").addEventListener("click", function () {
  const income = inputFieldValue("income");
  const software = inputFieldValue("software");
  const courses = inputFieldValue("courses");
  const internet = inputFieldValue("internet");

  const expenses = software + courses + internet;
  const availableBalance = income - expenses;
  document.getElementById("total-expenses").innerText = expenses;
  document.getElementById("balance").innerText = availableBalance;

  document.getElementById("results").classList.remove("hidden");
});

document
  .getElementById("calculate-savings")
  .addEventListener("click", function () {
    const income = inputFieldValue("income");
    const software = inputFieldValue("software");
    const courses = inputFieldValue("courses");
    const internet = inputFieldValue("internet");
    const savings = inputFieldValue("savings");

    const expenses = software + courses + internet;
    const availableBalance = income - expenses;
    const savingsAmount = (availableBalance * savings) / 100;
    const remainingBalance = availableBalance - savingsAmount;

    document.getElementById("savings-amount").innerText = savingsAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  });
