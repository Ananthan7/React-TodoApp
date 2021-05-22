import React, { useState } from 'react';
import './App.css';

function App() {
  const date=new Date();
  // state
  const [todos,setTodos] = useState([]);
  const [todo,setTodo] = useState('');

  const todoData = (e) => {
    setTodo(e.target.value);
    e.preventDefault()
  }
  const storeTodo =()=>{
    setTodos([...todos,todo]);
  }
  const deleteTodo= key =>{
    setTodos(()=>todos.filter((data,index)=>index!==key))
    
  }
  return (
    <div className="container">
      <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Helooo... its {date.getDate()} /{date.getMonth()}</h2>
      </div>
      <div className="input">
        <input value={todo} onChange={todoData} type="text" placeholder="🖊️ Add item..." />
        <i onClick={storeTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        { todos.map((data,index) =>{
          return( 
            <div className="todo">
              <div className="left">
                <input type="checkbox" name="" id="" />
                <p key={index}>{data}</p>
              </div>
              <div className="right">
                <i onClick={()=>deleteTodo(index)} className="fas fa-times"></i>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    </div>
  )
}

export default App
