'use strict';
/*jshint -W097*/

function getCorrectNum(anyNam) {
    if (anyNam !== Number(anyNam)) {
        return 'вы ввели не число';
    } else if (anyNam > 1000) {
        return 'слишком большое значение';
    } else if (anyNam <= 1) {
        return 'вы ввели неверное число';
    } else {
        for (let j = 2; j < anyNam; j++) {
            if (anyNam % j === 0) {
                return 'вы ввели не простое число';
            }
        }
        return 'вы ввели простое число';
    }


}

console.log(getCorrectNum(11));