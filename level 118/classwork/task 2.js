class card{
    constuctor (pin) {
        this.pin = pin
        if (pin.lenght() === 4){
            return "correct"
        }
        else{
            return "Eather you have sclerosis or it is not your card"
        }
    }

    constructor (withdraw){
        this.withdraw = withdraw
        return "now you have " + money + "$ less on your card"
    }

    constructor (money1){
        this.money1 = money1
        return "now you have " + money + "$ more on your account"
    }
}