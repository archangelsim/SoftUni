function charactersInRange(start, finish) {
  let temp = "";
  if (start.charCodeAt() <= finish.charCodeAt()) {
    for (let i = start.charCodeAt() + 1; i < finish.charCodeAt(); i++) {
      let char = String.fromCharCode(i);
      temp += `${char} `;
    }
  } else {
        for (let i = finish.charCodeAt() + 1; i < start.charCodeAt(); i++) {
        let char = String.fromCharCode(i);
        temp += `${char} `;
    }
  }

  console.log(`${temp}`);

}

charactersInRange("C", "#");
