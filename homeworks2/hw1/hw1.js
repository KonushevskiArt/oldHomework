'use strict';
// 1. Сравнить массивы
//     var a=[2,3,5];
//     var b=[2,3,5];
//     var c=[2,2,3,3,5,6]
//     var d=[1,2,3]

const a=['a',3,'nca', 1, ['c'], [['jdf','m',['asdf']]]];
const b=['nca',1,'a', 3, ['c'], [['m','jdf',['asdf']]]];
const c=['a','nca',3];
const d=['a',3,'nca'];


const sortArr = (arr) => {
    arr.sort();
    arr.forEach(elem => {
        if (Array.isArray(elem)) {
            sortArr(elem);
        }
    });
    return arr;
};

const compareArrs = (arr1, arr2) => {
    //new arrs
    // const newArr1 = arr1.slice();
    // const newArr2 = arr2.slice();
    const newArr1 = [...arr1];
    const newArr2 = [...arr2];

    if ((newArr1.length !== newArr2.length)) {
        console.log(false);
        return false;
    }

    const sortArr1 = sortArr(newArr1);
    const sortArr2 = sortArr(newArr2);

    //join:
    // console.log(sortArr1.join());
    // console.log(sortArr2.join());

    if (sortArr1.join() == sortArr2.join()) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }

    // JSON.stringify:

    // console.log(JSON.stringify(newArr1));
    // console.log(JSON.stringify(newArr2));

    // if (JSON.stringify(sortArr1) === JSON.stringify(sortArr2)) {
    //     console.log(true);
    //     return true;
    // } else {
    //     console.log(false);
    //     return false;
    // }
    
};

// console.log(a);
compareArrs(a, b);
compareArrs(c, d);
// console.log(a);

