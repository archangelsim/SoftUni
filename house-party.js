function houseParty(list) {
  let finalList = [];
  for (person of list) {
    let name = person.split(" ")[0];
    if (person.includes("is going")) {
      if (finalList.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        finalList.push(name);
      }
    } else {
      if (finalList.includes(name)) {
        let personToBeRemoved = finalList.indexOf(name);
        finalList.splice(personToBeRemoved, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }
  console.log(finalList.join(`\n`));
}

houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
