const sum = (a) => {

    let res = a;
  
    function func(b) {
      res += b;
      return func;
    }
  
    func.toString = () => {
      return res;
    };
  
    return func;
};

console.log(sum(2)(1)(1)(2));

//в браузере работает, а в node нет