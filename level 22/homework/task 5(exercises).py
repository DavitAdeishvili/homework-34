def palindrom_or_not (str):
    str1 = str [::-1]
    print (str)
    if str1==str:
        print ("your word is palindrom")
    else:
        print ("your word is not palindrom")

palindrom_or_not ("dog")
palindrom_or_not ("kayak")