// Write to a file
// Using the fs library again, try to write to the contents of a file. You can use the fs library to as a black box, the goal is to understand async tasks.

import fs from "fs";

fs.writeFile("output.txt", "Hello from node!", (err) => {
  if (err) {
    return console.log("error writing to file ", err);
  }
  console.log("file written successfully");
});

console.log("another 2nd work doing...");
