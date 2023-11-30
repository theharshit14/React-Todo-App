import React, { useState } from 'react'
import Todoinput from './components/Todoinput'
import './App.css'
import Todolist from './components/Todolist';

function App() {
  const [listTodo,setlistTodo]=useState([]);
  let addList = (inputText)=>{
    if (inputText!=='') 
    setlistTodo([...listTodo,inputText]);
  }
  const deletelistItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1); 
    setlistTodo([...newListTodo]);
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <h1 className='heading'>Todo List</h1>
        <div style={{padding:'15px'}}>
        <Todoinput addList={addList}/>
        <h1 className="app-heading">Tasks</h1>
        <hr />
        
        {listTodo.map((listItem,i)=>{
          return (
            <Todolist key={i} index={i} item={listItem} deletelistItem={deletelistItem}/>
          )
        })}
        </div>
  
      </div>
    </div>
  )
}

export default App
