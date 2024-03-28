import '../apps/App.css';

export default function Card() { // export default을 앞에 놓음으로써 맨 마지막에 export default 제거 o
  const person = {name:"james", job:"Programmer"}; // 자바스크립트 영역 
  
  return (
    <> 
    <h1 style={{backgroundColor: "beige"}}> name: {person.name}</h1> 
    <hr /> 
    <img src="https://picsum.photos/200/200" className="photo" /> 
    <br />
    <h3>job: {person.job}</h3>
    </>
  );
}
