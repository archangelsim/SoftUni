function distinctArray(array) {
    let uniqueArray = [];
    for (element of array) {
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element)
        }
    }
    console.log(uniqueArray.join(' '))
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])