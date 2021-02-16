
/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList"

function App() {
  
  //State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //Using effect
  useEffect(() => {
    const filterHandler = () => {
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
          case 'uncompleted':
            setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
          default:
            setFilteredTodos(todos);
            break;
      }
    };
    filterHandler();
  },[todos, status]);

  //Functions
  
  
  return (
    <div className="App">
      <header>
      <h1>Todo-List </h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}  />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos}todos={todos}/>
    </div>
  );
}

export default App;
