import Todo from '../dataModels/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[]; onRemove: (item: Todo) => void }> =
  props => {
    const onRemoveHandler = (item: Todo) => {
      props.onRemove(item);
    };
    return (
      <ul className={classes.todos}>
        {props.items.map(item => (
          <TodoItem
            onRemove={onRemoveHandler}
            key={item.id}
            item={item}
          ></TodoItem>
        ))}
      </ul>
    );
  };

export default Todos;
