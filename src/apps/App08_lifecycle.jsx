
import { useEffect, useState } from 'react';
import './App.css';


function App() { 
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleFile = () => {
    fetch("data/products.json") // 1) products.json 읽기
      .then(res => res.json())   // json -> 읽을 수 있게 바꾸기 2) 그 다음 진행은 콜백(then)으로 읽는 것
      .then(data => {
        console.log("데이터를 네트워크에서 받아옴");
        console.log(data);
      });
  }
  // 무한루프 방지를 위해 useEffect 사용
  useEffect(() => {
    fetch("data/products.json") // 1) products.json 읽기
        .then(res => res.json())   // json -> 읽을 수 있게 바꾸기 2) 그 다음 진행은 콜백(then)으로 읽는 것
        .then(data => {
          console.log("데이터를 네트워크에서 받아옴");
          console.log(data);
          
          setProducts(data); // setProduct 다시 불러옴 따라서 무한루프
        });
          return () => {
            console.log("죽을 때 마지막으로 실행되어야 하는 코드");
          }
        }, [checked] ); //  checked가 바뀔 때마다 실행 
        // } , []); 최초 한번만 하고 종료 

  return (
    <div className='card'>
      <ul>프로덕트 목록<br />
        {
          products.map((products, index) => (
            <li key ={index}>{products.name} {products.price}</li>
          ))
        }

      </ul>

     <button onClick={handleFile}>파일 읽기</button>
    </div>
  );
}

export default App;

