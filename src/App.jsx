import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import ShowFinished from "./components/ShowFinished";
import { useState,useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos")) 
      setTodos(todos)
    }
  }, [])
  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  const handleAddTodo = (todoName, todoDate) => {
    const newTodo = {
      id: Date.now(),
      name: todoName,
      dueDate: todoDate,
      isCompleted: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    saveToLS()
  };

  const handleDelTodo = (id) => {
    const newTodo = todos.filter((items) => items.id !== id);
    setTodos(newTodo);
    saveToLS()
  };

  const handleCheckbox = (id) => {
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(newTodos);
    saveToLS()
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="todoContainer">
        <AppName></AppName>
        <AddTodo handleAddTodo={handleAddTodo}></AddTodo>
        <ShowFinished toggleFinished={toggleFinished} showFinished={showFinished}></ShowFinished>
        <div className="separate"></div>
        <TodoItem
          todos={todos}
          handleDelTodo={handleDelTodo}
          handleCheckbox={handleCheckbox}
          showFinished={showFinished}
        ></TodoItem>
      </div>
    </>
  );
}

export default App;
