// 2) შექმენით მანუალური ფილტრის ფუნქცია ( ფუნქცია რომელსაც გადაეცდემა ორი არგუმენტი, მასივი და ინტეჯერი რომლის ქვემოთ მყოფი რიცხვებიც უნდა ამოიღოს მასივიდან )

function filter(array, int){
    let numbers = []
    for(let i = 0; i < array.length; i++){
        if(array[i] >= int){
            numbers.push(array[i])
        }
    }
    return numbers
}

console.log(filter([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5))