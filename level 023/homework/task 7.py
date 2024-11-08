def longest_smallest (str1, str2, str3, str4, str5):
    len1 = len (str1)
    len2 = len (str2)
    len3 = len (str3)
    len4 = len (str4)
    len5 = len (str5)
    print (max(len1, len2, len3, len4, len5))
    if 3:
        print ("car")
    elif 4:
        print ("pear")
    elif 5:
        print ("apple")
    elif 7:
        print ("Borjomi")
    else:
        print ("Lamborgini")
    print (min(len1, len2, len3, len4, len5))
    if 3:
        print ("car")
    elif 4:
        print ("pear")
    elif 5:
        print ("apple")
    elif 7:
        print ("Borjomi")
    else:
        print ("Lamborgini")


longest_smallest ("apple", "pear", "Borjomi", "car", "Lamborgini")