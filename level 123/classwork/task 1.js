new Promise((correct, incorrect) => correct("First step completed"))
  .then(data => {
    return new Promise((correct, incorrect) => {
      console.log(data)
      setTimeout(() => {
        if (correct) {
          correct("task 1 complete");
        }
        incorrect("you had 1 task and you failed");
      }, 2000)
    })
}).then(message => console.log(message)).catch(err => console.error(err))