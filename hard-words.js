function hardWords(text) {
  let newText = [text.shift().split(' ')];
  let words = text.pop();

  newText.forEach(textElement => {
        words.forEach(word => {
            if (word.length === textElement.length) {
                if (textElement === '_'.repeat(word.length)) {
                    textElement = word;
                }
            }
        })
    });

  console.log(newText[1]);
  console.log(words);
}

hardWords([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",

  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
