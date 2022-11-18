function censoredWord(sentence, word) {

    let text = sentence.replace(word, '*'.repeat(word.length));
    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    }

    console.log(text);
}

censoredWord('A small sentence with some small tits small words', 'small')