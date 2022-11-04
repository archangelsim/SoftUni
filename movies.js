function movies(list) {
  let moviesArray = [];

  let length = list.length;

  for (let i = 0; i < length; i++) {
    let line = list[i];
    if (line.includes("addMovie")) {
      let name = line.split("addMovie ")[1];
      moviesArray.push({name})
    } else if (line.includes("directedBy")) {
      let name = line.split(" directedBy ")[0];
      let director = line.split(" directedBy ")[1];

      let movie = moviesArray.find(el => el.name == name);
      if (movie) {
        movie.director = director;
      }
    } else if (line.includes("onDate")) {
      let [name, date] = line.split(" onDate ");
      let movie = moviesArray.find(el => el.name === name);
      if (movie) {
        movie.date = date;
      }
    }
  }
    moviesArray.forEach(el => {
      if (el.name && el.date && el.director) {
        console.log(JSON.stringify(el))
      }
    })
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
