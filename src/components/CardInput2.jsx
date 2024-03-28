import '../apps/App.css';
import { useState } from 'react';

/* 매겨변수 받기 */
export default function CardInput2(props) {  // props:properties
  const [form, setForm] = useState({name:props.name, email:props.email});
  const handleSubmit = (event) => {
    event.preventDefault(); // submit button을 누르면 페이지가 자동적으로 바뀌는 것 방지
    console.log(form);
  }
  const handleChange = (event) => {
    const { name, value} = event.target;
    setForm({...form, [name]: value});
  }
  return (
    <div className="card"> 
      <div style={{fontSize: "5rem"}}>{form.name}</div>
      <h3>{form.email}</h3>
      <br />    
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>이름:</label>
        <input type="text" id='name' name='name' value={form.name} 
        onChange={handleChange}
        />
        <br/>
        <label htmlFor='email'>이메일</label>
        <input type="text" id='email' name="email" value={form.email} 
        onChange={handleChange}
        />
        <br/>
      <button>제출</button>
      </form>
    </div>
  );
}
