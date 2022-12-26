'use strict';
/*jshint -W097*/

const myArr = [1, 2, 5, 0, 7, 8, 0, 9, 12, 2, 16, 0, 27, 1000, 97, 0, 'string'];

function getOthersNumbers(anyArray) {
    let even = []; //четныечетны
    let odd = []; //нечетные
    let zero = []; //нули
    let notNumbers = []; //не числа

    anyArray.forEach(item => {
        if (item === 0) {
            zero.push(item);
        } else if (item === Number(item) && item % 2 == 0) {
            even.push(item);
        } else if (item === Number(item) && item % 2 != 0) {
            odd.push(item);
        } else if (item !== Number(item)) {
            notNumbers.push(item);
        }
    });

    console.log(`Количество четных символов : ${even.length}, количество нечетных символов : ${odd.length}, количество нулей : ${zero.length}, количество строк ${notNumbers.length}`);
}

getOthersNumbers(myArr);