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

// let obj,method;
// obj = {
//     go: function () { console.log (this);}
// }
// obj.go ();
// (obj.go) ();

// f = obj.go;
// f();


// !!!!!!!!! TASK 3 !!!!!!!

// function makeUser () {
//     return {
//         name: 'Anna',
//         ref () {
//              return this;
//     }
// };
// };
// let user = makeUser ();
// console.log(user.ref().name);


// Task 4

// let calculator = {
//     read (a,b) {
// this.a = a;
// this.b = b;
// console.log (this.a,this.b)
//     },
//     sum () {
//      return this.a + this.b
//     },
//     mul () {
//       return this.a*this.b
//     }
//   };
  
//   calculator.read(10,15);
//   console.log( calculator.sum() );
//   console.log( calculator.mul() );

// Task 5

// let ladder = {
//   step:0,
//   up () {
//     this.step++;
//     return this;
//   },
//   down () {
//     this.step--;
//     return this;
//   },
//   showStep: function() {
// console.log (this.step);
//   }
// }
// ladder.up().up().down().showStep();

// const ivanna = {
//   name:'freeser',
//   guarantee: '14 day',
//   showInfo () {
//     console.log ('Samsung')
//   },
// }

// console.log (ivanna);

// for (let key in ivanna) {
  // console.log (key,ivanna[key])
// }
// const anna = {};

// for (let key in ivanna) {
//   anna[key] = ivanna [key];
// }
// console.log (anna);

// let wardrobe ={};
// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }
// console.log (isEmpty())


// function isEmpty(obj) {
//   for (let key in obj) {
//     // если тело цикла начнет выполняться - значит в объекте есть свойства
//     return false;
//   }
//   return true;
// }
// isEmpty(ivanna);


// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   for (let key in menu) {
//     if (typeof menu[key] === 'number' ) {
//       menu[key]*=2;
//     }
//   }
//   console.log (menu);
// }

// multiplyNumeric (menu);

// Конструктори,створення об'єктів через 'new'

// Функції конструктори є стандартними функціями 
// але є дві умови:
// 1. Ім'я функції має починатися з великої літери.
// 2. Функція -конструктор повинна викликатись за допомогою оператора 'new'

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User ('Anna');
// console.log (user.name);



  function Calculator() {
      this.read = function (a,b) {
  this.a = a;
  this.b = b;
  console.log (this.a,this.b)
      },
      this.sum = function () {
       return +this.a + +this.b
      },
      this.mul = function () {
        return this.a*this.b
      }
    };
    
let  calculator = new Calculator ();
calculator.read (10,2);
calculator.sum ();
