new Promise((resolve, reject) => {
    reject("Task 2 failed");
}).catch(err => console.error(err));  