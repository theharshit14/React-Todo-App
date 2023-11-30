import React from 'react'

function Todolist(props) {
  return (
    <div>
      <li className="list-item">
        {props.item}
        <span className='icons'><i className="fa-solid fa-trash icon-delete"
        onClick={e=>{
            props.deletelistItem(props.index);
        }}></i></span>
      </li>
    </div>
  )
}

export default Todolist
