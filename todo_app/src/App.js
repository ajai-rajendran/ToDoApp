import {React, useId, useState} from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ToDoHero from "./components/ToDoHero";
import ToDoList from "./components/ToDoList";
function App() {
  const [toDos, setToDos] = useState([]);
  
  const todos_completed = toDos.filter(toDo=>toDo.isCompleted === true).length;
  const total_todos = toDos.length; 
  return (
    <div className="wrapper">
      <Header />
      <div className="app-container">
        <ToDoHero todos_completed={todos_completed} total_todos={total_todos} />
        <Form setToDos={setToDos}/>
      </div>
      <ToDoList todos={toDos} />
    </div>
  );
}

export default App;
