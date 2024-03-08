"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

const number = Number(prompt('Enter the number: '))

function upToCibe(number) {
    return number ** 3;
}

console.log(upToCibe(number));