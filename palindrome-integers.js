function palindromeIntegers(array) {

    for (element of array) {
        let numberToString = String(element);

        let tempArray = '';
        for (let i = 0; i < numberToString.length; i++) {
            let currentDigit = numberToString[i];
            tempArray += currentDigit;
        }
    
        element == tempArray.split("").reverse().join("") ? console.log('true') : console.log('false')
        
    }

}

palindromeIntegers([123,323,421,121])