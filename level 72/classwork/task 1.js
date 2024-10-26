const p = document.getElementById ("time1-text")
let time1 = 20;

const time2 = setInterval (function() {
    p.textContent = time1
    time1--;
    
    console.log (time1)

    console.log (time1, "second left");
    if (time1 < 0){
        p.textContent ("time is over")
        clearInterval(time2);
    }
},1000)