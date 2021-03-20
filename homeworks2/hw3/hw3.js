'use strict';
// 3. Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения. 

const str = 'jlablabla';

const newStr = str[0].toUpperCase() + str.slice(1);
// const newStr = str.replace(/./, str[0].toUpperCase());

console.log(newStr);