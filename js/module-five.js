// Example 4 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };
//   constructor(items = []) {
//     this.items = items;
//     this.priority;
//   }
//   addNote(note) {
//     this.items.push(note);
//   }
//   removeNote(text) {
//     this.items.filter(item => item.text !== text);
//   }
//   // if (this.items.includes(text)) {
//   //   const ind = this.items.indexOf(text);
//   //   console.log(ind);
//   //   this.items.splice(ind, 1);
//   // }

//   //   updatePriority(text, newPriority) {
//   //     if (this.items.includes(text)) {
//   //       priority = newPriority;
//   //     }
//   //   }
// }
// // Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// // class Notes{
// //     static Priority = {
// //           LOW: 'low',
// //           NORMAL: 'normal',
// //           HIGH: 'high'
// //         }
// //         constructor(arr){
// //             this.items = arr;

// //         }
// //         addNote(note){

// //         }
// // }
// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя друга замітка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя перша замітка');
// console.log(myNotes.items);

// // myNotes.updatePriority('Моя друга замітка', Notes.Priority.HIGH);
// // console.log(myNotes.items);

// Example 5 - Toggle
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.
// class Toggle {
//   constructor({ isOpen } = false) {
//     this.on = isOpen;
//   }
// }
// const firstToggle = new Toggle({ isOpen: true });
// console.log(firstToggle);
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');

// -----------------------------------------TASK 1------------------------------------------//
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета
// 3 Створити метод об'єкту який буде виводити ім'я факультету в якого більше очків

const hogvarts = {
  griffindor: [
    {
      name: 'Harry',
      points: 17,
    },
    {
      name: 'Hermiona',
      points: 19,
    },
    {
      name: 'Ron',
      points: 14,
    },
  ],
  sliserin: [
    {
      name: 'Draco',
      points: 17,
    },
    {
      name: 'Goyl',
      points: 14,
    },
    {
      name: 'Crabbe',
      points: 5,
    },
  ],
  getListOfFaculty(faculty) {
    return this[faculty].map(student => student.name);
  },

  getFacultyPoints(faculty) {
    return this[faculty].reduce(
      (initialValue, student) => (initialValue += student.points),
      0
    );
  },

  getFacultyWithMorePoints() {
    return this.getFacultyPoints('griffindor') >
      this.getFacultyPoints('sliserin')
      ? 'griffindor'
      : 'sliserin';
  },
};

console.log(hogvarts.getListOfFaculty('sliserin'));
console.log(hogvarts.getFacultyPoints('griffindor'));
console.log(hogvarts.getFacultyWithMorePoints());
