#task 1

for i in range (11):
    print (i)

nums = [1,2,3,4,5,6,7,8,9,10]
print (len(nums))
    
    
#task 2

num1= int(input ("enter your first number: "))
num2 = int(input ("enter your second and greater number: "))

for i in range (num1, num2):
    nums=list
    nums = []
    print (nums)

#task 3

start_number = int (input("enter first number: "))
end_number = int (input("enter second number: "))

numbers = list (range (start_number, end_number + 1 ))

min_number = min(numbers)
max_numbers = max(numbers)
sum_of_numbers = sum(numbers)

print (numbers)
print (min_number)
print (max_numbers)
print (sum_of_numbers)

#task 4

number_of_inputs = int(input("how many numbers do you want?"))

numbers = []

for i in range (number_of_inputs):
    number = float (input('enter HIGHER THEN previous i:'))
    numbers.append(number)

print (sum(numbers))


#task 5

cars= ["Tesla", "BMW", 'Audi', "Mercedes", "Lexus"]
first_three_cars = cars[:3]
last_two_cars = cars [-2:]

print (first_three_cars)
print (last_two_cars)

#task 6

names = ["David", "David"]

for name in names:
    if name == "David":
        print ("hello admin")
    
    else:
        print ("hello user")
