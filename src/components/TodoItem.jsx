import { MdDelete } from "react-icons/md";
import style from "./TodoItem.module.css";

const TodoItem = ({ todos, handleDelTodo, handleCheckbox, showFinished }) => {
  return (
    <div className={style.todosList}>
      <h2>Your Todos</h2>
      {todos.length == 0 && (
        <div className={`${style["noDisplay"]}`}>No Todos to display</div>
      )}
      <div>
        {todos.map((item) => {
          return (
            (showFinished || !item.isCompleted) && (
              <div className={`row ${style["list-row"]}`} key={item.id}>
                <div className={`col-5 ${style["name-display"]}`}>
                  <input
                    type="checkbox"
                    checked={item.isCompleted}
                    onChange={() => handleCheckbox(item.id)}
                  />
                  <div className={item.isCompleted ? style.completed : ""}>
                    {item.name}
                  </div>
                </div>
                <div className="col-3">{item.dueDate}</div>
                <div className={`col-2 ${style["del-btn-container"]}`}>
                  <button
                    type="button"
                    className={`btn btn-danger ${style["del-btn"]}`}
                    onClick={() => handleDelTodo(item.id)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default TodoItem;
