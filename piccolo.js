function piccolo(input) {

    let parking = {};

    input.forEach(element => {
        let [direction, carNumber] = element.split(', ');
        if (direction === "IN") {
            parking[carNumber] = 'IN';
        } else if (direction === "OUT" && parking.hasOwnProperty(carNumber)) {
            delete parking[carNumber];
        }
    });

    let parkingArr = Object.keys(parking).sort((a,b) => a.localeCompare(b));
    
    parkingArr.forEach(element => {
        console.log(element);
    });
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])