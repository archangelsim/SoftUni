function maxSequence(array) {
    let currentMax = 0;
    let currentLongestDigit = 0;

    let totalMax = 0;
    let totalLongestDigit = 0;
    let sequence = [];

    for (let i = 1; i <= array.length; i++) {
        let previousNumber = array[i-1];
        let currentNumber = array[i];
        
        if (previousNumber === currentNumber) {
            currentMax += 1;
            currentLongestDigit = currentNumber;

            if (currentMax > totalMax) {
                totalMax = currentMax;
                totalLongestDigit = currentNumber;

            }
        } else {
            currentMax = 0;
        }
       
    }

    for (let i = 0; i <= totalMax; i++) {
        sequence.push(totalLongestDigit);
    }

    console.log(sequence.join(' '))
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])