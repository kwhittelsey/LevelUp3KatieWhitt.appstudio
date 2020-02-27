function carLoanPayment(principle, interest, n) {
  return principle * interest / (1 - (Math.pow(1/(1 + interest), n)));
  
  }
function homeLoanPayment(principle, i, n) {
  return principle * interest / (1 - (Math.pow(1/(1 + interest), n)));
  }
  
let newLoan = "Yes"
let choice = " "


let carAmount = " "
let carInterest = " "
let carMonth = " "
let carFinalInterest = " "
let carLoanAmount = " "

let homeAmount = " "
let homeInterest = " "
let homeYear = " "
let homeFinalInterest = " "
let homeFinalYear = " "
let homeLoanAmount = " "
let finalLoop = " "
  
  
while (newLoan == "Yes") {
  
    choice = prompt("Would you like to calculate a home loan or a car loan?")

   if (choice =='Car' || choice == 'car') {

      carAmount = parseInt(prompt(" Enter the amount of the car loan, please no dollar signs or commas: "))
      carInterest = parseFloat(prompt("Enter the interest rate in decimal formatting: "))
      carMonth = parseInt(prompt("Enter the amount of months to pay off the loan: "))
      carFinalInterest = carInterest / 1200

      carLoanAmount = carLoanPayment(carAmount, carFinalInterest, carMonth)
      carLoanDecimal = carLoanAmount.toFixed(2)
      alert(`A car loan for $${carAmount} over ${carMonth} months at ${carInterest}% interest would have a monthly payment of $${carLoanDecimal}.`) 


    } else if (choice =='Home' || choice == 'home') {
  
          homeAmount = parseInt(prompt(" Enter the amount of the car loan, please no dollar signs or commas: "))
          homeInterest = parseFloat(prompt("Enter the interest rate in decimal formatting: "))
          homeYear = parseInt(prompt("Enter the amount of years to pay off the loan, either 15 or 30 years: "))
          homeFinalInterest = homeInterest / 1200
          homeFinalYear = homeYear * 12

          homeLoanAmount = homeLoanPayment(homeAmount, homeFinalInterest, homeFinalYear)
          homeLoanDecimal = homeLoanAmount.toFixed(2)
          alert(`A home loan for $${homeAmount} over ${homeYear} years at ${homeInterest}% interest would have a monthly payment of $${homeLoanDecimal}`) 

     } else 
                  alert("I do not what you want to calculate")
 
        newLoan = prompt('Do you want to calculate a loan? Either Yes or No. ')
        
        
}
alert("Have a good day")
