function calculateLoan() {
  loanAmount = document.getElementById("loan-amount").value;
  interestRateValue = document.getElementById("rate").value;
  monthsToPay = document.getElementById("months").value;

  let interest = (loanAmount * (interestRateValue * 0.01)) / monthsToPay;

  console.log(interest);

  monthlyPay = (loanAmount / monthsToPay + interest).toFixed(2);

  document.querySelector(
    ".payment"
  ).innerHTML = `Monthly Payment : ${monthlyPay}`;
}
