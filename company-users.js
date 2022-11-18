function companyUsers(input) {
  const users = {};

  input.forEach((element) => {
    let [company, id] = element.split(" -> ");

    if (!users.hasOwnProperty(company)) {
      users[company] = [];
    }
    if (!users[company].includes(id)) {
      users[company].push(id);
    }
  });

  let companiesSortedByName = Object.entries(users).sort((a, b) => a[0].localeCompare(b[0]));

  companiesSortedByName.forEach(company => {
    console.log(company[0]);
    let arr = company[1];
    arr.forEach(id => console.log(`-- ${id}`));
})
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
