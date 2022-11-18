function stringSubstring(word, text) {
  let textArr = text.split(" ");
  let found = false;
  textArr.forEach((element) => {
    if (found) {
      return;
    }
    if (element.toLocaleLowerCase() == word.toLocaleLowerCase()) {
      console.log(word);
      found = true;
    }
  });

  if (!found) {
    console.log(`${word} not found!`);
  }
}

stringSubstring(
  "python",
  "JavaScript is the best programming javascript language"
);
