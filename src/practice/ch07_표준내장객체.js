// # String 관련 메소드 

let str = "c:/Temp/ss/profile/james.jpg";
// 파일의 타입
let idx = str.lastIndexOf('.');
console.log(str.substring(idx+1));
// 파일이 존재하는 제일 마지막 디렉토리 명 
let arr = str.split('/');
console.log(arr[arr.length - 2]);

// # Array(list) 객체 메소드
const fruits = ['apple', 'banana', 'cherry'];
fruits.push('melon');
console.log(fruits.join(', '));

const numbers = [4, 7, 10, 9, 15, 6];
console.log(numbers.sort((x , y) => x - y)); // 오름차순 정렬, 배열 자체가 변함
console.log(numbers);

// fruits.forEach(value => {
//   console.log(value);
// });

// # forEach, map, reduce는 한줄에 표시 가능해서 리엑트에서 많이 사용함

fruits.forEach((value, index) => { // 값, 인덱스
  console.log(value, index);
});

let power = numbers.map(val => val * val);
console.log(power);

let even = numbers.filter(val => val % 2 == 0);
console.log(even);

let six = fruits.filter(val => val.length >= 6);
console.log(six);

let sum = numbers.reduce((prev, curr) => prev + curr, 0);  // 0은 시작값
console.log(sum); // 51, [4, 7, 10, 9, 15, 6]의 합
// 0 1 -> 1
// 1 2 -> 3
// 3 3 -> 6
console.log(numbers.reduce((prev, curr) => prev * curr, 1));


// # JSON 관련 메서드 
const complex = [
  {name:"pad", price:150000}, {name:"mouse", price:80000}, {name:"pan", price:30000}
];
// 객체 -> JSON
const jsonComplex = JSON.stringify(complex);
console.log(jsonComplex);

// JSON -> 객체
const parseComplex = JSON.parse(jsonComplex)
console.log(parseComplex);

