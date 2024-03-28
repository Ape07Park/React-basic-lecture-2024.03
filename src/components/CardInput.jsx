import '../apps/App.css';
import { useState } from 'react';

/* 매겨변수 받기 */
export default function CardInput(props) {  // props:properties
  const [name, setName] = useState(props.name); // useState(0:초기값): [랜더링 할 변수, 변경시킬 수 있는 세터]
  const [content, setContent] = useState("")
 
  return (
    <div className="card"> 
      <div style={{fontSize: "5rem"}}>{name}</div>
      <h3>{content}</h3>
      <br />
      <button  onClick={() => {
      const newName = prompt("이름을 입력하시오");
      setName(newName);
    }}>이름 바꾸기</button>
    <br/>
    <input  type="text" onChange={event => {
      // event.target으로 바뀌는 거 잡을 수 있음 그래서 바뀌면 바로 반영됨
      setContent(event.target.value);
    }}/>
    </div>
  );
}
