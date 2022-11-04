function convertToJason(firstName, lastName, hairColor) {
    /**Write a function that receives a first name, last name, hair color and sets them to an object.
Convert the object to JSON string and print it.
Input is provided as 3 single strings in the order stated above. */

    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }
    let jsonString = JSON.stringify(person);

    console.log(jsonString)
}

convertToJason('George', 'Jones', 'Brown')