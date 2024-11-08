#vending machine program

def print_products(products):
    count = 1
    for product in products:
        print(count, product)
        count = count + 1

def get_product(choice, products):
    return products[choice]

def check_products(choice, products):
    choice = choice - 1
    if choice >= 0 and choice < len(products):
        return choice

def vending_machine(products):
    print_products(products)

    choice = int(input("Please enter choice: "))

    choice = check_products(choice, products)

    result = get_product(choice, products)

    return result


print(vending_machine(["Cola 2.00", "Borjomi 5.00", "Snickers 3.00", "Pomidori"]))


#task 1

def add (num1, num2):
    print (num1 + num2)

add(1,2)

#task 2

def calculate(num1,num2):
     print ("1. *")
     print ("2. /")
     print ("3. +")
     print ("4. -")
     input ("please choose which one you want to happen:")
     if "*" :
        print (num1 * num2)
     elif "/":
         print (num1 / num2)
     elif "+":
         print (num1 + num2)
     else:
         print (num1 - num2)

calculate (5, 10)

# task 3
    
def str_to_list (str1, str2):
    print ([str1, str2])

str_to_list ("David", "Adeishvili")