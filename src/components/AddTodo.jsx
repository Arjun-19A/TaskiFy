import { useState } from "react";
import style from "./AddTodo.module.css";

const AddTodo = ({ handleAddTodo }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAdd = () => {
    if (!todoName || !todoDate) return;
    handleAddTodo(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };
  return (
    <div className={`addTodo ${style["addTodo"]}`}>
      <h2>Add Todos</h2>
      <div className={`row ${style["kg-row"]}`}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            onChange={handleNameChange}
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            onChange={handleDateChange}
            value={todoDate}
            onClick={(e) => e.target.showPicker?.()}
          />
        </div>
        <div className="col-2">
          <button type="button" className={`btn btn-info ${style["add-btn"]}`} onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
