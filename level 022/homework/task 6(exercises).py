def longest_word (word1, word2):
    len1 = len (word1)
    len2 = len (word2)
    if len1 > len2:
        print ("first word is longer then second word")
    elif len2>len1:
        print ("second word is longer then first word")
    else:
        print ("they have same amount of letters in it")

longest_word ("apple","dog")