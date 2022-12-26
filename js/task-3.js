'use strict';
/*jshint -W097*/

function returnNumber(numberOne) {
    return numberOne;
}

function getSum(numberTwo, cb) {
    return numberTwo + cb;
}

const result = getSum(24, returnNumber(47));

console.log(result);