import React, { useState } from 'react'

const Form = (props) => {
    const [Color,SetColor]=useState("")
    const [Width,SetWidth]=useState("")
    const [Height,SetHeight]=useState("")

    const CreateBox=(e)=>{
        e.preventDefault()
        const NewBox={color:Color,
        width:Width+"px",height:Height+"px"}
        props.CreatedBox(NewBox)

    }
  return (
    <div>
        <form onSubmit={CreateBox}>
            Color:
            <input type="text" placeholder='color....' onChange={(e)=>{SetColor(e.target.value)}}/>
            <input type="text" placeholder='width....' onChange={(e)=>{SetWidth(e.target.value)}}/>
            <input type="text" placeholder='height....' onChange={(e)=>{SetHeight(e.target.value)}}/>
            <button>ADD</button>


        </form>


    </div>
  )
}

export default Form