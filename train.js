function train(array) {
  let wagons = array.shift().split(" ").map(Number);
  let maxCapacity = Number(array.shift());

  for (element of array) {
    if (element.includes("Add")) {
      let newWagon = element.split(" ")[1];
      wagons.push(Number(newWagon));
    } else {
      let newPassengers = Number(element);

      for (let i = 0; i <= wagons.length; i++) {
        let wagonNumber = wagons[i];
        let potentialNewPassengers = newPassengers + wagonNumber;
        if (potentialNewPassengers <= maxCapacity) {
          wagons.splice(i, 1, potentialNewPassengers);
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
