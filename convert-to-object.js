function convertToObject(json) {
    let object = JSON.parse(json);

    for (element of Object.keys(object)) {
        console.log(`${element}: ${object[element]}`)
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')