'use strict';

// 5. Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'

const num = 587;

const obj = {
    'floor': 0,
    'ceil': 0,
};

obj.floor = Math.floor(Math.sqrt(num));
obj.ceil = Math.ceil(Math.sqrt(num));

console.log(obj);
