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
  const historyItem = document.createElement("div");
  historyItem.innerHTML = `
  <p> ${new Date().toDateString()}</p>
  <p>Income ${income}</p>
  <p>Expenses ${expenses}</p>
  <p>Balance ${availableBalance}</p>`;
  document.getElementById("history-list").appendChild(historyItem);
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

document.getElementById("history-tab").addEventListener("click", function () {
  document
    .getElementById("history-tab")
    .classList.add(
      "text-white",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600"
    );
  document
    .getElementById("assistant-tab")
    .classList.remove(
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600",
      "text-white"
    );
  document.getElementById("assistant-tab").classList.add("text-gray-600");
  document.getElementById("expense-form").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});

document.getElementById("assistant-tab").addEventListener("click", function () {
  document.getElementById("expense-form").classList.remove("hidden");
  document
    .getElementById("assistant-tab")
    .classList.add(
      "text-white",
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600"
    );
  document
    .getElementById("history-tab")
    .classList.remove(
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600",
      "text-white"
    );
  document.getElementById("history-section").classList.add("hidden");
});
