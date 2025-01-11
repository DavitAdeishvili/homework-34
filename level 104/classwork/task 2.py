def multiply_numbers():
    while True:
        try:
            num1 = float(input("შეიყვანეთ პირველი რიცხვი: "))
            num2 = float(input("შეიყვანეთ მეორე რიცხვი: "))
            result = num1 * num2
            print(f"ნამრავლი: {result}")
        except ValueError:
            print("გთხოვთ, შეიყვანეთ სწორი რიცხვი.")
            continue
        user_input = input("თუ გსურთ პროგრამის დახურვა, შეიყვანეთ 'exit', სხვა შემთხვევაში დააჭირეთ Enter: ").strip().lower()
        if user_input == 'exit':
            print("პროგრამა დასრულდა. ნახვამდის!")
            break

multiply_numbers()