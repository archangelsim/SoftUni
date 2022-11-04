function employees(list) {
    let length = list.length;

    for (let i = 0; i < list.length; i++) {
        let name = list[i];
        let personalNumber = list[i].length;

        let employee = {
            name,
            personalNumber
        }
       
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`)
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])