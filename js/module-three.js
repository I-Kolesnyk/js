// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     }
//   };

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   const values = [];
//   for (const product of products) {
//     const keys = Object.keys(product);

//     for (const key of keys) {
//       if (key === propName) {
//         values.push(product[propName]);
//       }
//     }
//   }
//   return values;
// }

// // корзина продуктів
// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };
//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i <= this.items.length - 1; i += 1) {
//       const { name } = items[i];

//       if (productName === name) {
//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity += 1;
//         return;
//       }
//       return;
//     }
//   },
//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity -= 1;
//         return;
//       }
//       return;
//     }
//   },
// };

// cart.add({ name: apple, price: 50 });

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line

//   const newData = {
//     category: category,
//     priority: priority,
//     completed: completed,
//     ...data,
//   };
//   return newData; // Change code above this line
// }

// console.log(makeTask({ category: 'Finance', text: 'Take interest' }));
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     this.books;
//     const index = this.books.indexOf(oldName);
//     console.log(index);
//     this.books.splice(index, 1, newName);
//     console.log(this.books);

//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));

// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//       for (let i = 0; i <= this.potions.length - 1; i += 1) {
//         if (this.potions[i].name === newPotion.name) {
//           return `Error! Potion ${newPotion} is already in your inventory!`;
//         }
//         this.potions.push(i, 1);
//       }
//     },
//     removePotion(potionName) {
//       for (let i = 0; i <= this.potions.length - 1; i += 1) {
//         if (this.potions[i].name === potionName) {
//           this.potions.splice(i, 1);
//         }
//       }
//       return `Potion ${potionName} is not in inventory!`;
//     },
//     updatePotionName(oldName, newName) {
//       for (let i = 0; i <= this.potions.length - 1; i += 1) {
//         if (this.potions[i].name === oldName) {
//           this.potions[i].name = newName;
//         }
//       }
//       return `Potion ${oldName} is not in inventory!`;
//     },
//     // Change code above this line
//   };

// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {
//       for (let i = 0; i <= this.potions.length - 1; i += 1) {
//         if (this.potions[i].name === newPotion.name) {
//           return `Error! Potion ${newPotion.name} is already in your inventory!`;
//         }

//       }
//       this.potions.push(newPotion);
//       return this.potions;
//       //   const keys1 = Object.keys(potion);
//       //   const keys2 = Object.keys(newPotion);
//       //   const values1 = Object.values(potion);
//       //   const values2 = Object.values(newPotion);
//       //   const props1 = [...keys1, ...values1].toString();
//       //   const props2 = [...keys2, ...values2].toString();

//       //   if (potion.name === newPotion.name) {
//       //     return `Error! Potion ${potion.name} is already in your inventory!`;
//       //   }
//       //   if (props1 !== props2) {
//       //     this.potions.push(newPotion);
//       //   }
//       // }
//     },
//     removePotion(potionName) {
//       for (let i = 0; i <= this.potions.length - 1; i += 1) {
//         if (this.potions[i].name === potionName) {
//           this.potions.splice(i, 1);
//         }
//       }
//       return `Potion ${potionName} is not in inventory!`;
//     },
//     updatePotionName(oldName, newName) {
//       for (let i = 0; i <= this.potions.length - 1; i += 1) {
//         if (this.potions[i].name === oldName) {
//           this.potions[i].name = newName;
//         }
//       }
//       return `Potion ${oldName} is not in inventory!`;
//     },
//     // Change code above this line
//   };
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));

// const Types = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };
// const account = {
//   balance: 0,
//   transactions: [],
//   createTransaction(amount, type) {
//     return {
//       amount,
//       type,
//       id: this.transactions.length,
//     };
//   },
//   deposit(amount) {
//     amount = Math.abs(amount);
//     this.balance += amount;

//     const newTransaction = this.createTransaction(amount, Types.DEPOSIT);
//     this.transactions.push(newTransaction);
//   },
//   withdraw(amount) {
//     amount = Math.abs(amount);
//     const newTransaction = this.createTransaction(amount, Types.WITHDRAW);

//     if (amount > this.balance) {
//       console.log('not enough money');
//       return;
//     }
//     this.balance -= amount;
//     this.transactions.push(newTransaction);
//   },
//   getBalance() {
//     return this.balance;
//   },
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (id === transaction.id) {
//         return transaction;
//       }
//     }
//   },
//   getTransactionTotal(type) {
//     let result = 0;

//     for (const transaction of this.transactions) {
//       if (type === transaction.type) {
//         return (result += transaction.amount);
//       }
//     }
//   },
// };
