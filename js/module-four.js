// реєстрація подій
// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//   console.log('click ' + Date.now());
// };

// buttonRef.addEventListener('click', handleBtnClick);

//геолокація

// const onGetPositionSuccess = function (position) {
//   console.log(position);
// };
// const onGetPositionError = function (error) {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError
// );

// інтервали
// const callback = function () {
//   console.log('after 2 seconds inside callback in timeout');
// };
// console.log('in code before timeout');

// setTimeout(callback, 2000);

//  console.log('in code after timeout');

/* відкладени виклик: http-запит
- API URL: https://...*/
// const onRequestSuccess = function (response) {
//   console.log(response);
// };
// fetch('https://...').then(res => res.json()).then(onRequestSuccess);

// фільтр
// const filter = function (array, test) {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);
//     console.log(test(el));
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }

//   return filteredArray;
// };

// // const callback1 = function (value) {
// //   return value >= 3;
// // };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];
// const getFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 120;
// };

// console.log(filter(fruits, getFruitsWithQuantity));

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     for (const pizza of this.pizzas) {
//       if (pizzaName !== pizza) {
//         onError(
//           `There is no pizza with a name ${pizzaName} in the assortment.`
//         );
//         return;
//       }
//     }
//     onSuccess(pizzaName);
//     return;
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// // pizzaPalace.order('Smoked', makePizza, onOrderError);
// // pizzaPalace.order('Four meats', makePizza, onOrderError);
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// // pizzaPalace.order('Vienna', makePizza, onOrderError);

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//     } else {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
//   // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get emailValue() {
//     return this.email;
//   }

//   set emailValue(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
//   blacklistedEmails;
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true
