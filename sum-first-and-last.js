function sumFirstAndLastNumber(array) {
    let firstNumber = Number(array.shift());
    let lastNumber = Number(array.pop());
    console.log(firstNumber + lastNumber)
    console.log(array)
}

sumFirstAndLastNumber(['20', '30', '40'])