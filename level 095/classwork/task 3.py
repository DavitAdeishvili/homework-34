def something (num1, num2):
    num1 = str(num1)
    num2 = str(num2)
    numbers = []
    for i in num1:
        numbers.append(int(i))

    for x in num2:
        numbers.append(int(x))
    
    num1_times_num2 = int(num1) * int(num2)
    num1_times_num2 = str(num1_times_num2)

    for y in num1_times_num2:
        if y not in num1:
            if y not in num2:
                return False
            
    else: 
        return True

print (something (6, 21))
print (something (6, 22))