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

// // ** з циклом for of ** \\
// const logins = ['vvvvvvg', 'vbn', 'bnm', 'vbnf'];
// const loginToFind = 'vbnf';
// let message = `Користувач ${loginToFind} не знайдений`;

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Користувач ${loginToFind} знайдений`;
//     break;
//   }
// }
// console.log(message);
// // З методом includes
// const logins = ['vvvvvvg', 'vbn', 'bnm', 'vbnf'];
// const loginToFind = 'vbnf';
// const message = logins.includes(loginToFind)
//   ? `Користувач ${loginToFind} знайдений`
//   : `Користувач ${loginToFind} не знайдений`;
// console.log(message);

// // знайти найменше число в масиві
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];
// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log(smallestNumber);

// Поєднати всі елементи масива в один рядок
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';
// for (const friend of friends) {
//   string += friend + ',';
// }
// string = string.slice(0, string.length - 1);
// console.log(string);

// method join()
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// const string = friends.join(',');
// console.log(string);

// // заміна регістра в рядку на протилежний
// const string = 'JavaScript';
// const letters = string.split('');
// console.log(letters);
// let invertedString = '';

// for (const letter of letters) {
//   // if (letter === letter.toLowerCase()) {
//   //   invertedString += letter.toUpperCase();
//   // } else {
//   //   invertedString += letter.toLowerCase();
//   // }
//   invertedString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }
// console.log(invertedString);

// // зробити slug
// const title = 'Top 10 benefits of React framework';
// // const normalizedTitle = title.toLowerCase();
// // const words = normalizedTitle.split(' ');
// // const slug = words.join('-');
// // console.log(slug);

// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);

// // Порахувати суму елементів двох масивів
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// let total = 0;
// const numbers = array1.concat(array2);
// for (const number of numbers) {
//   total += number;
// }
// console.log(total);

// Метод splice()
// const cards = ['Card-1', 'Card-2', 'Card-3', 'Card-4', 'Card-5'];
// // видалення елементу за індексом, метод indexOf()
// const cardToRemove = 'Card-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);
// cards.splice(index, 1);
// console.table(cards);

// // додавання за індексом
// const cardToInsert = 'Card-6';
// const index = 3;
// cards.splice(index, 0, cardToInsert);
// console.table(cards);

// // оновлення за індексом
// const cardToUpdate = 'Card-4';
// const index = cards.indexOf(cardToUpdate);
// cards.splice(index, 1, 'newCard-4');
// console.table(cards);

// // Знайти спільні елементи масивів

// const array1 = [24, 12, 27, 3];
// const array2 = [12, 8, 3, 36, 27];
// let commonElements = [];

// for (let i = 0; i <= array1.length - 1; i += 1) {
//   console.log(array1[i]);
//   if (array2.includes(array1[i])) {
//     commonElements.push(array1[i]);
//   }
// }
// console.log(commonElements);

// const start = 3;
// const end = 11;
// let evenNumbersArray = [];
// for (let i = start; i <= end; i += 1) {
//   console.log(i);
//   if (i % 2 === 0) {
//     evenNumbersArray.push(i);
//   }
// }
// console.log(evenNumbersArray);

//**  Псевдомасиви **//
// const fn = function () {
//   console.log(arguments);
//   const args = Array.from(arguments);
//   for (const argument of arguments) {
//     console.log(argument);
//   }
// };
// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7, 8);

// const fn = function (...args) {
//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7, 8);

const fn = function (a, b, c, ...args) {
  console.log(`${a} ${b} ${c}`);
  console.log(args);
};

fn('hi', 1, 2, 3);
fn('hello', 1, 2, 3, 4, 5);
fn('good morning', 1, 2, 3, 4, 5, 6, 7, 8);
