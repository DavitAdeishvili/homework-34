function func(string){
    seen = 0
    for (let i in string){
        for (let x in seen){
            if (x != i){
                return i + ": " + string.count (i)
            }
        }
    }
}