'use strict';

// 7. Заполните массив 10-ю случайными целыми числами. Посчитайте их сумму с помощью reduce, создайте новый массив в котором будут квадраты этих чисел, используя map, оставьте отфильтруйте четные, отсортируйте по убыванию их квадратных корней (целой части корня)

const randomVal = (maxAndMinValue) => {
    const randomNum = Math.floor(Math.random() * maxAndMinValue);
    if (Math.random() > 0.5) {
        return randomNum * -1;
    } else {
        return randomNum;
    }
};

const createArrWithRandVal = (count, maxAndMinValue) => {
    const res = [];

    for (let i = 0; i < count; i++) {
        res.push(randomVal(maxAndMinValue));
    }

    return res;
};

const arr = createArrWithRandVal(10, 10);

const sumValOfArr = arr.reduce((sum, cur) => sum += cur, 0);

const arrPowVals = arr.map((cur) => Math.pow(cur, 2));

const arrEvenNums = arrPowVals.filter(cur => {
    if (cur % 2 === 0) {
        return cur;
    }
});

const arrSortSqrtVal = arrEvenNums.sort((a, b) => Math.floor(Math.sqrt(b) - Math.floor(Math.sqrt(a))));


console.log(arr);
console.log(sumValOfArr);
console.log(arrPowVals);
console.log(arrEvenNums);
console.log(arrSortSqrtVal);