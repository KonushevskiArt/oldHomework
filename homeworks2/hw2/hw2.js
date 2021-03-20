'use strict';
// 2. Вывести уникальные эелементы (цикл в цикле) и (используя {} (Map или HashMap)) использовать for, forEach, reduce 

const myArray1 = [55,77,66];
const myArray2 = [55,11,15,77,66,99,100,110];

const myArray1 = [55,77,66,66, 55];
const myArray2 = [55,11,15,77,66,99,100,110];

const findUnic = (arr1, arr2) => {
    const res = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++ ) {
            if (arr1[i] === arr2[j] && !(res.includes(arr1[i]))) {
                res.push(arr1[i]);
            }
        }
    }
    return res;
};

/* const findUnic = (arr1, arr2) => {
    const hashMap = {};

    // for of

    for (let elem of arr1) {
        if ((arr2.includes(elem)) && !(hashMap[elem])) {
            hashMap[elem] = true;
        }
    }

    // forEach

    // arr1.forEach(elem => {
    //     if ((arr2.includes(elem)) && !(hashMap[elem])) {
    //         hashMap[elem] = true;
    //     }
    // });

    // reduce

    // arr1.reduce((res, current) => {
    //     if ((arr2.includes(current)) && !(res[current])) {
    //         hashMap[current] = true;
    //     }
    //     return res;
    // }, hashMap);

    return hashMap;
}; */


console.log(findUnic(myArray2, myArray1));