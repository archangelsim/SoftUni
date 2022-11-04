function towns(list) {
    let length = list.length;

    for (let i = 0; i < length; i++) {
        let line = list[i].split(" | ");
        let town = line[0];
        let latitude =  Number(line[1]).toFixed(2);
        let longitude =  Number(line[2]).toFixed(2);

        let townInfo = {
            town,
            latitude,
            longitude
        }

        console.log(townInfo)
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])