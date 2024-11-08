#task 1

name = input ("please enter your name: ")
Name = name. capitalize ()
print (Name)


#task 2

First_name = input ("please enter your name: ")
First_Name = First_name. upper ()
print (First_Name)


#task 3

#Capitalize makes first letter of string in uppercase, while upper makes whole sting in uppercase

#the difference between method and function is that the method is right for the concrete situations while finction is right for every situatuions.

#task 4

sentence = "my name is David and I study in GOA"
count1 = sentence. count ("y")
print (count1)

#task 5

NAME = input ("please enter your name with uppercase: ")
NAMe = NAME. lower ()
print (NAMe)

#task 6

#count method works on stings and it counts spesefic choosen letter in the strind (also you can only choose one string )
#lower method also work on the string and makes uppercase to lowercase
#sting is some words, numbers or something else surounded by quatation marks ("like this")

#task 7

sentence1 = "my name is David Adeishvili"
index1 = sentence1. index ("n")
print (index1)

sentence2 = "my name is David Adeishvili"
find1 = sentence2. find ("n")
print (find1)

#differnce between them is that if you tell program index (and the letter that is not here) then its gonna show error and if you do same in find its gonna show -1

#task 8

emails = []

count = int(input("Please enter how many emails do you want to input: "))

for i in range(count):
    email = input("Please enter email: ")

    if email.endswith("@gmail.com"):
        emails.append(email)
        print("Email was correct")
    else:
        print("Invalid email")


print(emails)

#startwith tells us what is sentence starting with
#endwith tells us what is sentence starting with
