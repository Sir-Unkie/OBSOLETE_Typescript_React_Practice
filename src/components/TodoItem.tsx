import Todo from '../dataModels/todo';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ item: Todo }> = props => {
  return <li className={classes.item}>{props.item.text}</li>;
};

export default TodoItem;
