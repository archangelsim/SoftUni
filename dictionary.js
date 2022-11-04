function dictionary(list) {
  let dic = {};

  for (let i = 0; i < list.length; i++) {
    let obj = JSON.parse(list[i]);
    let word = Object.keys(obj);
    let description = Object.values(obj);
    
    dic[word] = description;
  }

  let dicArr = Object.entries(dic);
  dicArr.sort((a, b) => a[0].localeCompare(b[0]));

  dicArr.forEach(el => {
    console.log(`Term: ${el[0]} => Definition: ${el[1]}`)
  })
}
dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Coffee":"A SHIT LOAD OF FUCK"}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
