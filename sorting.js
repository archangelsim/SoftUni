function sorting(array) {
  let sortedArray = [];
  let arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    if (i % 2 == 0) {
      let biggestNum = Math.max(...array);
      sortedArray.push(biggestNum);
      array.splice(array.indexOf(biggestNum), 1);
    } else {
      let biggestNum = Math.min(...array);
      sortedArray.push(biggestNum);
      array.splice(array.indexOf(biggestNum), 1);
    }
  }

  console.log(sortedArray.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
