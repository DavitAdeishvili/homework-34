const calculatePrice = (price, tax = 0.05) => price + (price * tax);

console.log(calculatePrice(1, 7))
console.log(calculatePrice(100))