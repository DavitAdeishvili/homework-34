// 1) შექმენით საიტი სადაც გექნებათ ერთი ღილაკი. ამ ღილაკზე დაკლიკებისას მომხარებელს უნდა გამოიუტანოთ confirm box-ი. სადაც შეეკითხებით არის თუ არა ის ზრდასრული(18 წელს ზემოთ). თუ მომხარებელი დააჭერს OK-ს გამოუტანეთ ალერტ მესიჯი You are adult, სხვა შემთხვევაში გომუტანეთ, You are kid

function onclick(){
    let something = confirm("Are you older then 18?")
    if (something == true){
        alert("you are already adult")
    }
    else{
        alert("you are just a kid")
    }
}

onclick()