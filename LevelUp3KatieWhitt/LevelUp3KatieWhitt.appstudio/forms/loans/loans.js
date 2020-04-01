function carLoanPayment(a, r, n) {
  let monthlyRate = (r / 12) / 100
  let num = monthlyRate * Math.pow(1 + monthlyRate,n)
  let denom = Math.pow(1 + monthlyRate,n) - 1
  let carPayment = a * (num / denom)
  return carPayment
}

function homeLoanPayment(a, r, n) {
  let monthlyRate = (r / 12) / 100
  let months = n * 12
  let num = monthlyRate * Math.pow(1 + monthlyRate,months)
  let denom = Math.pow(1 + monthlyRate,months) - 1
  let homePayment = a * (num / denom)
  return homePayment
}

let response = prompt('Do you want to calculate a monthly payment?').toLowerCase()

while (response == 'yes') {
  let calculatorChoice = prompt('Which calculator would you like to use: Car or Home Loan?')

  switch (calculatorChoice) {
  case 'Car Loan': 
    let amount = parseInt(prompt('How much do you owe?'))
    let rate = parseInt(prompt('What is the yearly interest rate?'))
    let months = parseInt(prompt('How many monthly payments do you have?'))
    let monthlyPayment = carLoanPayment (amount, rate, months)
    alert(`A ${calculatorChoice} for $${amount} over ${months} months at ${rate}% interest would have a monthly payment of $${monthlyPayment.toFixed(2)}.`)
    break;
  case 'Home Loan': 
    let amountOwed = parseInt(prompt('How much do you owe?'))
    let interestRate = parseInt(prompt('What is the yearly interest rate?'))
    let years = parseInt(prompt('How many years is your loan: 15 or 30?'))
    let mortgagePayment = homeLoanPayment(amountOwed, interestRate, years)
    alert(`A ${calculatorChoice} for $${amountOwed} over ${years} years at ${interestRate} would have a monthly payment of $${mortgagePayment.toFixed(2)}.`)
    break;
  default:
    alert('Error: enter a choice')
    break;
  }
  
  let response = prompt('Do you want to calculate a monthly payment?').toLowerCase()
  
  if (response == 'no'){
  alert('Have a nice day!')
  break;
  }
}