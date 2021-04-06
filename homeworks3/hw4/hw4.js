'use strict';

// 4. Нужно написать функцию, которая возвращает n-ную запись в определенной последовательности Фибонначи, причем n — число, которое передается в качестве аргумента функции.

const countFibonachi = (num) => {
    if (typeof num !== 'number') {
        console.log('incorrect value entered!');
        return; 
    }

    let saveVal;
    let curVal = 1;
    let prevVal = 0;

    for (let i = 0; i < num; i++) {
        saveVal = curVal;
        curVal = curVal + prevVal;
        prevVal = saveVal;
    }

    console.log(prevVal);
};

countFibonachi(0);