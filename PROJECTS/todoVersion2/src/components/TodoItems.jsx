import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDelete }) => {
  if (todoItems.length === 0) return <h4>No tasks to do.</h4>
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDelete={onDelete}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;