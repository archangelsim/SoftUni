function addAndSubstract(numberOne, numberTwo, numberThree) {

    let sumResult = numberOne + numberTwo;

    function sum() {
        
        return sumResult;
    }

    function substract() {
        return Number(sumResult - numberThree);
    }

    console.log(substract());
}

addAndSubstract(23,
    6,
    10)