function extractFile(input) {
  let fileName = input.slice(input.lastIndexOf("\\") + 1);
  let extension = fileName.slice(fileName.lastIndexOf(".") + 1);
  let name = fileName.slice(0, fileName.lastIndexOf("."));
  console.log(`File name: ${name}\nFile extension: ${extension}`);
}

extractFile("C:\\Internal\\training-internal\\Template.pptx.omg");
