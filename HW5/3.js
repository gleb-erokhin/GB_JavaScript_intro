"use strict";

/*
Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя
метод forEach.
Обратите внимание, что в массиве должны быть изменены цены продуктов после 
выполнения метода forEach. Не нужно создавать новый массив.
Если сложно работать с методами массива, то можно сделать и обычным циклом.
*/

const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

// key означает индекс в массиве, через точку уже обращаемся к объекту, в данном случае к значению price
// for (const key in products) {
//   products[key].price = ((products[key].price / 100) * 85);
// }

// console.log(`выводим через for`, products);

// через foreach
products.forEach(element => {
    element.price = ((element.price / 100) * 85);
});

console.log(`выводим через forEach`, products);
