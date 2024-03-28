import '../apps/App.css';
import { useState } from 'react';

// num1, num2를 받는다/ 어떤 연산을 할 것인지 고른다 / 결과값을 result에 띄움
export default function CalcForm() {  
  
  const [evalString, setEvalString] = useState('');

  const handleButtonClick = (value, event) => {
    event.preventDefault();
    if (value === '=') {
      try {
        // 계산 수행
        const result = eval(evalString);
        setEvalString(result.toString());
      } catch (error) {
        // 에러 처리
        setEvalString('Error');
      }
    } else if (value === 'C') {
      // 클리어
      setEvalString('');
    } else {
      // 숫자나 연산자 추가
      setEvalString((prev) => prev + value);
    }
  };

  return (
    <form>
      <table>
        <tbody>
          <tr>
            <td className="result" colSpan="4">{evalString}</td>
            <input type="hidden" name="eval" value={evalString} />
          </tr>
          
          <tr>
            {/* onClick: 클릭, 클릭으로 e(이벤트)가 발생 시 'C'와 같은 것과 e를 handleButtonClick함수의 인자로 전달 */}
            <td><button type="submit" onClick={(e) => handleButtonClick('C', e)}>C</button></td>
            <td><button type="submit" onClick={(e) => handleButtonClick('/', e)}>÷</button></td>
            <td><button type="submit" onClick={(e) => handleButtonClick('*', e)}>×</button></td>
            <td><button type="submit" onClick={(e) => handleButtonClick('-', e)}>－</button></td>
          </tr>
          
          <tr>
            <td><button type="submit" onClick={(e) => handleButtonClick('7', e)}>7</button></td>
            <td><button type="submit" onClick={(e) => handleButtonClick('8', e)}>8</button></td>
            <td><button type="submit" onClick={(e) => handleButtonClick('9', e)}>9</button></td>
            <td rowSpan="2"><button type="submit" onClick={(e) => handleButtonClick('+', e)} style={{ height: '105px' }}>＋</button></td>
          </tr>
          
          <tr>
            <td><button type="submit" onClick={(e) => handleButtonClick('4', e)}>4</button></td>
            <td><button type="submit" onClick={(e) => handleButtonClick('5', e)}>5</button></td>
            <td><button type="submit" onClick={(e) => handleButtonClick('6', e)}>6</button></td>
          </tr>
          
          <tr>
            <td><button type="submit" onClick={(e) => handleButtonClick('1', e)}>1</button></td>
            <td><button type="submit" onClick={(e) => handleButtonClick('2', e)}>2</button></td>
            <td><button type="submit" onClick={(e) => handleButtonClick('3', e)}>3</button></td>
            <td rowSpan="2"><button type="submit" onClick={(e) => handleButtonClick('=', e)} style={{ height: '105px' }}>＝</button></td>
          </tr>
          
          <tr>
            <td colSpan="3"><button type="submit" onClick={(e) => handleButtonClick('0', e)} style={{ width: '159px' }}>0</button></td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

