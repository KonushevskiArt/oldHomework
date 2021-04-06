'use strict';

// 2. Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
//   вывод fizz вместо чисел, кратных 3;
//   вывод buzz вместо чисел, кратных 5;
//   вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

const showNumbers = (num) => {
    if ( (typeof num !== 'number' || (!Number.isInteger(num))) ) {
        console.log('incorrect value entered!');
        return; 
    }
  
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        }  else if (i % 5 === 0) {
            console.log('buzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else {
            console.log(i);
        }
    }

};

showNumbers(100)