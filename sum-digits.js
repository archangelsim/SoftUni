function sumDigits(number) {
    let numberToString = number.toString();
    let sum = 0
    for (let i = 0; i < numberToString.lenght(); i++) {
        let digit = Number(numberToString[i]);
        sum += digit;
    }
    console.log(sum)
}

sumDigits(245678)