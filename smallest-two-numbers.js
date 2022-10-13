function smallestTwoNumbers(array) {
    array.sort((a, b) => a - b);
    let smallestTwo = array.slice(0, 2);
    console.log(smallestTwo.join(' '))
}

smallestTwoNumbers([30, 15, 50, 5])