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

// const fn = function (a, b, c, ...args) {
//   console.log(`${a} ${b} ${c}`);
//   console.log(args);
// };

// fn('hi', 1, 2, 3);
// fn('hello', 1, 2, 3, 4, 5);
// fn('good morning', 1, 2, 3, 4, 5, 6, 7, 8);

// const add = function (...args) {
//   console.log(args);
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));

// const filterNumbers = function (array, ...args) {
//   const commonElements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       commonElements.push(element);
//     }
//   }

//   return commonElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));

// // ** Задачі з семінару **
// // 1. Створіть масив genres з елементами "Jazz" та "Blues".
// let genres = ['Jazz', 'Blues'];
// // Додайте «Рок-н-рол» до кінця.
// genres.push('Рок-н-рол');
// // Виведіть у консоль перший елемент масиву.
// console.log(genres[0]);
// // Виведіть останній елемент масиву в консоль. Код повинен працювати для масиву довільної довжини.
// console.log(genres[genres.length - 1]);
// // Видаліть перший елемент та виведіть його в консоль.
// console.log(genres.shift());
// // Вставте «Country» та «Reggae» на початок масиву.
// genres.splice(0, 0, 'Country', 'Reggae');
// console.log(genres);

// // 2. Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.
// const values = '8 11';
// const sides = values.split(' ');
// console.log(sides);
// const area = sides[0] * sides[1];
// console.log(area);

// // 3. Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів має починатися з 1.
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i <= fruits.length - 1; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// // 4. Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.
// const names = 'Jacob, William, Solomon, Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArray = names.split(', ');
// const phonesArray = phones.split(',');

// for (let i = 0; i <= namesArray.length - 1; i += 1) {
//   console.log(`${namesArray[i]} - ${phonesArray[i]}`);
// }

// // 5. Напиши скрипт який виводить у консоль усі слова рядка окрім першого та останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.
// const string = 'Welcome to the future';
// let array = string.split(' ');

// array = array.slice(1, array.length - 1);
// const newString = array.join(' ');

// console.log(newString);

// // 6. Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить її в консоль.
// const string = 'Welcome to the future';
// let reverseString = '';

// for (let i = string.length - 1; i >= 0; i -= 1) {
//   reverseString += string[i];
// }
// console.log(reverseString);

// // 7. Напиши скрипт сортування масиву
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// langs.sort();
// console.log(langs);

// // 8.Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
// const numbers = [2, 17, 94, 1, 23, 37];
// let min;

// for (let i = 0; i <= numbers.length - 1; i += 1) {
//   min = numbers[0];

//   if (min > numbers[i]) {
//     min = numbers[i];
//     console.log(min);
//   }
// }

// //2. Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//Рядок у форматі годин і хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// Отримайте кількість хвилин -

// Візіміть ціле від ділення на 60, це кількість годин

// Обробіть години так щоб відповідали формату

// Візіміть залишок від ділення на 60, це кількість хвилин

// Обробіть хвилини так щоб відповідали формату

// Вивести результат
// const time = +prompt('enter minutes number');
// let hours = Math.floor(time / 60);
// let modifyHour = String(hours).padStart(2, 0);

// let minute = Number(time) % 60;
// let modifiedMinutes = String(minute).padStart(2, 0);

// console.log(`${modifyHour}:${modifiedMinutes}`);
// 64;

//5. Напишіть код, який запитуватиме
//   Логін за допомогою prompt і логувати результат
//   В консоль браузера

// Якщо відвідувач вводить "admin",
// то наступний prompt запитує пароль,
// інакше (нічого не ввели або натиснута клавіша Esc) вивести рядок "Я вас не знаю".

// Якщо на запит паролю нічого не ввели або натиснута клавіша Esc
// Вивести рядок "Скасовано"

// Пароль перевіряти так:
// Якщо введено пароль "password",
// то вивести рядок "Здрастуйте!"
// інакше виводити рядок "Невірний пароль!"

// const loginAsk = prompt('Введіть логін');
// if (loginAsk === 'admin') {
//   let passwordAsk = prompt('Введіть пароль?');
//   if (passwordAsk) {
//     if (passwordAsk === 'password') {
//       alert('Здрастуйте!');
//     } else {
//       alert('Невірний пароль!');
//     }
//   } else {
//     alert('Скасовано');
//   }
// } else {
//   alert('Я вас не знаю');
// }

//7. Напишіть цикл, який пропонує ввести
//   число більше 100 через prompt.
//   Якщо відвідувач ввів інше число - попросити
//   Ввести ще раз і так далі.
//   Цикл повинен запитувати число, поки відвідувач не
//   введе число більше 100, або натисне кнопку
//   Скасування в prompt

// while vs do..while
// let number = +prompt('Введіть число більше 100');
// while (number < 0 || (number > 0 && number < 100)) {
//   number = +prompt('Введіть число більше 100');
// }
// console.log(number);

// Модуль 2, заняття 2
// 1. Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.
// Індекс маси тіла необхідно округлити до однієї цифри після коми;
// const askedWeight = +prompt('Введіть масу в кілограмах');
// const askedHeight = +prompt('Введіть зріст в метрах');
// function calcBMI(askedWeight, asledHeight) {
//   const BMI = askedWeight / Math.pow(askedHeight, 2);
//   return BMI.toFixed(1);
// }
// console.log(calcBMI(askedWeight, askedHeight));

// 9. Example 9 - Колекція курсів (includes, indexOf, push і т.д.)
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс з колекції
// updateCourse(oldName, newName) - змінює ім'я на нове
// ``js const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// addCourse('Express'); console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express'] addCourse('CSS'); // 'У вас вже є такий курс'

// removeCourse('React'); console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express'] removeCourse('Vue'); // 'Курс з таким іменем не знайдено'

// updateCourse('Express', 'NestJS'); console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS'] `
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// const addCourse = function (name) {
//   if (courses.includes(name)) {
//     console.log('У вас вже є такий курс');
//     return;
//   }

//   courses.push(name);
//   return console.log(courses);
// };
// addCourse('ff');

// const removeCourse = function (name) {
//   const index = courses.indexOf(name);

//   if (index === -1) {
//     console.log('Курс з таким іменем не знайдено');
//     return;
//   }

//   const deletedCourse = courses.splice(index, 1);
//   return console.log(courses, deletedCourse);
// };
// removeCourse('React');

// const updateCourse = function (oldName, newName) {
//   const index = courses.indexOf(oldName);

//   if (index === -1) {
//     console.log('Курс з таким іменем не знайдено');
//     return;
//   }
//   // courses[index] = newName;
//   courses.splice(index, 1, newName);
//   console.log(courses);
// };
// updateCourse('React', 'NestJS');

// // 2. Напиши функцію min(a,b), яка повертає менше з чисел a та b.

// const min = function(a,b) {
//     if(a > b) {
//         return b;
//     } else return a;
// }

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// 3. Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядки. Значення гарантовано розділені пробілом.
// function getRectArea(dimensions) {}

// console.log(getRectArea('8 11'));
