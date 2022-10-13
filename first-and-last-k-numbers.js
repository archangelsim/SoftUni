function firstAndLastKnumbers(array) {
    let k = array.shift();
    console.log(array.slice(0, k).join(' '))
    console.log(array.slice(-k).join(' '))

}

firstAndLastKnumbers([3,
    6, 7, 8, 9])