import '../apps/App.css';
/* 매겨변수 받기 */
export default function Card2(props) {  // props:properties
  
  return (
    <div className="card"> 
    <h1 style={{backgroundColor: "skyblue"}}>  {props.person.name}</h1>  {/* props에 Card에 있는 person에 james*/ }
    <hr /> 
    {/* 이유 = JavaScript에서는 문자열 내에서 변수나 표현식을 사용하려면 템플릿 리터럴을 사용해야 하는데, 이는 백틱으로 문자열을 감싸고, ${}` 구문을 사용하여 표현합니다.*/}
    <img src={`https://picsum.photos/200/200?q=${props.person.id}`} className="photo" /> 
    <br />
    <h3> {props.person.job}</h3>
    </div>
  );
}
