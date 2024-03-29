import { useEffect, useState } from 'react';
import './App.css';
import Header from '../todo_components/Header';
import TodoList from '../todo_components/TodoList';

function App() {

  return (
    <div className='card'>
      <Header />
      <TodoList />
    </div>
  );
}

export default App;