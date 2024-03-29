import { useEffect, useState } from 'react';
import './App.css';
import Header from '../todo_components/Header';
import TodoList from '../todo_components/TodoList';

import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const filters = ['all', 'active', 'completed'];
  const [filter, setFilter] = useState('all');
  return (

    <Card style={{ width: '30rem', backgroundColor:"mediumpurple" }} >
    <Spinner animation="border" />
    
    <Card.Body style={{backgroundColor:"mediumpurple"}}>
      <Card.Title>Todo List
      <Spinner animation="border" />
      </Card.Title>
      <Card.Text>
    {/* 기능 */}
    <div className='card'>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </div>
    {/* 기능 */}
      </Card.Text> 
    </Card.Body>
  </Card>
  
  
  );
}

export default App;