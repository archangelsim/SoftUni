function arrayOfProducts(array) {

    array.sort()

    console.log(array)
    for (let i = 0; i < array.length; i++) {
        console.log(` ${i+1}.${array[i]}`)
    }
}
arrayOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])