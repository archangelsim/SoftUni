function arrayManipulator(array, commands) {
  let length = commands.length;
  for (let i = 0; i < length; i++) {
    let newOne = commands.shift().split(" ");
    if (newOne[0] === "add") {
      let index = newOne[1];
      let element = newOne[2];
      array.splice(index, 0, Number(element));
    } else if (newOne[0] === "addMany") {
      let wtf = newOne.shift();
      let index = newOne.shift();
      let newArray = newOne.map(Number).join(" ").split(" ").map(Number);

      for (let i = 0; i < newArray.length; i++) {
        array.splice(index + i, 0, newArray[i]);
      }
    } else if (newOne[0] == "contains") {
      let element = Number(newOne[1]);
      console.log(array.indexOf(element));

    } else if (newOne[0] == "remove") {
      let index = newOne[1];
      array.splice(index, 1);
    } else if (newOne[0] == "shift") {
      let positions = Number(newOne[1]);
      for (let i = 0; i < positions; i++) {
        let numberToBeMoved = array.shift();
        array.push(numberToBeMoved);
      }
    } else if (newOne[0] == "sumPairs") {
        let modifiedArray = [];
        for (let i = 0; i < array.length; i++) {
            modifiedArray.push(array[i++] + array[i])
        }
        array = modifiedArray.splice(0)
    } else if (newOne[0] == "print") {
        console.log(`[ ${array.join(", ")} ]`);
        return;
    }
  }

  console.log(`[ ${array.join(", ")} ]`);
}

arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 3', 'print']
);
