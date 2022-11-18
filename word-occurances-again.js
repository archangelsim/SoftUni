function wordOccurancesAgain(text, word) {
   let newArr = text.split(' ');
   let counter = 0;
   newArr.forEach(element => {
    if (element === word) {
        counter++;
    }
   });

   console.log(counter);

}

wordOccurancesAgain('This is a word and it also is a sentence',
'is')