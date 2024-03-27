let s = `He said "I am happy"`; // template literal 
console.log(s);

let year = new Date().getFullYear();
console.log(`올해는 ${year}년 입니다`); // 변수값을 쓰고 싶으면 ${변수}

let toggle = true;
for (let i = 0; i < 4; i++){
  toggle = !toggle;
  console.log(toggle); 
}

console.log(`2 == '2' is ${2 == '2'}`); // true 값은 같음
console.log(`2 === '2' is ${2 === '2'}`); // false 값은 같으나 자료형은 다름 

// 참조 자료형에 const 쓰면 값은 변해도 주소값은 변하지 않음 

