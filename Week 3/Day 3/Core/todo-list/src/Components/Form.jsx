import React, { useState } from 'react'

const Form = () => {
const [Todo,SetTodo]=useState([])
const[NewTodo,SetNewTodo]=useState()


const Add= (e) => {
    e.preventDefault()
    SetTodo([...Todo,NewTodo])
    SetNewTodo("")
}
const Delete=(index)=>{
    const DeletedTodo=Todo.filter((value,number)=> number!==index);
    SetTodo(DeletedTodo)
}

  return (
    <>
    <form onSubmit={Add}>
        <input type="text" value={NewTodo} onChange={(e)=>{SetNewTodo(e.target.value)}} />
        <ul>
            {Todo.map((element,index)=>(
                <li key={index}>{element} <input id='Check' type="checkbox"  /><button  onClick={()=>Delete(index)}>Delete</button></li>
            ))}
        </ul>
        <button type='Submit'>ADD</button>
    </form>

    </>
  )
}

export default Form