function storage(list) {
    let finalList = {};

    list.forEach(element => {
        let [item, quantity] = element.split(" ");
        quantity = Number(quantity);
        if (finalList[item]) {
            quantity += finalList[item];
        }
        finalList[item] = quantity;
    });

    for (const key in finalList) {
        console.log(`${key} -> ${finalList[key]}`)
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])