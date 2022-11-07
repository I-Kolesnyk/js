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
