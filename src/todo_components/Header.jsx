import '../apps/App.css';

export default function Header({filters, filter, onFilterChange}) {
  return (
    <header>
      <ul style={{backgroundColor:"mediumpurple"}}>
        {/* */}
        <h1 style={{textAlign:"center"}}>해야 할 일</h1>
        {
          filters.map((value, index) => (
            <li key={index}>
              <button onClick={() => onFilterChange(value)}>{value}</button>
            </li>
          ))
        }  
      </ul>   
      <hr/>
    </header>
  );
}