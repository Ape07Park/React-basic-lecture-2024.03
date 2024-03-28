
import './App.css';
import CardInput from '../components/CardInput';
import CardInput2 from '../components/CardInput2';

function App() { // App이라는 새로운 태그를 만든다는 생각으로 하자. 1. 내가 만든 건 대문자로 시작 
 
    return (
      <> 
      <CardInput name={"제임스"}/> 
      <br/>
      <CardInput2 name={"마리아"} email={"maria@gmail.com"}/>
      </>
    );
  }
  
  export default App;
  

