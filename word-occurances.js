function wordOccurances(list) {

    let words = {};
    list.forEach(word => {
        let quantity = 1;
        if (!words[word]) {
            words[word] = 1;
        } else {
            words[word] += quantity;
        }
        
    });

    let wordsArr = Object.entries(words);
    wordsArr.sort((a,b) => b[1] - a[1])
    
    wordsArr.forEach(arr => {
        console.log(`${arr[0]} -> ${arr[1]} times`)
    });
}

wordOccurances(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])