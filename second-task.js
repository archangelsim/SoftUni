function modifyArray(array) {
  let modifiedArray = array.shift().split(" ").map(Number);


  let length = array.length;

  for (let i = 0; i < length; i++) {
    let commandLine = array.shift().split(" ");
    let command = commandLine[0];
    let number = Number(commandLine[1]);
    let secondNumber = Number(commandLine[2]);

    if (command == "Add") {
      modifiedArray.push(number);
    } else if (command == "Remove") {
      for (let i = 0; i < modifiedArray.length; i++) {
        if (modifiedArray[i] == number) {
          modifiedArray.splice(modifiedArray.indexOf(number), 1);
          break;
        }
      }
    } else if (command == "Replace") {
      for (let i = 0; i < modifiedArray.length; i++) {
        if (modifiedArray[i] == number) {
          modifiedArray.splice(modifiedArray.indexOf(number), 1, secondNumber);
          break;
        }
      }
    } else if (command == "Collapse") {
        modifiedArray = modifiedArray.filter(x => x >= number);
    } else if (command == "Finish") {
        console.log(modifiedArray.join(" "));
        return;
    }
  }
}

modifyArray(["1 20 -1 10",
    "Collapse 8",
    "Finish"]);
