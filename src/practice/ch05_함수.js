const annoy = function () {
  console.log('익명 함수');
};
function named() {
  console.log("선언적 함수");
};

annoy();
named();

// 화살표 함수(람다함수)
const arrow = () => {
  console.log('화살표 함수, 람다 함수');
};

arrow();

// 파라미터가 1개인 경우 () 생략 O
const param1 = x => {
  console.log("x=" + x);
}
param1(5);

// 함수 내부의 실행문이 return 한개밖에 없으면 {}와 return 생략 O
const add = (a, b) => a + b;
console.log(`add(3, 4) = ${add(3, 4)}`);

const func = (name, count) => {
  // if (count == undefined){ // level 1
  //   count = 0;
  // }

  // 삼항연산자로 조건문 줄이기 
  count = count ? count : 0; // level 2

  count = count || 0; // level 3 쇼 서킷 룰 
  console.log(`${name}: ${count}`);
}
func("apple", 10);
func("banana");

// 콜백함수: 함수의 매개 변수로 전달되는 함수 
function call3Times(callback){
  for (let i = 0; i < 3; i ++){
    callback();
  }
}
// 둘 다 가능
// call3Times(annoy);
// call3Times(named);

// call3Time(function (){
//   console.log('콜백 함수로 익명 함수 직접 생성');
// });

// 작업하고 콜백함수 써서 다른 걸로 감으로써 순서 보장
call3Times(() => {
  console.log('콜백 함수로 화살표 함수 직접 생성');
})


// 3가지 다 동시실행(비동기성)
setTimeout(() => {
  console.log("1000ms 이후 실행");
}, 1000);

const si = setInterval(() => {
  console.log("0.5초마다 실행");
}, 500);

setTimeout(() => {  // 3.1초 후에 반복실행되는 코드를 없앰
  clearInterval(si);
  console.log("3.1초 후에 반복실행되는 코드를 없앰");
}, 3100);



