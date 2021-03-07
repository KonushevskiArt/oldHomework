'use strict';

const arr = [1, 2, 3, 4, 5];

const multiplicItemsArr = (arr) => {
    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }

    return res;
}

const result = multiplicItemsArr(arr);

// const result = arr.reduce((res, item) => res + item, 0);

console.log(result);