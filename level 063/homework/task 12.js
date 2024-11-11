// Pass or Fail Write a function pass_or_fail that accepts a student's score and returns "Pass" if the score is 50 or above, and "Fail" otherwise.

function pass_or_fail (score){
    if (score < 50){
        console.log ("Fail")
    }
    else {
        console.log ("Score")
    }
}

pass_or_fail (50)
pass_or_fail (1)
pass_or_fail (10000)