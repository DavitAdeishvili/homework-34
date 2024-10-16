// 1) შექმენით კონსტრუქტორი, რომელსაც ექნება 5 პარამტერი, ამ კონსტრუქტორის დახმარებით შექმენით 5 სხვადასხვა ობიექტი, კომენტარებით ახსენით რა არის კონსტრუქტორი და რას აკეთებს new კეივორდი. (კომენტარები აუცილებელია)

function Person(firstname, lastname, sisters, brothers, isWorking){
    this.firstname = firstname;
    this.lastname = lastname;
    this.sisters = sisters;
    this.brothers = brothers;
    this.isWorking = isWorking;
}

// new - ახალი - ეს keyword ქმნის ახალ ცარიელ ობიექტს

const person1 = new Person("Luka", "Tskhvaradze", 2, 0, true);