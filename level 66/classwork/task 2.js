//დავალება: for-ლუპის დახმარებით ჩაწერეთ ლისტში 1-დან 30-მდე რიცხვები, და შემდეგ შექმენით ახალი ლისტი სადაც ჩაწერთ იმ ლისტში მყოფ რიცხვებიდან მარტო ლუწ რიცხვებს

for (let i = 1; i < 30; i++){
    list1 = i;
    list2 = [];
    if (i % 2 == 1){
        list2.push(i)
    }
    console.log(list2)
}