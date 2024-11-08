def long (str1, str2):
    len1 = len (str1)
    len2 = len (str2)
    if len1 > len2:
        print ("str1 is longer then str2")
    elif len2 > len1:
        print ("str2 is longer then str1")
    else:
        print ("they have same amount of words")