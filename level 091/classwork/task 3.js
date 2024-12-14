let age1 = document.getElementById(age)
let password1 = document.getElementById(password1)
let password2 = document.getElementById(password2)

function age(age){
    if (age > 18){
        return "you are old enough"
    }else{
        return "you are not old enough"
    }
}

console.log(age(age1))

function password(pass1, pass2){
    if (pass1 === pass2){
        return "its correct"
    }

    else{
        return "its not correct"
    }
}

console.log(password(password1, password2))