// let enteredNumber = prompt(`Enter number`);
// enteredNumber = Number(enteredNumber);
// let enteredBase = prompt(`Enter base`);
// enteredBase = Number(enteredBase);
// const power = enteredNumber ** enteredBase;
// console.log(power);

// // Math.random() * (max - min) + min
// let max = 80;
// let min = 20;
// const result = Math.random() * (max - min) + min;
// console.log(Math.round(result));

// //background color changing
// const colors = ['tomato', 'teal', 'orange', 'pink'];
// const maximum = colors.length - 1;
// const minimum = 0;
// const bcgColor = Math.round(Math.random() * (maximum - minimum) + minimum);
// // console.log(bcgColor);
// const color = colors[bcgColor];
// console.log(color);
// document.body.style.backgroundColor = color;

// let x = 'Iryna';
// let y = 'Kolesnyk';
// let z = 1;
// let q = 215;
// console.log(`Гість ${x} ${y} селиться в ${z} номер ${q}`);

// const x = 10;
// const y = 30;
// const number = 25;
// console.log(number > x && number < y);
// console.log(number < x || number > y);

// // чат з другом
// const isOnline = true;
// const isFriend = true;
// const isNotDisturb = false;

// const canOpenChat = isOnline && isFriend && !isNotDisturb;
// console.log('Можна відкрити чат?', canOpenChat);

// // перевірка підписка користувача
// const subscription = 'pro';
// const canAccessContent = subscription === 'pro' || subscription === 'vip';
// console.log('Є доступ до контенту?', canAccessContent);

// //оператор розгалуження
// const salary = 1000;
// if (salary <= 500) {
//   console.log('Level 1');
// } else if (salary > 500 && salary <= 1500) {
//   console.log('Level 2');
// } else if (salary > 1500 && salary <= 3000) {
//   console.log('Level 3');
// } else {
//   console.log('Level 4');
// }

// const balance = 1000;
// let message;
// if (balance >= 0) {
//   message = 'Positive balance';
// } else {
//   message = 'Negative balance';
// }
// console.log(message);

// //тернарний оператор
// const balance = 1000;
// const message = balance >= 0 ? 'Positive balance' : 'Negative balance';
// console.log(message);

// //Перевірка платоспроможності
// let balance = 10000;
// const payment = 2000;

// console.log(
//   `Загальна сума замовлення ${payment} кредитів. Перевіряємо кількість доступних коштів на рахунку.`
// );
// if (payment <= balance) {
//   balance -= payment;
//   console.log(`На рахунку залишилось ${balance} кредитів.`);
//   console.log('Знімаємо гроші... Дякуємо за покупку!');
// } else {
//   console.log('На рахунку недостатньо коштів для проведення операції.');
// }
// console.log('Операція завершена.');

// // Розрахунок знижки
// const totalSpent = 2000;
// let payment = 4000;
// let discount = 0;

// if (payment >= 100 && payment < 1000) {
//   discount = 0.02;
//   console.log(
//     `Оформлюємо замовлення на суму ${payment} зі знижкою ${discount * 100}%`
//   );
// } else if (payment >= 1000 && payment < 5000) {
//   discount = 0.05;
//   console.log(
//     `Оформлюємо замовлення на суму ${payment} зі знижкою ${discount * 100}%`
//   );
// } else if (payment >= 5000) {
//   discount = 0.1;
//   console.log(
//     `Оформлюємо замовлення на суму ${payment} зі знижкою ${discount * 100}%`
//   );
// } else {
//   console.log(`У вас ще немає партнерської знижки`);
// }

// const btnAdd = document.querySelector('button[data-add]');
// const btnReset = document.querySelector('button[data-reset]');
// const dataInput = document.querySelector('input[data-value]');
// const output = document.querySelector('p[data-output]');
// let total = 0;
// btnAdd.addEventListener('click', function () {
//   console.log('click Add');
//   const value = Number(dataInput.value);
//   console.log(value);
//   total += value;
//   output.textContent = total;
//   console.log(total);
// });
// btnReset.addEventListener('click', function () {
//     total = 0;
//     output.textContent = 0
// })

// const stars = 4;
// let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('There is no such value');
// }
// console.log(price);

// switch (stars) {
//   case 1:
//     price = 20;
//     break;
//   case 2:
//     price = 30;
//     break;
//   case 3:
//     price = 50;
//     break;
//   case 4:
//     price = 70;
//     break;
//   case 5:
//     price = 120;
//     break;
//   default:
//     console.log('There is no such value');
// }

// const stars = 5;
// let price;

// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 30;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('There is no such value');
// }
// console.log(price);

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 30;
//     break;

//   case 5:
//     price = 120;
//     break;
//   default:
//     console.log('There is no such value');
// }

// const option = 3;
// switch (option) {
//   case 1:
//     console.log('Ви можете забрати товар завтра з 12.00 у нашому офісі');
//     break;
//   case 2:
//     console.log('Курєр доставить заказ завтра з 9.00 до 18.00');
//     break;
//   case 3:
//     console.log('Замовлення буде відправлене сегодні');
//     break;
//   default:
//     console.log('Вам передзвонить менеджер');
// }

// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }
// console.log('nmgh');

// const employees = 10;
// let totalSalary = 0;
// const minSalary = 500;
// const maxSalary = 5000;

// for (let i = 1; i < employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary
//   );
//   console.log(`Salary of employee #${i} is ${salary}`);
//   totalSalary += salary;
// }
// console.log(`Total salary is ${totalSalary}`);

// const min = 6;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     console.log('odd', i);
//     continue;
//   }
//   console.log('even', i);
//   total += i;
// }
// console.log('total:', total);

// function getExtremeElements(array) {
//   // Change code below this line
//   const firstElement = array.slice(0, 1);
//   const lastElement = array.slice(-1);
//   const newArray = firstElement.concat(lastElement);
//   console.log(newArray);
//   // Change code above this line
// }
// function splitMessage(message, delimiter) {
//   let words;
//   message = 'Mango hurries to the train';
//   // Change code below this line
//   words = message.split(' ');
//   // Change code above this line
//   console.log(words);
// }
// let message = 'Mango hurries to the train';
// let words = message.split(' ');
// console.log(words);

// let message = 'JavaScript is in my blood';
// const pricePerWord = 10;
// let words = message.split(' ');
// console.log(words);
// const length = words.length;
// console.log(length);
// const price = length * pricePerWord;
// console.log(price);

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }
// const number = 3;
// let sum = 0;
// for (let i = 1; i <= number; i += 1) {
//   console.log((sum += i));
// }

// let total = 0;
// const order = [12, 85, 37, 4];
// for (let i = 0; i < order.length; i += 1) {
//   console.log(order[i]);
//   const orderToNumber = Number(order[i]);

//   total += orderToNumber;
// }
// console.log(total);
