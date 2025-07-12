//todo : Read a file, remove all the extra spaces and write it back to the same file.
import fs from "fs";

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    return console.error("error reading file:", err);
  }

  console.log("original content:\n", data);

  const cleanedData = data.replace(/\s+/g, " ").trim();

  console.log("cleaned content:\n", cleanedData);

  fs.writeFile("output.txt", cleanedData, (err) => {
    if (err) {
      return console.error("error writing to file:", err);
    }
    console.log("file cleaned and saved!");
  });
});
