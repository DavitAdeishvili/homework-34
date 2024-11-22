// ჯავასკრიპტის პროგრამა (გასტილული) რომელსაც აქვს ორი შესაყვანი ველი- ( გადასახადი, "tip" ) და გამოითლის შესაბამის რიცხვს.
let toPay2 = document.getElementById("toPay")
let tip2 = document.getElementById("tip")
let wholePayment2 = document.getElementById("wholeBill")

function payment(toPay, tip){
    toPay = Number (prompt("please enter your bill"))
    tip = toPay / 10
    tip = toString (tip)
    let wholePayment = toPay + tip
    wholePayment = toString(wholePayment)
    let toPay3 = toPay2.textContent = "you have to pay: " + toPay
    let tip3 = tip3.textContent = "you have to tip: " + tip
    let wholePayment3 = wholePayment2.textContent = "whole bill: " + wholePayment
}
payment()