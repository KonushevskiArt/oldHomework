'use strict';

// 3. Анаграмма
// Так называют слово, которое содержит все буквы другого слова в том же количестве, но ином порядке.

// Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.

const isAnagram = (str1, str2) => {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        console.log('incorrect value entered!');
        return;
    }

    const processString = (str) => {
        return str.toLowerCase().split('').slice().sort().join('').trim();
    };

    const processedString1 = processString(str1);
    const processedString2 = processString(str2);

    console.log(processedString1);
    console.log(processedString2);

    return processedString1 === processedString2;
};

console.log(isAnagram(' B aD c', 'Cd  b a '));