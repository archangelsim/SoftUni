function nxnMatrix(number) {



    for (let col = 1; col <= number; col++) {
        
        let string = '';
        
        for (let row = 1; row <= number; row++) {
            string += `${number} `
        }

        console.log(string)
    }
}

nxnMatrix(5)