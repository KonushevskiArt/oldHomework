'use strict';

const checkRemainder = (a, b) => {
    const remainder = a % b,
          res = a / b,
          message = remainder === 0 ? `Делится ${res}` : `Делится с остатком ${res}`;

        console.log(message);
}

checkRemainder(4, 2);
checkRemainder(5, 3);
