import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (todoText, date) => {
    
    if (todoText === "" || date === "") {
      alert("Fill all fields first");
      return;
    }

    const newObject = {
      name: todoText,
      dueDate: date,
    };

    setTasks([...tasks, newObject]);
  };

  const deleteTask = (name, date) => {
    const newList = tasks.filter(
      (task) => !(task.name === name && task.dueDate === date)
    );
    setTasks(newList);
  };
  
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo addTask={addTask} />
      <TodoItems todoItems={tasks} onDelete={deleteTask}></TodoItems>
    </center>
  );
}

export default App;
