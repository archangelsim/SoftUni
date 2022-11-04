function addressBook(list) {
    let book = {};

    list.forEach(line => {
        let [name, address] = line.split(":");

        book[name] = address;
    });

    let bookArr = Object.entries(book);

    bookArr.sort((a,b) => a[0].localeCompare(b[0]));

    bookArr.forEach(el => console.log(`${el[0]} -> ${el[1]}`))
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])