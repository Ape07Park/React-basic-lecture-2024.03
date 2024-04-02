import '../apps/App.css';
import { useState } from 'react';
// 1. 버튼 클릭 시 1씩 증가/조건:10이 넘으면 1로 리셋/ 리셋하기 누르면 1로 리셋
export default function Count() {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    let newCount = count + 1
    setCount(newCount);
    if (newCount > 10) {
      setCount(1)
    }
  }

  const resetCount = (count) => {
    count = 1;
    setCount(count);
  }

  return (
    <div className="container">
    <h2 id="count">count = {count}</h2>
    <br />
    <button className="btn" onClick={increaseCount}>
      증가시키기
    </button>

    <button className="btn" onClick={resetCount}>
      리셋하기
    </button>
  </div>

  );
}