// Задание 1:
 
// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена 
// дней недели. Выведите на экран “Вторник”.

// const obj = {
//     '1': 'Понедельник',
//     '2': 'Вторник',
//     '3': 'Среда',
// };

// console.log(obj[2]);

// 2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
// фамилию, имя и возраст одной строкой.

// const user = {
//     name: "Павел", 
//     surname: "Тарасов", 
//     age: 33,
// };

// console.log(`${user.name} ${user.surname} ${user.age}`);

// const user = {
//     name: "Павел", 
//     surname: "Тарасов", 
//     age: 33,
// };

// console.log(user);

// 3. Добавьте в объект user свойство отчество, которое пользователь должен 
// ввести с клавиатуры.

// const user = {
//     name: "Павел", 
//     secondName: prompt('enter sername: '),
//     surname: "Тарасов", 
//     age: 33,
// };

// console.log(`${user.name} ${user.secondName} ${user.surname} ${user.age}`);

// 4. Удалите свойство surname.

// const user = {
//     name: "Павел", 
//     secondName: prompt('enter sername: '),
//     surname: "Тарасов", 
//     age: 33,
// };

// delete user.surname;
// console.log(`${user.name} ${user.secondName} ${user.surname} ${user.age}`);


// Задание 2:
 
// 1. Создайте два массива: первый с названиями дней недели, а второй - с их 
// порядковыми номерами:

// const arrDay = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arrNum = [1, 2, 3, 4, 5, 6, 7];

// 2. С помощью цикла создайте объект, ключами которого будут названия дней, 
// а значениями - их номера.

// const obj = {};
// for (let i = 0; i < arrDay.length; i++) {
//     obj[arrNum[i]] = arrDay[i];
// }

// console.log(obj);

// 3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и 
// возведите каждый элемент этого объекта в квадрат.

// const obj = {
//     x: 1, 
//     y: 2, 
//     z: 3,
// };

// for (const key in obj) {
// //       x   =     x=1 ** 2    меняем значение в объекте
// //       y   =     y=2 ** 2
// //       z   =     z=3 ** 2
//     obj[key] = obj[key] ** 2;
// }
// console.log(obj);

// невозмоно использовать с объектом  
// obj.forEach(element => {
//     element ** 2;
//     console.log(obj);
// });
