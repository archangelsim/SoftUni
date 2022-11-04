function omfg(list) {
  let obj = [
    {
      name: "s",
      date: "fuck",
    },
    {
        name: "shit",
        date: "deba",
    }
  ];

  let are = obj.find(el => el.name === "shit");
  if (are) {
    console.log("kur")
    obj.name = "kurvi!";

    obj.forEach(el => {
        for (const key in el) {
            console.log(key, el[key])
        }
    })

  } else {
    console.log('shit')
  }

}

omfg([]);
