"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

const userNumber = prompt('Enter your salay GROS: ');

// Делаем проверку на число, если все нормально, то вычисляем с помощью функции
if (isNaN(userNumber)) {
    console.log("Значение задано неверно");
} else {
    console.log("Размер заработной платы за вычетом налогов равен:", userRate(userNumber));
}

// функция для вычисления процента
function userRate(number) {
    return number - (number * 0.13);
}
