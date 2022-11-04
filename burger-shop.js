function burgerShop(input) {
    let numberOfCities = Number(input.shift());
    let totalIncome = 0;
    
    for (let day = 1; day <= numberOfCities; day++) {
        let cityName = input.shift();
        let moneyEarned = Number(input.shift());
        let expenses = Number(input.shift());


        if (day % 5 === 0) {
            moneyEarned *= 0.90;
        } else if (day % 3 === 0) {
            expenses = expenses + (expenses * 0.5);
        }

        let dailyProfit = moneyEarned - expenses;
        totalIncome += dailyProfit;
        console.log(`In ${cityName} Burger Bus earned ${dailyProfit.toFixed(2)} leva.`)
    }

    console.log(`Burger Bus total profit: ${totalIncome.toFixed(2)} leva.`)
}

burgerShop(["5",
"Lille",
"2226.00",
"1200.60",
"Rennes",
"6320.60",
"5460.20",
"Reims",
"600.20",
"452.32",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20"])