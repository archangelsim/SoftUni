function replaceRepeatingChars(line) {
    let result = '';
  for (let i = 0; i < line.length; i++) {
    let currentWord = line[i];
    let nextWord = line[i + 1];

    if (currentWord !== nextWord) {
        result += currentWord;
    }
  }
  console.log(result);
}

replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
