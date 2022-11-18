function hastags(input) {
  let text = input.split(" ");
  text.forEach((word) => {
    if (word.startsWith("#") && word.length > 1) {
      let potentialWord = '';
      for (let i = 1; i < word.length; i++) {
        let check = word[i].toUpperCase();
        if (check.charCodeAt() >= 65 && check.charCodeAt() <= 90) {
                potentialWord += word[i];
        } else {
          break;
        }
      }
      if (potentialWord.length > 0) {
        console.log(potentialWord);
      }
    }
  });
}

hastags("###ANowadays everyone uses #a to tag a #special word in #zsocialMedia");
