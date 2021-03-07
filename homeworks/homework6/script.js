'use strict';

const arr = [10, 20, 30, 50, 235, 3000];

const res = arr.filter(item => {

    switch (String(item)[0]) {
        case '1':
            return item;
        case '2':
            return item;
        case '5':
            return item;
    }
    
})

console.log(res);