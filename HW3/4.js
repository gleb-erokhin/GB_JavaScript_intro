"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

const numOne = Number(prompt('Enter number one'));
const numtwo = Number(prompt('Enter number two'));

function sum(one, two) {
    return one + two;
}

function dev(one, two) {
    return one / two;
}

function minus(one, two) {
    if (one < two) {
        return two - one; 
    } else if (one === two) {
        return 0;
    } else {
        return one - two;
    }
}

function mul(one, two) {
    return one * two;
}


alert(sum(numOne, numtwo));
alert(dev(numOne, numtwo));
alert(minus(numOne, numtwo));
alert(mul(numOne, numtwo));