'use strict';
/*jshint -W097*/

const arrow = (x, n) => {
    if (x === Number(x) && n === Number(n) && x > 0 && n > 0) {
        return Math.pow(x, n);
    } else {
        console.log('Вы ввели не натуральное число или не число вовсе');
    }
};


console.log(arrow(4, 3)); //64