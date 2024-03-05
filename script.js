// 1. Создайте массив с элементами 1, 2, 3. 
// Выведите на экран каждый из этих элементов.

// const elements = [1, 2, 3];

// console.log(elements[0]);
// console.log(elements[1]);
// console.log(elements[2]);

// 2. Создайте массив с произвольными элементами. 
// Выведите на экран количество элементов в этом массиве.

// const elements = [1, 4, "text", true];

// console.log(elements.length);

// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента 
// число 1, вместо второго - 2, вместо третьего - 3.

// const elm = ['a', 'b', 'c'];
// console.log(elm);

// elm[0] = 1;
// elm[1] = 2;
// elm[2] = 3;

// console.log(elm);

// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте 
// каждый элемент массива на единицу.

// const elm = [1, 2, 3];
// console.log(elm);

// elm[0]++;
// elm[1]++;
// elm[2]++;

// console.log(elm);

// 2. Узнайте длину следующего массива и объясните почему такое значение:

// ```
// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';

// console.log(arr);
// ```

// 3. Пусть дан такой массив: `[1, 2, 3]`. Добавьте ему в конец элементы 4 и 5.

// const arr = [1, 2, 3];

// arr.push(4);
// arr.push(5);
// arr.push(5, 6, 7, 8,);

// console.log(arr);

// 4. Создайте произвольный массив из 5 элементов, удалите из него два элемента. 
// Проверьте, какое станет значение свойства length после этого.

// const arr =[];

// for (let index = 0; index < 5; index++) {
//     arr.push(Math.floor(Math.random() * 100));
// }
// console.log(arr);
// console.log(arr.length);
// arr.pop();
// arr.pop();
// console.log(arr);
// console.log(arr.length);


// 1. С помощью цикла for выведите в консоль числа от 11 до 33.

// for (let index = 11; index < 33; index++) {
//     console.log(index);
// }

// 2. С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 
// до 100 включительно.

// for (let index = 1; index < 101; index++) {
//     if (index % 2 !== 0) {
//         console.log(index);
//     } 
// }

// 2 вариант
// for (let index = 1; index < 101; index += 2) {
//     console.log(index);
// }

// 3. С помощью цикла for выведите в консоль числа от 100 до 0.

// for (let index = 100; index > 0; index--) {
//     console.log(index);
// }

// 4. Создать переменную с заданным числом. Умножайте число на 3 столько раз, 
// пока результат умножения не станет больше 1000. Какое число получится? 
// Посчитайте количество итераций, необходимых для этого.

// const num = 105;
// let count = 0;

// for (let index = num; index <= 1000; index *= 3) {
//     // console.log(index);
//     count++;
// }
// console.log(count);