// 1) შექმენით ობიექტი და გამოიტანეთ მისი ინფორმაცია შემდეგი ფორმატით ( key: value )

const me = {
    name: "David",
    surname: "Adeishvili",
    age: 13,
    height: 1.71
}

for (let i in me){
    console.log(i + ": " + me[i])
}