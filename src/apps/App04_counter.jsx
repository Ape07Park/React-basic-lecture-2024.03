
import { useState } from 'react';
import './App.css';

function App() { 
  /* 화면에 랜더링되는 값 변경 원할 시 useState사용할 것 */
  const [count, setCount] = useState(0); // useState(0:초기값): [랜더링 할 변수, 변경시킬 수 있는 세터]
  const [numbers, setNumbers] = useState([]);
  
  // 변수로 설정 시 랜더링 x. useState가 불러온 값인 count

  // 화면에 써져있는 값에 새로운 값 더하기 
  const handleClick = () => {
    setCount(count+1);
    
    // 증가하기 누를 때마다 *새로운 참조객체가 만들어지면서* 화면에 랜더링 
    let newNumbers = [...numbers, count + 1];
    setNumbers(newNumbers);

    // numbers.push(count + 1); 비권장
    console.log(count);
  }
  return (
    <> 
      <div style={{fontSize: "5rem"}}>{count}</div>
      <h3>{numbers}</h3>
      <button onClick={handleClick}>증가하기</button>

    </>
  );
}

export default App;
