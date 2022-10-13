function arrayRotations(array, numberOfRotations) {
  let newArray = array;

  for (let i = 0; i < numberOfRotations; i++) {
    newArray.push(newArray[0]);
    newArray.shift();
  }

  console.log(newArray.join(" "));
}

arrayRotations([51, 47, 32, 61, 21], 2);
