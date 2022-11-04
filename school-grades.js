function schoolGrades(list) {
  let grades = {};

  list.forEach((line) => {
    let splittedLine = line.split(" ");
    let name = splittedLine.shift();

    let grade = splittedLine.map((el) => Number(el));

    if (grades[name]) {
      grade.forEach((el) => {
        grades[name].push(Number(el));
      });
    } else {
      grades[name] = grade;
    }
  });

  for (const grade in grades) {
    let allGrades = grades[grade];
    let averageGrade = 0;
    let counter = 0;
    allGrades.forEach((el) => {
      counter++;
      averageGrade += el;
    });
    averageGrade /= counter;
    grades[grade] = averageGrade;
  }

  let gradesArr = Object.entries(grades);
  gradesArr.sort((a, b) => a[0].localeCompare(b[0]));
  gradesArr.forEach(el => {
    console.log(`${el[0]}: ${el[1].toFixed(2)}`)
  })
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
