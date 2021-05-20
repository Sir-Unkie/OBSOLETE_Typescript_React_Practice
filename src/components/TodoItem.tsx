import Todo from '../dataModels/todo';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ item: Todo; onRemove: (item: Todo) => void }> =
  props => {
    const removeHandler = () => {
      props.onRemove(props.item);
    };

    return (
      <li onClick={removeHandler} className={classes.item}>
        {props.item.text}
      </li>
    );
  };

export default TodoItem;
