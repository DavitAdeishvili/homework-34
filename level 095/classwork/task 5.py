def task5 (string):
    for i in string:
        if string.count(i) == 1:
            return i
    return "every lettter is repeated"

print (task5 ("qweqweqwe"))
print (task5 ("qweqweqwer"))