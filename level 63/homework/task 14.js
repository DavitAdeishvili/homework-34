// Count Even Numbers Create a function count_evens that accepts a list of integers and returns the count of even numbers using a for loop.

function count_evens(list1){
    something = []
    for (i in list1){
        if (i % 2 == 0){
            something.push(i)
        }
        console.log (something.filter())
    }
}

count_evens ([1,2,3,4,5,6,7,8,9,10])