function substring(word, startingIndex, count) {
    let slicedWord = word.substring(startingIndex, startingIndex + count);
    console.log(slicedWord);
}

substring('SkipWord', 4, 7)