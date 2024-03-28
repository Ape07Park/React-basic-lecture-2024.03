export default function CardInput2(props) {  // props:properties
  
  const handleButtonClick = (e) => {
    if(e){
      if('C' == e){

      }
    }
    
    e.preventDefault(); // submit button을 누르면 페이지가 자동적으로 바뀌는 것 방지
    
  }
  
  return (
    <form >

        <table>

            <tr>

                <td class="result" colspan="4">${eval}</td>

                <input type="hidden" name="eval" value="${eval}"/>

            </tr>

            <tr>

                <td><button type="submit" onClick={(e) => handleButtonClick('C', e)}>C</button></td>

                <td><button type="submit" onClick={(e) => handleButtonClick('/', e)}>÷</button></td>

                <td><button type="submit" onClick={(e) => handleButtonClick('*', e)}>×</button></td>

                <td><button type="submit" onClick={(e) => handleButtonClick('-', e)}>－</button></td>

            </tr>

            <tr>

                <td><button type="submit" onClick={(e) => handleButtonClick('7', e)}>7</button></td>

                <td><button type="submit" onClick={(e) => handleButtonClick('8', e)}>8</button></td>

                <td><button type="submit" onClick={(e) => handleButtonClick('9', e)}>9</button></td>

                <td rowspan="2"><button type="submit" name="op" value="+" style="height: 105px;">＋</button></td>

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

                <td rowspan="2"><button type="submit" name="op" value="=" style="height: 105px;">＝</button></td>

            </tr>

            <tr>

                <td colspan="3"><button type="submit" name="num" value="0" style="width: 159px;">0</button></td>

            </tr>

        </table>

    </form>

  );
}
