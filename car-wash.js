function carWash(array) {

    let length = array.length;
    let cleanness = 0;
    // To find a percentage of a number, say 30% of 40, just multiply. For example, (30/100)(40) 
   for (command of array) {
    if (command === "soap") {
        cleanness += 10;
    } else if (command ==="water") {
        cleanness += 20/100*cleanness;
    } else if (command ==="vacuum cleaner") {
        cleanness += 25/100*cleanness;
    } else if (command ==="mud") {
        cleanness -= 10/100*cleanness;
    } 
   }

   console.log(`The car is ${cleanness.toFixed(2)}% clean.`)
}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])