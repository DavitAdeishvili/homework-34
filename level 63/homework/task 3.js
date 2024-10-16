// Rectangle Area Calculator Create a function `calculate_area` to find the area of a rectangle. It should take two parameters: length and width. If the width is not provided, use a default value of 1.

function calculate_area(length, width = 1){
    console.log(length * width)
}

calculate_area(1,2)
calculate_area(100)