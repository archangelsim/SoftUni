function pascalCaseSplitter(line) {
  let result = line[0];
  for (let i = 1; i < line.length; i++) {
    let letter = line[i];
    if (letter === letter.toUpperCase()) {
      result += ', '
    }
    result += letter;
  }
  console.log(result);
}

pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
