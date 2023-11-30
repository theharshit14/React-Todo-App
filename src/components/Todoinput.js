import React, { useState } from 'react'

function Todoinput(props) {
    const [inputText,setinputText] = useState('');
    const handleEnterPress  = (e)=>{
      if(e.keyCode===13){
        props.addList(inputText); setinputText("");
      }
    }
  return (
    <div className="input-container">
        <input type="text" className='input-box-todo' placeholder='Add your task'
        value={inputText}
        onChange={e=>{
            setinputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
        />  
        <button className='add-btn' onClick={()=>{
          props.addList(inputText); setinputText("");
        }}>+</button>
    </div>
  )
}

export default Todoinput
