// const amount = 9;

// if (amount < 10) {
//   console.log("small number");
// } else {
//   console.log("Large number");
// }
// console.log(`Hello world ${amount}`);

// console.log(__dirname);
// setInterval(() => {
//   console.log("hello world");
// }, 1000);

// const names = require("./4-names");
// const sayHi = require("./5-utils");
// const data = require("./6-alternative-flabor");
// require("./7-miind-grenade");
// sayHi("susan");
// sayHi(names.john);
// sayHi(names.peter);

// const os = require("os");

// // info about current user
// const user = os.userInfo();
// console.log(user);

// console.log(`The System Uptime is ${os.uptime()} seconds`);

// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };
// console.log(currentOS);

// const path = require("path");

// console.log(path.sep);
// const filePath = path.join("/content", "subfolder", "test.txt");
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
// console.log(absolute);

// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./content/first.txt", "utf-8");
// const second = readFileSync("./content/second.txt", "utf-8");

// // console.log(first, second);
// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the result: ${first},${second}`,
//   { flag: "a" }
// );

// const { readFile, writeFile } = require("fs");

// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;
//   readFile("./content/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;
//     writeFile(
//       "./content/result-async.txt",
//       `Here is the result:${first},${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(result);
//       }
//     );
//   });
// });

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Welcome to our home page");
//   } else if (req.url === "/about") {
//     res.end("Here is our short history");
//   } else {
//     res.end(
//       `
//     <h1>Oops!</h1>
//     <p>We can't seem to find the page that you are looking for</p>
//     <a href="/">Back home</a>
//     `
//     );
//   }
// });

// server.listen(5000);

const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
