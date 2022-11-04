function dungeonGame(array) {
  let health = 100;
  let coins = 0;

  let rooms = array.shift().split("|");
  let numberOfRooms = rooms.length;
  let gameOver = false;

  for (let i = 0; i < numberOfRooms; i++) {
    let currentRoomContent = rooms.shift().split(" ");
    for (let j = 0; j < currentRoomContent.length; j++) {
      let content = currentRoomContent[j++];
      let number = Number(currentRoomContent[j]);

      if (content == "potion") {
        let healingFor = number;

        if (healingFor + health > 100) {
          let temporaryHealth = healingFor + health;
          health = 100;
          healingFor = 100 - (temporaryHealth - healingFor);
        } else {
          health += healingFor;
        }
        console.log(`You healed for ${healingFor} hp.`);
        console.log(`Current health: ${health} hp.`);
      } else if (content == "chest") {
        console.log(`You found ${number} coins.`);
        coins += number;
      } else {
        let lastMonsterFought = content;
        let damage = number;
        if (health - damage > 0) {
          console.log(`You slayed ${lastMonsterFought}.`);
          health -= damage;
        } else {
          console.log(`You died! Killed by ${lastMonsterFought}.`);
          console.log(`Best room: ${i + 1}`);
          gameOver = true;
        }
      }
      if (gameOver) {
        return;
      }
      if (i == numberOfRooms - 1) {
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
      }
    }
  }
}

dungeonGame(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
