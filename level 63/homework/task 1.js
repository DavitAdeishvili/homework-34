// Greeting Function Create a function greet that accepts a name as a parameter and greets the person. If no name is provided, the default name should be "Guest".

function greet (name = "guest"){
    console.log("hello" + name)
}

greet ('David')
greet ()