# ფუნქცია რომრლდაც გადაეცემა სამი არგუმენტი (რიცხვი , მეორე რიცხვი, მათემატიკური სიმბოლო (მიმატება, გამრავლება, გამოკლება, გაყოფა) და აბრუნებს შესაბამის შედეგს თუ არ იყოფა ორი რიცხხვი ან არ არის შესაბამისი არგუმენტები გადმოცემული გამოიტანოს ერორი

def math (num1, num2, operation):
    if operation == "+":
        return num1 + num2
    elif operation == "-":
        return num1 - num2
    elif operation == "*":
        return num1 * num2
    elif operation == "/":
        if num1 % num2 == 0:
            return num1 / num2
        else:
            return SyntaxError
    else:
        return SyntaxError


print (math(1, 9, "-" ))   # it will return -8
print (math(1, 9, "+" ))   # it will return 10
print (math(1, 9, "*" ))   # it will return 9
print (math(1, "d", "+" )) # it will return erorr
print (math(1, 9, "/" ))   # it will return error