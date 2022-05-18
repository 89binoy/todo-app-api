import { useEffect, useState } from "react";
import "./App.css";
import InputSection from "./Components/InputSection";
import TodoList from "./Components/TodoList";
function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableTodo, setEditableTodo] = useState(null);
  

  const fetchTodoList=()=>{
    fetch("http://localhost:3000/todoList")
    .then((response)=>response.json())
    .then(data=> setTodoList(data))

  }
  useEffect(()=>{
    fetchTodoList();
    // fetch("http://localhost:3000/todoList")
    // .then((response)=>response.json())
    // .then(data=> setTodoList(data))
  },[])
  
  return (

    <div className="App">
      <div>
        <InputSection
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        todoList={todoList}
        setTodoList={setTodoList}
        editMode={editMode}
        setEditMode={setEditMode}
        editableTodo={editableTodo}
        setEditableTodo={setEditableTodo}
        />
        <TodoList
        setTodoTitle={setTodoTitle}
        todoList={todoList}
        setTodoList={setTodoList}
        setEditMode={setEditMode}
        setEditableTodo={setEditableTodo}
        />
        
      </div>
    </div>
  );
}

export default App;
