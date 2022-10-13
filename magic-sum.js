function magicSum(array, number) {
  let magicArr = [];

  for (let i = 0; i < array.length; i++) {
    let currentNumber = array[i];
    for (let j = 0; j < array.length; j++) {
      let tempNumber = array[j];
      if (currentNumber + tempNumber == number && currentNumber != tempNumber) {
        if (
          !magicArr.includes(currentNumber) &&
          !magicArr.includes(tempNumber)
        ) {
          magicArr.push(currentNumber);
          magicArr.push(tempNumber);

          console.log(`${currentNumber} ${tempNumber}`);
        }
      }
    }
  }
}

magicSum([1, 2, 3, 4, 5], 6);
