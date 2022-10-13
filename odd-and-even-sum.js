function oddAndEvenSum(number) {
    let numberToString = String(number);
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < numberToString.length; i++) {
        let digit = Number(numberToString[i]);
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddAndEvenSum( 3495892137259234)