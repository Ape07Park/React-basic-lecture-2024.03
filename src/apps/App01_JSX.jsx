
import './App.css';

function App() { // App이라는 새로운 태그를 만든다는 생각으로 하자. 1. 내가 만든 건 대문자로 시작 
  const name = "james"; // 자바스크립트 영역 
  const foods = ["피자", "삼겹살", "불고기"];
  return (
    <> {/* 하나의 태그로 감싸줘야함 즉 하나의 태그(네모)안에 넣어야 함 */}
    <h1 style={{backgroundColor: "beige"}}> name: {name}</h1> {/* JS code - {} 안에 것. css와 구분을 위해 {{}} 사용 */} 
    <hr />  {/* 반드시 닫는 태그가 필요함. */}
    <img src="https://picsum.photos/200/200" className="photo" /> {/* 클래스 넣을 때 className으로 해서 넣음. 이유는 JS의 클래스와 같아서*/}
    <br />
    </>
  );
}

export default App;
