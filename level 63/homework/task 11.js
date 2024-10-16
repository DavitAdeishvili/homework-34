// Find the Maximum Create a function `find_max` that accepts three numbers and returns the largest one using comparison operators and if-else statements.

function find_max (num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        console.log (num1)
    }
    if (num2 > num1 && num2 > num3){
        console.log (num2)
    }
    if (num3 > num2 && num3 > num1){
        console.log (num3)
    }
}

find_max (1,2,3)