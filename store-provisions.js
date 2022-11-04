function storeProvisions(currentStock, orderedStock) {
  let availableStock = {};
  let lengthAvailableStock = currentStock.length;
  let lengthOrderedStock = orderedStock.length;

  for (let i = 0; i < lengthAvailableStock; i++) {
    let item = currentStock[i];
    let quantity = Number(currentStock[++i]);

    availableStock[item] = quantity;
  }

  for (let i = 0; i < lengthOrderedStock; i++) {
    let newItem = orderedStock[i];
    let areDe = Number(orderedStock[++i]);
    if (!availableStock.hasOwnProperty(newItem)) {
      availableStock[newItem] = 0;
    }

    availableStock[newItem] += areDe;
  }

  for (const key in availableStock) {
    console.log(`${key} -> ${availableStock[key]}`);
  }
}
storeProvisions(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
