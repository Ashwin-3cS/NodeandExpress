const fs = require("fs");

// fs.writeFile(
//   "message.txt",
//   "This is the message written from fs.readFile",
//   (err) => {
//     if (err) throw err;
//     console.log("this file has been saved");
//   }
// );

fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
