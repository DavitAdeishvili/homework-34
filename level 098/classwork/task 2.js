const list1 = [
    {name: 'lasha', age: 30}, 
    {name: 'merabi', age: 15},
    {name: 'David', age: 13},
]

for (let i of list1){
    for (let x in i){
        console.log(x + ": " + i[x])
    }
}