console.log(__filename);

console.log(__dirname);

console.log(process.env.JAVA_HOME);

for (let i = 0; i < 10; i++){
  if(i == 5){
    process.exit(); // 프로그램 종료
  }
  else{
    console.log(i);
  }
}