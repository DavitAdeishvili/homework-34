def str_list (strings):
    for string in strings:
        if len (string) % 2 == 0:
            print ("it has even amount of letters in it")
        else:
            print ("it has odd amount of letters in it")

str_list (["dato" , "nika" , "polieqtori" , "zaza", "apple"])