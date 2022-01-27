'use strict'
// Task 1 (4.1) Hello,object

// const user = {
//     name: 'Join',
// }
// console.log (user);
// user.surname = 'Smith';
// console.log (user);
// user.name = 'Pete';
// console.log (user);
// delete user.name;
// console.log (user);


// Task 2 







// Task 3 (4.3) const Object

// const userTwo = {
//     name: 'Anna',
// }
// console.log (userTwo);
// userTwo.name = 'Taras'
// console.log (userTwo);

// the object can be changed

// Task 4 Summ Object

// const salaries = {
//     Join: 100,
//     Ann: 160,
//     Pete: 130,
// salariesSumm () {
//     let sum = this.Ann+this.Join+this.Pete;
//     console.log (`Summ salaries is ${sum}`);
// }
// }
// salaries.salariesSumm ();

// abbreviated version

// const salariesTwo = {
//     Join: 100,
//     Ann: 160,
//     Pete: 130,
// };
// let sum = 0;
// for (let key in salariesTwo) {
//     sum+=salariesTwo[key];
// }
// console.log (sum);

// Task 5 multiply the properties

// const menu = {
//     width: 200,
//     height:300,
//     title: 'My menu',
// };


// Копіювання обєкту

// let user = {
//     name: 'Ivanna',
// }
// let admin = user;

// admin.name = 'Anna';
// console.log (user.name);
// console.log (admin.name);

// Object.assign
// let user = {
//     name: 'Ivanna',
//     age:31,
// };
// Створюємо новий пустий об"єкт
// let clone = {};
// Cкопіюємо всі свойства з user в нього
// for (let key in user) {
//     clone [key]=user [key]
// }
// clone.name = 'salaries';
// console.log (clone);
// console.log (user);


// let flat = {
//     name: 'bedroom',
//     furniture:'mirror',
// };
// let house = {};
// for (let key in flat) {
//     house [key] = flat [key]
// }
// house.name = 'dining room';
// house.furniture = 'table';
// console.log (house);



// Обєднуємо кілька об'єктів в один

// let user = {name: 'Ivan'};
// let permissions1 = {canView:true};
// let permissions2 = {canEdit:true};

// Копіюємо всі свойства в user

// Object.assign (user,permissions1,permissions2);
// console.log (user);


// Ми також можемо використовувати Object.assign для заміни for..in на просте клонування

// let flat = {
//     name : 'living room',
//     furniture: 'bookcase',
// }
// let house = Object.assign ({},flat);
// console.log (house);

// let houseTwo = Object.assign ({},house);
// houseTwo.name = 'kitchen';
// houseTwo.furniture = 'chair';
// console.log (houseTwo);

// let houseThree = Object.assign ({},houseTwo);
// houseThree.name = 'hall';
// houseThree.furniture = 'carpet';
// console.log (houseThree);




// Функція якi є властивістю цього об'єкта називають методом цього об'єкта

// let user = {};
// Спочатку об'являємо
// function sayHi () {
//     console.log ('Hello!');
// }
// user.sayHi = sayHi;
// Потім добавляємо в якості методу
// user.sayHi ();

// Скорочений запис методу
//  user = {
//      sayHi: function () {
//          console.log ('Hello');
//      }
//  };

//  user = {
//      sayHi () {
// console.log ('Hello');
//      }
//  }

// Метод об'єкта потребує доступу до інформації, яка зберігається в обєкті щоб виконати з нею будь -які дії (відповідно
//  до призначення методу)
// Для доступу до інформації в об'єкті метод може використовувати ключове слово this
// Значення this - це обєкт перед точкою, який використовувався для виклику методу


// let user = { name: "Джон" };
// let admin = { name: "Админ" };

// function sayHi() {
//   console.log( this.name );
// }

// используем одну и ту же функцию в двух объектах
// user.f = sayHi;
// admin.f = sayHi;

// вызовы функции, приведённые ниже, имеют разное значение this
// "this" внутри функции является ссылкой на объект, который указан "перед точкой"
// user.f(); 
// Джон  (this == user)
// admin.f(); 
// Админ  (this == admin)

// admin['f']();
 // Админ (неважен способ доступа к методу - через точку или квадратные скобки)

//  let flat = {name:'bedroom'};
//  let house = {name:'living room'};

//  function room () {
//      console.log (this.name);
//  }
// flat.f = room;
// house.f = room;
// flat.f ();
// house.f();


// !!!!!!!!! TASK 1  !!!!!!!
// let user = {
//     name: 'spoon',
//     go: function () {
//         console.log (this.name)
//     }
// }
// user.go ();
// (user.go) ();

// !!!!!!!!! TASK 2 !!!!!!!

let obj,method;
obj = {
    go: function () { console.log (this);}
}
obj.go ();
(obj.go) ();



