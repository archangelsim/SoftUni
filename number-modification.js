function numberModification(array) {
  let stringArray = String(array);

  let sum = 0;
  let counter = 0;
  let numberArray = stringArray.split("").map(Number);

  for (number of numberArray) {
    sum += number;
    counter += 1;
  }

  let averageSum = sum / counter;

  while (averageSum < 5) {
    sum += 9;
    counter += 1;
    numberArray.push(9);
    averageSum = sum / counter;
  }

  console.log(numberArray.join(''));
}

numberModification(101);
