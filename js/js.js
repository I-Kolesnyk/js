// let enteredNumber = prompt(`Enter number`);
// enteredNumber = Number(enteredNumber);
// let enteredBase = prompt(`Enter base`);
// enteredBase = Number(enteredBase);
// const power = enteredNumber ** enteredBase;
// console.log(power);

// Math.random() * (max - min) + min
let max = 80;
let min = 20;
const result = Math.random() * (max - min) + min;
console.log(Math.round(result));

//background color changing
const colors = ['tomato', 'teal', 'orange', 'pink'];
const maximum = colors.length - 1;
const minimum = 0;
const bcgColor = Math.round(Math.random() * (maximum - minimum) + minimum);
// console.log(bcgColor);
const color = colors[bcgColor];
console.log(color);
document.body.style.backgroundColor = color;
