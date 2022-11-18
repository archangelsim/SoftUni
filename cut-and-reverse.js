function cutAndReverse(line) {
    let half = line.length/2;

    let firstLine = line.slice(0, half);
    let secondLine = line.slice(half);

    firstLine = firstLine.split('').reverse().join('');
    secondLine = secondLine.split('').reverse().join('');

    console.log(firstLine);
    console.log(secondLine);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')