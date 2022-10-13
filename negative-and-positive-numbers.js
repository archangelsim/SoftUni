function negativeAndPositiveNumbers(stringArray) {

    let result = [];
    for (element of stringArray) {
        let number = Number(element);
        if (number < 0) {
            result.unshift(number);
        } else {
            result.push(number);
        }
    }
    for (element of result) {
        console.log(element)
    }
    ;
}

negativeAndPositiveNumbers(['7', '-2', '8', '9'])