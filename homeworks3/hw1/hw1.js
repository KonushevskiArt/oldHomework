'use strict';

// 1. Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.

// Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.

const isPalindrome = (data) => {
    
    if ((!(typeof data === 'string')) || (data.length % 2 !== 0)) {
        return false; 
    }

    const str = data.toLowerCase();

    const firstHalf = str.substring(0, str.length / 2);
    const secondHalf = str.substring(str.length / 2, str.length).split('').reverse().join('');

    return firstHalf === secondHalf;
    
};

console.log(isPalindrome('/A1b2,  ,2B1a/'));