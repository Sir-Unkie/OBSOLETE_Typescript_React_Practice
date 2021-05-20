import React, { useRef } from 'react';
import Todo from '../dataModels/todo';
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{ addNewTodo: (newTodo: Todo) => void }> = props => {
  const todoRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const todoText = todoRef.current!.value;
    const newTodo: Todo = new Todo(todoText);
    props.addNewTodo(newTodo);
  };

  return (
    <form className={classes.form} action='' onSubmit={submitHandler}>
      <label htmlFor='text'>Todo Text</label>
      <input type='text' id='text' ref={todoRef} />
      <button type='submit'>Add todo</button>
    </form>
  );
};

export default NewTodo;
