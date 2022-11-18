function revealWords(words, text) {
  let wordsArr = words.split(", ");
  let finalText = text;

  wordsArr.forEach((word) => {
    let match = "*".repeat(word.length);
    finalText = finalText.replace(match, word);
  });

  console.log(finalText);
}

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
