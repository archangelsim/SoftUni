function wordsTracker(input) {
  const words = {};

  let searchedForWords = input.shift().split(' ');

  searchedForWords.forEach((element) => {
    words[element] = 0;
  });

  input.forEach((element) => {
    if (words.hasOwnProperty(element)) {
      words[element] += 1;
    }
  });


  let arrWords = Object.entries(words).sort((a,b) => b[1] - a[1])
  for (const key of arrWords) {
    console.log(`${key[0]} - ${key[1]}`)
  }
}

wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);
