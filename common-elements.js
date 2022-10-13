function commonElements(arrayOne, arrayTwo) {
    for (element of arrayOne) {
        if (arrayTwo.includes(element)) {
            console.log(element)
        }
    }
}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])