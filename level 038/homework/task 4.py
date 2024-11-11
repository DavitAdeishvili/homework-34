def say_hello(name, city, state):
    #we make a function called say_hello and give it 3 parameters called name, city and state
    name1 = ""
    #we make clear string 
    for i in name:
        #we look over the list called name
        name1 += i + " "
        #we add some stings to a variable called name1
    name1 = name1[:-1]
    #we spell that name backwards
    return f"Hello, {name1}! Welcome to {city}, {state}!"
    #we return the greet to someone