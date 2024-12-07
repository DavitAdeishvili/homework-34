// 1) შექმენით მანუალური სორტის ფუნქცია

function sort(arr){
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let numbers = []
    for (let i = min; i <= max; i++){
        if (arr.includes(i)){
            numbers.push(i)
        }
    }
    return numbers
}

console.log(sort([1,2,3,4,5,6,7,8,9,20,19,18,17,16,15,14,13,12,11,10]))