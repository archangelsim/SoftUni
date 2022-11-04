function oddOccurances(list) {
  let wordsToLowerCase = list.split(" ").map((el) => el.toLowerCase());
  const wordsObj = {};

  wordsToLowerCase.forEach((word) => {
    if (!wordsObj.hasOwnProperty(word)) {
      wordsObj[word] = 1;
    } else {
      wordsObj[word]++;
    }
  });

  let wordRepetitions = Object.entries(wordsObj).sort((a, b) => b[1] - a[1]);
  let result = "";
  wordRepetitions.forEach((word) => {
    if(word[1] % 2 !== 0) {
        result += `${word[0]} `
    }
  });

  console.log(result)

}

oddOccurances("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
