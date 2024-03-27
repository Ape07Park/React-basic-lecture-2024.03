let fruits = ['사과', '배', '감'];

for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

console.log();

for (let fruit of fruits){
  console.log(fruit);
}

// var는 재선언 o, 코드가 길어지면 어디서 어떻게 선언되는지 파악 어려움.
var x = 4;  
var x = 6;

// let은 재선언 x
let y = 4;
// let y = 6


