import { useState } from "react";
import { MdOutlineAdd } from "react-icons/md";

function AddTodo({ addTask }) {
  const [todoText, setTodoText] = useState("");
  const [date, setDate] = useState("");

  const handleAdd = () => {
    addTask(todoText, date);
    setTodoText("");
    setDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
        </div>

        <div className="col-3">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAdd}
          >
            <MdOutlineAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;