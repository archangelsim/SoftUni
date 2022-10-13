function mergeArrays(arrayOne, arrayTwo) {

    let thirdArray = [];

    for (let i = 0; i < arrayOne.length; i++) {
        if (i % 2 == 0) {
            thirdArray.push(Number(arrayOne[i]) + Number(arrayTwo[i]));
        } else {
            thirdArray.push(arrayOne[i] + arrayTwo[i]);
        }
    }
    
    console.log(thirdArray.join(' - '))

}

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])