function factorialDivision(numberOne, numberTwo) {
    function factorialize(num) {
        if (num === 0 || num === 1)
          return 1;
        for (var i = num - 1; i >= 1; i--) {
          num *= i;
        }
        return num;
      }
    
    let firstNumber =  factorialize(numberOne);
    let secondNumber = factorialize(numberTwo);

    console.log((firstNumber / secondNumber).toFixed(2))
}

factorialDivision(6,
    2)