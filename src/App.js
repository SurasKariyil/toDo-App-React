import React from 'react';
import { useState } from 'react';
import './App.css';


function App() {
  const [toDos, setTodos] = useState([])
  const [dtTodo,setDlt] = useState([])
  const [toDo, setTodo] = useState('')
  const date = new Date().toString();


  return (
    <div className="app">
      <div className="mainHeading">
        <h1><i>ToDo  List</i></h1>
      </div>
      <div className="subHeading">
        <br />

        <h2><i>Heyy , it's {date} </i></h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setTodos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
   
      
      <div className="todos">
        {toDos.map((obj) => {
          return ( <div className="todo">
          <h><i>! Pending...</i></h>
            <div className="left">
              <input onChange={(e) => {
                console.log(e.target.checked);
                console.log(obj)
                setTodos(toDos.filter(obj2 => {
                  if (obj2.id == obj.id) {
                    obj2.status = e.target.checked
                  }
                  return obj2
                }))
              }} value={obj.status} type="checkbox" name="" id="" />
              <p>{obj.text}</p>

            </div>
            <div className="right">
              <i className="fas fa-times"></i>
            </div>
          </div>)
        })}
        <br></br>
        <h><i>Compleated list</i></h>
        {
          toDos.map((obj) => {
            if (obj.status) {
              return (<ul>
                <li>{obj.text}</li> 
                <button onClick={(e)=>{
                  console.log(e.target.value)
                  setDlt(toDos.filter(dtTodo=>{
                    if(dtTodo.id == obj.id){
                      dtTodo.status=e.target.value
                      dtTodo.status = e.target.checked
                      }
                      return dtTodo
                  }))
                }}><b>Clear Task</b></button>
              </ul>)
            }
            return null
          })
        }
      </div>
    </div>
  );
}
export default App;