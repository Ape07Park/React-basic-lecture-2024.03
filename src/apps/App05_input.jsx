
import { useState } from 'react';
import './App.css';


function App() { 
  /* 화면에 랜더링되는 값 변경 원할 시 useState사용할 것 */
  const [name, setName] = useState("제임스"); // useState(0:초기값): [랜더링 할 변수, 변경시킬 수 있는 세터]
  const [content, setContent] = useState("")
 
  return (
    <div className="card"> 
      <div style={{fontSize: "5rem"}}>{name}</div>
      <h3>{content}</h3>
      <br />
      <button style={{padding: "5px", margin:"5px"}} onClick={() => {
      const newName = prompt("이름을 입력하시오");
      setName(newName);
    }}>이름 바꾸기</button>
    <input style={{padding: "5px", margin:"5px"}} type="text" onChange={event => {
      // event.target으로 바뀌는 거 잡을 수 있음 그래서 바뀌면 바로 반영됨
      setContent(event.target.value);
    }}/>
    </div>
  );
}


export default App;

