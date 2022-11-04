function phoneShop(array) {
  let phonesList = array.shift().split(", ");
  let modifiedList = phonesList.slice();
  let length = array.length;

  for (let i = 0; i < length; i++) {
    let commands = array.shift().split(" ");
    let command = commands[0];
    let notUsed = commands[1];
    let phone = commands[2];

    if (command !== "End") {
      if (command == "Add") {
        if (!modifiedList.includes(phone)) {
          modifiedList.push(phone);
        }
      } else if (command == "Remove") {
        if (modifiedList.includes(phone)) {
          modifiedList.splice(phonesList.indexOf(phone), 1);
        }
      } else if (command == "Bonus") {
        let newListOfCommands = commands[3].split(":");
        let oldPhone = newListOfCommands[0];
        let newPhone = newListOfCommands[1];

        if (modifiedList.includes(oldPhone)) {
            let phoneIndex = modifiedList.indexOf(oldPhone) + 1;
            modifiedList.splice(phoneIndex, 0, newPhone)
        }
      } else if (command == "Last") {
        if (modifiedList.includes(phone)) {
          modifiedList.splice(modifiedList.indexOf(phone), 1);
          modifiedList.push(phone);
        }
      }
    }
  }
  console.log(modifiedList.join(", "));
}

phoneShop(["HuaweiP20, XiaomiNote",
"Remove - Samsung",
"Bonus phone - XiaomiNote:Iphone5",
"End"]);
