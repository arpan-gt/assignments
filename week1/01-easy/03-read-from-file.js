//todo :  Reading the contents of a file
// Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.

import fs from "fs";

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) return console.error(err);
  console.log(" File content:", data);
});

let total = 0;
for (let i = 0; i < 1e9; i++) {
  total += i;
}

console.log("Expensive work done");
