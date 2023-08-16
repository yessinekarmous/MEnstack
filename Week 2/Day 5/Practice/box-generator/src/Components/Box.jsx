import React, { useState } from 'react'

const Box = (props) => {
    const[BoxColor,SetBoxColor]=useState("")

    const CreateBox =(e)=>{
        e.preventDefault()
        const newBox={color:BoxColor};
        props.CreatedBox(newBox)
        
    }

    return (
    <>
    <form onSubmit={CreateBox}>
        <div>Color :
        <input onChange={ (e) => {SetBoxColor(e.target.value)}} value={BoxColor}/>
        </div>
        
        <br />
        <button>ADD</button>
        
    </form>
</>
)
}
export default Box
