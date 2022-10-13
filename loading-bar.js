function loadingBar(number) {
    let array = [];

    array += '%'.repeat(number/10);


    while (array.length < 10) {
        array += '.';
    }

    if (number != 100) {
    console.log(`${number}% [${array}]\nStill loading...`)
    } else {
        console.log(`100% Complete!\n[${array}]`)
    }
}

loadingBar(40)