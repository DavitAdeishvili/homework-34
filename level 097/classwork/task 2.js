const me = {
    name: "David",
    surname: "Adeishvili",
    age: 13,
    height: 1.71
}

for (let i in me){
    me[i]= me[i].toString()
    if (me[i].length <= 5){
        console.log(i + ": " + me[i])
    }
}