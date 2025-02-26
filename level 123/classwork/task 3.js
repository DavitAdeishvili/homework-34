new Promise((resolve, reject) => {resolve(5)}).then(number => {
    return number * 2;
  }).then(doubledNumber => {
      console.log(doubledNumber)
}).catch(err => console.error(err));