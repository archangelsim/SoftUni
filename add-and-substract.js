function addAndSubstract(array) {
    let index = 0;
    let currentSum = 0;
    let modifiedSum = 0;
    let modifiedArray = [];
    for (let number = 0; number < array.length; number++) {

        currentSum += array[number];

        if (array[number] % 2 === 0) {
            let newNumber = array[number] + index;
            modifiedArray.push(newNumber)
            modifiedSum += array[number] + index;
        } else {
            let newNumber = array[number] - index;
            modifiedArray.push(newNumber)
            modifiedSum += array[number] - index;
        }

        index++;  
    }
    console.log(modifiedArray)
    console.log(`${currentSum}\n${modifiedSum}`)
}

addAndSubstract([5, 15, 23, 56, 35])