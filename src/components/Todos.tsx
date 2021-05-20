import Todo from '../dataModels/todo';
import TodoItem from './TodoItem';

const Todos: React.FC<{ items: Todo[] }> = props => {
  return (
    <ul>
      {props.items.map(item => (
        <TodoItem key={item.id} item={item}></TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
