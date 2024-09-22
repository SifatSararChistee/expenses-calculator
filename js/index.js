document.getElementById("calculate").addEventListener("click", function () {
  const income = inputFieldValue("income");
  const software = inputFieldValue("software");
  const courses = inputFieldValue("courses");
  const internet = inputFieldValue("internet");

  const expenses = software + courses + internet;
  const availableBalance = income - expenses;
  console.log(availableBalance);
});
