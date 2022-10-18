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
//   console.log(`На рахунку залишилось ${differ} кредитів.`);
//   console.log('Знімаємо гроші... Дякуємо за покупку!');
// } else {
//   console.log('На рахунку недостатньо коштів для проведення операції.');
//   console.log('Операція завершена.');
// }

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

const btnAdd = document.querySelector('button[data-add]');
const btnReset = document.querySelector('button[data-reset]');
const dataInput = document.querySelector('input[data-value]');
const output = document.querySelector('p[data-output]');
let total = 0;
btnAdd.addEventListener('click', function () {
  console.log('click Add');
  const value = Number(dataInput.value);
  console.log(value);
  total += value;
  output.textContent = total;
  console.log(total);
});
btnReset.addEventListener('click', function () {
    total = 0;
    output.textContent = 0
})