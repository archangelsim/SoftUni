function signCheck(numberOne, numberTwo, numberThree) {
    let negatives = 0;

    if (numberOne < 0) {
        negatives += 1;
    }
    if (numberTwo < 0) {
        negatives +=1;
    }
    if (numberThree <0) {
        negatives += 1;
    }

    if (negatives == 3 || negatives == 1) {
        console.log("Negative")
    } else {
        console.log("Positive")
    }
}

signCheck(-1,
    -2,
    -3)