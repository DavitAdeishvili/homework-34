num1 = int(input ('enter first number: '))
num2 = int(input ("enter second number: "))

print ("num1 is greater then num2 =")
print (num1 > num2)

print ("num2 is greater then num1 =")
print (num2 > num1)

if num1>num2:
    for i in range (num1, num2):
        print (i)
    

else:
    for i in range (num2, num1):
        print (i)
  



