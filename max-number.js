function maxNumber(array) {
    let newArray = [];


    for (let i = 0; i < array.length; i++) {
        let isBigger = true;
        let currentNumber = array[i];

        for (let k = i + 1; k < array.length; k++) {
            if (currentNumber <= array[k]) {
            isBigger = false;
            }
        }

        if (isBigger) {
            newArray.push(array[i]);
        }
    }

    console.log(newArray.join(' '))
}

maxNumber([41, 41, 34, 20])
