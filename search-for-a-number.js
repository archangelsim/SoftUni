function searchForANumber(firstArray, secondArray) {
    let elementsToTakeFromTheFirstArray = secondArray[0];
    let numbersToDelete = secondArray[1];
    let searchedNumber = secondArray[2];

    let modifiedArray = firstArray.slice(0, elementsToTakeFromTheFirstArray);

    for (let i = 0; i < numbersToDelete; i++) {
        modifiedArray.shift()
    }

    let occurancesCounter = 0;

    for (element of modifiedArray) {
        if (element == searchedNumber) {
            occurancesCounter++;
        }
    }

    console.log(`Number ${searchedNumber} occurs ${occurancesCounter} times.`)
}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3])