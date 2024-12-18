def task4(string):
    for i in string:
        if string.count(i) > 1:
            return False
    return True

print(task4("12354")) 
print(task4("11234")) 