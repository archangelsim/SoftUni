function primeNumber(number) {

    let prime = true;

    if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                prime = false;
            }
        }
    }
    console.log(prime)
}