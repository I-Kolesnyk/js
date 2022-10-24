// const numbers = [1, 2, 3, 4, 5];
// const value = 3;
// let newArray = [];
// for (let i = 0; i <= numbers.length - 1; i += 1) {
//   //   console.log(i, typeof i, numbers[i]);
//   if (numbers[i] > value) {
//     console.log(numbers[i]);
//     newArray.push(numbers[i]);
//     console.log(newArray);
//   } else null;
// }

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// const fruit = 'Plum';

// let check;
// for (let i = 0; i <= fruits.length - 1; i += 1) {
//   //   console.log(i);
//   if (fruits.includes(fruits[i])) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// // Порахувати суму всіх чисел
// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;
// for (let i = 0; i <= cart.length - 1; i += 1) {
//   total += cart[i];
// }
// // або коротший запис
// for (const value of cart) {
//   total += value;
// }
// console.log(total);
// // додати зміни в масив
// for (let i = 0; i <= cart.length - 1; i += 1) {
//   cart[i] = Math.round(cart[i] * 1, 1);
// }
// console.log(cart);

// // порахувати суму усіх парних чисел в масиві
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// for (let i = 0; i <= numbers.length - 1; i += 1) {
//   if (numbers[i] % 2 === 0) {
//     total += numbers[i];
//   }
// }
// console.log(total);

// ** Пошук логіна ** \\
// const logins = ['vvvvvvg', 'vbn', 'bnm', 'vbnf'];
// const loginToFind = 'vbnf';
// let message = '';

// for (let i = 0; i <= logins.length - 1; i += 1) {
//   if (logins[i] === loginToFind) {
//     message = `Користувач ${loginToFind} знайдений`;
//     break;
//   }
//   message = `Користувач ${loginToFind} не знайдений`;
// }
// console.log(message);

// ** Логіка від зворотнього ** \\
// const logins = ['vvvvvvg', 'vbn', 'bnm', 'vbnf'];
// const loginToFind = 'vbnf';
// let message = `Користувач ${loginToFind} не знайдений`;

// for (let i = 0; i <= logins.length - 1; i += 1) {
//   if (logins[i] === loginToFind) {
//     message = `Користувач ${loginToFind} знайдений`;
//     break;
//   }
// }
// console.log(message);

// ** з циклом for of ** \\
const logins = ['vvvvvvg', 'vbn', 'bnm', 'vbnf'];
const loginToFind = 'vbnf';
let message = `Користувач ${loginToFind} не знайдений`;

for (const login of logins) {
  if (login === loginToFind) {
    message = `Користувач ${loginToFind} знайдений`;
    break;
  }
}
console.log(message);
