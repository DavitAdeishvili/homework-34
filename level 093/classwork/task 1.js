let counter = 0;
let resetCount = 0;
const counterDisplay = document.querySelector(".paragraph");
const addInput = document.querySelector("input[type='add']");
const subtractInput = document.querySelector("input[type='menus']");
const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".menus");

plusButton.addEventListener("click", () => {
    counter += 1;
    updateCounter();
});

minusButton.addEventListener("click", () => {
    counter -= 1;
    
    if (counter < 0) {
        alert("Counter cannot go below 0.");
        counter = 0;
    }
    
    updateCounter();
});

function updateCounter() {
    counterDisplay.textContent = counter;
}

function resetCounter() {
    if (counter === 0) {
        resetCount++;
        if (resetCount > 1) {
            alert("You cannot reset more than once when the counter is at 0.");
            return;
        }
    }
    counter = 0;
    updateCounter();
}

document.querySelector("body").addEventListener("dblclick", resetCounter); 