// function myOwnBind(func, context, ...rest) {
//     // return function(...args) {
//     //    return func.apply(context, rest.concat(args));
//     // };
//     return function(...args) {
//         return func.call(context, ...rest, ...args);
//     };
// }

// без apply и call

// function myOwnBind(func, context, ...rest) {
//     return function(...args) {
//         const uniqId = Date.now().toString();

//         context[uniqId] = func;

//         const res = context[uniqId](...rest.concat(args));

//         delete context[uniqId];

//         return res;
//     };
// }
const sum = function(a, b, c) {
    console.log(this.name);
    return a + b + c;
}; 

const person = {
    name: 'Vano',
    a: 2,
    b: 3,
};

function myOwnBind(func, context) {
    var rest = Array.prototype.slice.call(arguments, 2);
    return function() {
        var args = Array.prototype.slice.call(arguments);

        return func.apply(context, rest.concat(args));
    };
}

console.log(myOwnBind(sum, person, 3)(2, 2));

