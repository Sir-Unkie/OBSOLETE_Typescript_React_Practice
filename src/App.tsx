import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Todo from './dataModels/todo';
import NewTodo from './components/NewTodo';
import { useState } from 'react';

// const DUMMY_ITEMS = ['first', '2', 'third'];

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // let todos = [new Todo('play'), new Todo('chill')];
  const addNewTodoHandler = (newTodo: Todo) => {
    setTodos((prevState: Todo[]) => {
      return [newTodo, ...prevState];
    });
  };
  return (
    <div>
      <NewTodo addNewTodo={addNewTodoHandler}></NewTodo>
      <Todos items={todos}></Todos>
    </div>
  );
}

export default App;
