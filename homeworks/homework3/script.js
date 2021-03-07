'use strict';

const bindGenerator = () => {
    let arr = []

    return () => {
        let randomNum = Math.floor(Math.random() * 100 + 1);

        if (!arr.includes(randomNum)) {
            arr.push(randomNum);
        }
        
        return arr;
    };
}
const generator = bindGenerator();

for (let i = 0; i < 1000; i++) {
    generator();
}

console.log(generator());
