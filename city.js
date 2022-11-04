function city(input) {

    for (element of Object.keys(input)) {
        "{key} -> {value}"
        console.log(`${element} -> ${input[element]}`)

    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})