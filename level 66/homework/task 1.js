// Easy
// დავალება NUM 1: შექმენი ფუნქცია, რომელიც მიიღებს რიცხვს და პირობით შეამოწმებს, არის თუ არა ის კენტი ან ლუწი.
// დავალება NUM 2: შექმენი პირობა, რომელიც შეამოწმებს, არის თუ არა სია ცარიელი და თუ არა, იპოვოს რიცხვების ჯამი.
// დავალება NUM 3: შექმენი ფუნქცია, რომელიც მიიღებს რიცხვების სიას, გაამრავლებს ყველა რიცხვს 3-ზე და დაიბრუნებს მხოლოდ იმ რიცხვებს, 
// რომლებიც 20-ზე მეტია.


// 1

function oddOrEven (num){
    if (num % 2 == 0){
        return 'odd'
    }else{
        return 'even'
    }
}

// 2

function sum(list1){
    let sum = 0
    if (list1.length == 0){
        return 0
    }else{
        for (i in list1){
            sum = sum + i
            return sum
        }
    }
}

// 3

function something (list1){
    let list2 = []
    for (i in list1){
        i = i * 3
        if (i > 20){
            list2.push(i)
            return list2
        }
    }
}