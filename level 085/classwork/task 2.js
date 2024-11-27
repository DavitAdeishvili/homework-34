const divs = document.querySelectorAll('.div1, .div2, .div3, .div4, .div5');

for (let i = 0; i < divs.length; i++) {
  const div = divs[i];
  const level = i + 1;

  div.addEventListener('click', (event) => {
    if (level % 2 === 0) {
      event.stopPropagation();
    } else {
      console.log(`Level ${level} is odd. Propagation continues.`);
    }
  }, true);
}