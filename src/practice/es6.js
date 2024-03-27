// # Destructuring
let person = {name:"james", age:25, job:"Programmer"};

// 키 값과 동일한 변수명으로 값 가져오기 
const {name, age} = person;
console.log(name, age);

person = {name, age, job:"Traveller"};  // {name:name, age:age, job:"Traveller"}
console.log(person);

let fruits = ['apple', 'banana', 'cherry'];
const[a, b, c] = fruits;
console.log(a,b,c); // apple, banana, cherry

const [x, y] = fruits;
console.log(x, y);  // apple, banana

// # Rest Operator: 리엑트에서 많이 사용함 
const [l, ...m] = fruits;
console.log(l,m); // apple ['banana', 'cherry']

// # Spread Operator: ...으로 변수 안의 내용물 펼치기 가능 
// 파라미터 가변적 처리 가능 즉 여러 파라미터 와도 처리 가능  
let newFruits = [...fruits, 'melon']; 
console.log(newFruits);   // ['apple', 'banana', 'cherry', 'melon']
console.log(fruits, "melon");   // [['apple', 'banana', 'cherry'], 'melon']

let str = "Java";
console.log(...str); // J a v a

let newPerson = {...person, gender:"male"};
console.log(newPerson);



