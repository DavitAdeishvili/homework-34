const myScoreP = document.getElementById("myScore");
const compScoreP = document.getElementById("compScore");
const winsP = document.getElementById("winner");
const btnDiv = document.getElementById("options");
const computerChoiceP = document.getElementById("compPicked");

const compOptions = ["rock", "paper", "scissors"];

let compScore = 0;
let myScore = 0;

function play(e) {
    const btnId = e.target.id;

    const compChoice = compOptions[Math.floor(Math.random() * 3)]
    
    if(btnId === compChoice) {
        winsP.textContent = "Tie!"
    } else if((btnId === "rock" && compChoice === "paper") || (btnId === "paper" && compChoice === "scissors") || (btnId === "scissors " && compChoice === "rock")) {
        compScore++;
        winsP.textContent = "You lost!";
        compScoreP.textContent = "Comp score: " + compScore;
    }
    
    else {
        myScore++;
        winsP.textContent = "You won!";
        myScoreP.textContent = "My score: " + myScore;
    }
    computerChoiceP.textContent = "Computer choice: " + compChoice;
}

btnDiv.addEventListener("click", play);