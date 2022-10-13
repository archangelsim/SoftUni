function smallestNumber (numOne, numTwo, numThree) {

    let smallestOne = 0;
    if (numOne <= numTwo && numOne <= numThree) {
        smallestOne = numOne;
    } else if (numTwo <= numOne && numTwo <= numThree) {
        smallestOne = numTwo;
    } else {
        smallestOne = numThree;
    }

    console.log(smallestOne)
}

smallestNumber(600,
    342,
    123)