import { AiOutlineDelete } from "react-icons/ai";
function TodoItem({ todoName, todoDate, onDelete }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">{todoName}</div>
        <div className="col-3">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDelete(todoName, todoDate)}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
