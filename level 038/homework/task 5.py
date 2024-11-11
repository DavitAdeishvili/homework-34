def points(games):
    #we make a function called point and give ir a parameter called games 
    score=0
    #we create a variable called score 
    for i in games:
        #we look over a list
        i= i.split(":")
        #we split a x:y for every":"
        if i[0] > i[1]:
            #if first number is greater then second we add score 3 points
            score += 3
        elif i[0] == i[1]:
            #if first and second numbers are the same we add score 1 point
            score += 1
    return score
    #we return the score