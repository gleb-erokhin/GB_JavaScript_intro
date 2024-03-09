"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const userNumber1 = Number(prompt("Enter number one: "));
const userNumber2 = Number(prompt("Enter number two: "));
const userNumber3 = Number(prompt("Enter number three: "));


function numberCompare(one, two, three) {
    if (one > two && one > three) {
        return console.log(`Максимальное значение среди чисел ${one}, ${two}, ${three} равно ${one}`);
    } else if (two > one && two > three) {
        return console.log(`Максимальное значение среди чисел ${one}, ${two}, ${three} равно ${two}`);
    } else {
        return console.log(`Максимальное значение среди чисел ${one}, ${two}, ${three} равно ${three}`);
    }
}

console.log(numberCompare(userNumber1, userNumber2, userNumber3));