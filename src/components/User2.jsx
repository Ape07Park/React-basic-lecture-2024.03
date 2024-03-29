import '../apps/App.css';
import { useState } from 'react';

export default function User() {  
  const initUsers = [
  {id:1, name:"admin", email:"admin@human.com"},
  {id:2, name:"james", email:"james@human.com"}
  ];
  
  const [users, setUsers] = useState(initUsers);
  const [form, setForm] = useState({id:"", name:"", email:""});
  
  // 추가/수정
  const handleSubmit = (event) => { 
    event.preventDefault(); // submit button을 누르면 페이지가 자동적으로 바뀌는 것 방지
    const existUser = users.find(user => user.id === form.id); // user의 id와 form의 id가 같으면
    // const newUsers = [];
    if (existUser){

      // 수정
      setUsers(users.map(user => (user.id === form.id) ? form : user)) // 폼걸 받거나 기존 유저를 받거나
      // for (let user of users){
      //   if (user.id == form.id){
      //     newUsers.push(form); // 내가 입력한 거 푸쉬
      //   }else{
      //     newUsers.push(user); // 
      //   }
      //   setUsers(newUsers);
      // }
      
    }else{
      // 추가 
      setUsers([...users, form]);
    }
  }

  // 삭제
  const handleChange = (event) => {
    const { name, value} = event.target;
    setForm({...form, [name]: value});
  }
  
  // HTML
  return (
    <div className="card"> 
      <h1>사용자 목록</h1>
      <table border={1}>
        <tr><th>ID</th><th>name</th><th>email</th></tr>
        {
          users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))
        }
      </table>
      <br />  
      <form onSubmit={handleSubmit}>
        <label htmlFor='id'>ID:</label>
        <input type="text" id='id' name='id' value={form.id} 
        onChange={handleChange}
        />
        <br/>
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

      <button>추가/수정</button>
      </form>

      <button onClick={() => {
        const id = prompt("ID 값을 입력하시오");
        // 입력한 id에 해당 x 인 것들을 newUser에 담기
        const newUser = users.filter(user => user.id !== id);   
        // newUser 배열 생성 
        setUsers(newUser);        
      }}>삭제</button>
    </div>
  );
}
