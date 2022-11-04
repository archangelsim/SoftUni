function burgerBus(input) {
  let numberOfCities = Number(input.shift());
  let totalIncome = 0;

  for (let day = 1; day <= numberOfCities; day++) {
    let city = input.shift();
    let moneyEarned = Number(input.shift());
    let expenses = Number(input.shift());
    let dailyProfit = 0;

    if (day % 5 === 0) {
      dailyProfit = (moneyEarned * 0.9) - expenses;
      console.log(
        `In ${city} Burger Bus earned ${dailyProfit.toFixed(2)} leva.`
      );
      totalIncome += dailyProfit;
      break;
    }
    if (day % 3 === 0 && day !== 5) {
      expenses += expenses * 0.5;
    }

    // daily profit
    dailyProfit = moneyEarned - expenses;


    // total profit
    totalIncome += dailyProfit;


    console.log(`In ${city} Burger Bus earned ${dailyProfit.toFixed(2)} leva.`);
  }

  console.log(`Burger Bus total profit: ${totalIncome.toFixed(2)} leva.`);
}

burgerBus([
  "5",
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
  "290.20",
]);
