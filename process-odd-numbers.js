function oddPositionNumbers(numbers) {
    // let result = numbers
    // .filter((x, i) => i % 2 !== 0)
    // .map(x => x * 2)
    // .reverse();
    
    // console.log(result.join(' '));

    let filtered = numbers.filter((x, i) => i % 2 !== 0);
    let doubled = filtered.map(x => x * 2);
    let finalResult = doubled.reverse().join(' ');
    console.log(numbers)
    console.log(finalResult);
}

oddPositionNumbers([10, 15, 20, 25])