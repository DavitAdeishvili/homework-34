def find_short(s):
    #we just made a function
    list1 = s.split(" ")
    #we just spit it into a list for every space in the sentance

    word_len = len(list1[0])
    #we  made a variable word_len and we saved 0 in it
    for i in list1:
    #we just looked over it
        if len(i) < word_len:
        #we said that if len(i) is not greater then 0...
            word_len = len(i)
            #then word_len = number that i is in the list
    
    
    return word_len
    #we just returned it

print(find_short("bitcoin take over the world maybe who knows perhaps"))
#and finally we called it so it would have something in terminal

#done