function cardGame(input) {
  const playersAndCards = {};

  input.forEach((element) => {
    let [name, cards] = element.split(": ");
    cards = [cards];

    if (!playersAndCards.hasOwnProperty(name)) {
      playersAndCards[name] = [];
    }

    cards.forEach((cardList) => {
      let card = cardList.split(", ");
      card.forEach((el) => {
        if (!playersAndCards[name].includes(el)) {
          playersAndCards[name].push(el);
        }
      });
    });
  });

  let finalObj = {};

  for (const element in playersAndCards) {
    finalObj[element] = 0;
    let result = 0;
    let cardList = playersAndCards[element];
    cardList.forEach((card) => {
      let power = card[0];
      let type = card[1];
      if (card.length > 2) {
        power = card.slice(0, 2);
        type = card[2];
      }

      if (isNaN(power)) {
        switch (power) {
          case "J":
            power = 11;
            break;
          case "Q":
            power = 12;
            break;
          case "K":
            power = 13;
            break;
          case "A":
            power = 14;
            break;
        }
      } else {
        power = Number(power);
      }

      switch (type) {
        case "S":
          type = 4;
          break;
        case "H":
          type = 3;
          break;
        case "D":
          type = 2;
          break;
        case "C":
          type = 1;
          break;
      }

      result = power * type;
      finalObj[element] += result;
    });
  }

  for (const key in finalObj) {
    console.log(`${key}: ${finalObj[key]}`);
  }
}
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]);
