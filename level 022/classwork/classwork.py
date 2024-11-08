#1 task

def calculate_average():
    numbers = [1,2,3,4,5,6,7,8,9,10]
    plus = sum(numbers)
    things = len (numbers)
    print (plus / things)

calculate_average()


#2 task

def greet (name = "guest"):
    print ("Welcome", name)

greet ('David')
greet ()


#3 task

def sum_between(firstnum, secondnum):
    if firstnum > secondnum:
        firstnum, secondnum = secondnum, firstnum
    return sum(range(firstnum, secondnum + 1))


firstnum = 1
secondnum = 5
print(sum_between(firstnum, secondnum))  



#4 task

def list(numbers_list):
    for num in numbers_list:
        if num % 2 == 0:
            print("your number is even")
        else:
            print ("your number is odd")

list ([1,2,3,4,5,6,7,8,9,10])
    
#5 task

def print_numbers(n):
    for i in range (1, n):
        print (i)
    
        
print_numbers(180)

#6 task

def print_even_numbers(n):
    for i in range (2, n, 2):
        print (i)

print_even_numbers(100)

#7 task

def sum (num1,num2):
    print (num1+num2)

sum(7,8)

#8 task

def sum (num1, num2):
    return (num1 + num2 )

sum1=sum(2,4)

#9 task

def joined_strings (str1, str2):
    print (str1+str2)

joined_strings("David", "Adeishvili")

#10 task 

def find_max (num1, num2):
    if num1>num2:
        print ("num1 is greater then num2")
    elif num2>num1:
        print("num2 is greater then num1")
    else:
        print ('they are equall')

find_max(1,2)

#11 task

def reverse_str (str):
    str1 = str [::-1]
    print (str1)

reverse_str ("dog")

#12 task

def S(length1, length2):
    S = length1 * length2
    print (S)

S (10,100)

#13 task

def num (num):
    if num % 2 or 3 or 5 or 7 == 0:
        print ("your number is easy number")
    else:
        print ("your number is hard number")

num (9)

#14 task

def list(numbers_list):
    sum1 = sum(numbers_list)
    return (sum1)

list = ([1,2,3,4,5,6,7,8,9,10])

#15 task

def count_vowels(str):
    vowels = "aeiouAEIOU"
    count = 0
    for char in str:
        if char in vowels:
            count += 1
    return count
    
vowels = count_vowels ("apple")

#16 task 

def convert_to_uppercase(strings_list):
    return [string.upper() for string in strings_list]

strings = ["hello", "how are you?", "bye"]
uppercase_strings = convert_to_uppercase(strings)
print(uppercase_strings)