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

const arr =[];

for (let index = 0; index < 5; index++) {
    arr.push(Math.floor(Math.random() * 100));
}
console.log(arr);
console.log(arr.length);
arr.pop();
arr.pop();
console.log(arr);
console.log(arr.length);


