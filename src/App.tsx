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
  const onRemoveHandler = (item: Todo) => {
    setTodos((prevState: Todo[]) => {
      return prevState.filter((elem: Todo) => {
        return elem.id !== item.id;
      });
    });
  };
  return (
    <div>
      <NewTodo addNewTodo={addNewTodoHandler}></NewTodo>
      <Todos onRemove={onRemoveHandler} items={todos}></Todos>
    </div>
  );
}

export default App;
