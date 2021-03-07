'use strict';

const arr = [2, 3, 4 ,5];

const multiplicItemsArr = (arr) => {
    let res = 1;

    for (let i = 0; i < arr.length; i++) {
        res *= arr[i];
    }

    return res;
}

const result = multiplicItemsArr(arr);

// const result = arr.reduce((res, item) => res * item, 1);

console.log(result);
