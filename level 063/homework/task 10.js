// Calculate Final Price Write a function calculate_price that takes the price of an item and a sales tax. The sales tax should default to 5%.

function calculate_price (price, tax = 5){
    tax = 100 - tax
    console.log (price / 100 * tax)
}

calculate_price (100)