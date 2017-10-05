const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  fs.readFile("./animals.txt", "utf-8", (err, data) => {
    const animalObject = data.split('\n');
    const selectAnimal = animalObject.filter((animal) => animal[0].toLowerCase() === process.argv[2]);
    res.write(selectAnimal.join('\n'));
    res.end();
  })
})

server.listen(8000, () => console.log("Listening on port 8000!"))
// fs.readFile("./animals.txt", "utf-8", (err, data) => {
//   let letter = process.argv[2];
//   let animals_array = data.split("\n");
//   let letter_animals = animals_array.filter((animal) => {
//       return animal[0] === letter.toUpperCase();
//   }).join('\n');
//   if (err) {
//     console.log(err);
//     return;
//   }
//   fs.writeFile(`./${letter}_animals.txt`, letter_animals, err => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(letter_animals);
//     }
//   });
// });
