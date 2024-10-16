// Introduction Function Create a function introduce that takes a name, age, and country. If age and country are not provided, they should default to "unknown".

function introduce (name, age = "unknown", country = "unknown"){
    console.log ("hello your name is " + name + " you are " + age + " years old you are from country " + country)
}

introduce ('David', 13, 'Adeishvili')