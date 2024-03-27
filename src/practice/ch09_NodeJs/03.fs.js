// # I/O
const fs = require("fs");


// # 동기식 읽기(순서대로)

// const file01 =fs.readFileSync("./01.전역변수.js");
// console.log(file01.toString());
// console.log("======================")
// const file02 = fs.readFileSync("./02.os.js")
// console.log(file02.toString());
// console.log("======================")


// # 비동기식 읽기(무작위)

const file01 =fs.readFile("./01.전역변수.js", (err, data) => {
  console.log(data.toString());
});

console.log("======================");
const file02 =fs.readFile("./02.os.js", (err, data) => {
  console.log(data.toString());
});
console.log("======================");


// 올바른 비동기식 읽기 
fs.readFile("./01.전역변수.js", (err, data) => {
  console.log(data.toString());
  console.log("======================");
  fs.readFile("./02.os.js", (err, data) => {
    console.log(data.toString());
    console.log("======================");
  });
});

// ** 콜백: 내가 할일 하고 이후에 해야할 일 지정

