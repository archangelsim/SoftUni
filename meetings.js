function meetings(list) {

    let schedule = {};

    list.forEach(line => {
        let [day, name] = line.split(" ");

        if (schedule[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            schedule[day] = name;
        }
            
    });


    for (const key in schedule) {
        console.log(`${key} -> ${schedule[key]}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])