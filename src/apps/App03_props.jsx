
import './App.css';
import Card from '../components/Card2';
function App() { 
  // 파라미터 주기 위한 방법
  const james = {id:1, name:"james", job:"Back-end Programmer"};
  const maria = {id:2, name:"maria", job:"React JS Programmer"};
  return (
    <> 
    <Card person={james}/> 
    <br />
    <Card person={maria}/>
    </>
  );
}

export default App;
