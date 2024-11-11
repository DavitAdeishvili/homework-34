def feast(beast, dish):
    #we make a function called feast and we give it 2 parameters called beast and dish
    beast_first_and_last = beast[0] + beast[-1]
    #we tell computer what beast first and last letters are
    dish_first_and_last = dish[0] + dish[-1]
    #we tell the computer what dish first and last letters are
    return beast_first_and_last == dish_first_and_last 
    #we return the bullean if beast first and last letter equals dish first and last letters then it will return True othervise False