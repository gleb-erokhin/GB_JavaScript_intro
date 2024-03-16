"use strict";

/*
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна
фотография, используя метод filter. Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене,
начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести
отсортированный массив в консоль.
Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/

const products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

// обращение к элементам массива по ключам, для понимания работы кода
console.log(products[1].id);
console.log(products[1].price);
console.log(products[1].photos);

// выводим массив с ключами где есть фото
// const sortFilter = products.filter(function (item) {
//   // Смотрим есть ли photos - как ключ ,если да то нужны те, у которых длина больше 0)
//   return "photos" in item && item.photos.length > 0;
// });

// тоже самое с использованием стрелочной функции
const sortFilter = products.filter((item) => {
  // Смотрим есть ли photos - как ключ ,если да то нужны те, у которых длина больше 0)
  return "photos" in item && item.photos.length > 0;
});

console.log('Filter')
console.log(sortFilter);

// выводим массив отсортированный по цене, с возрастанием цены.
products.sort(function (priceOne, priceTwo) {
  return priceOne.price - priceTwo.price;
});

console.log('sort')
console.log(products);
