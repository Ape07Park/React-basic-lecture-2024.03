import '../apps/App.css';
import { useState } from 'react';

/* 매겨변수 받기 */
export default function User() {  // props:properties
  const initUsers = [
  {id:1, name:"admin", email:"admin@human.com"},
  {id:2, name:"james", email:"james@human.com"}
  ];

  const [users, setUsers] = useState(initUsers);
  
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
      <button onClick={() => {
        const id = prompt("ID 값을 입력하시오");
        const name = prompt("name을 입력하시오");
        const email = prompt("email을 입력하시오");
        setUsers([...users, {id, name, email}]);
      }}>추가</button>

      <button onClick={() => {
        const id = prompt("ID 값을 입력하시오");
        // 입력한 id에 해당 x 인 것들을 newUser에 담기
        const newUser = users.filter(user => user.id != id);

        // newUser = [];
        // for (let user of users){
        //   if (user.id != id){
        //     newUser.push(user);
        //   }
        // }

        // newUser 배열 생성 
        setUsers(newUser);        
      }}>삭제</button>
    </div>
  );
}
