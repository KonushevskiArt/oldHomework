'use strict';

// 6. Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число (Math.min, Math.max)

const arr = [4, -2, 5, 19, -130, 0, 10];

const maxNum = Math.max(4, -2, 5, 19, -130, 0, 10);
const minNum = Math.min(4, -2, 5, 19, -130, 0, 10);

// const maxNum = arr.reduce((max, cur) => max > cur ? max : cur, 0);
// const minNum = arr.reduce((max, cur) => max < cur ? max : cur, 0);

// const getMaxOfArray = (arr) => Math.max.apply(null, arr);
// const getMinOfArray = (arr) => Math.min.apply(null, arr);
// const maxNum = getMaxOfArray(arr);
// const minNum = getMinOfArray(arr);

console.log(maxNum, minNum);
