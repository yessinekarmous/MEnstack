import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import People from './People';
import Planets from './Planets';


const Nav = () => {
    const[Select,SetSelect]=useState("People")
    const[Id,SetId]=useState("")
    const navigate = useNavigate()
    
    const HandlerCLick=(e)=>{
        e.preventDefault()
        navigate(`/${Select}/${Id}`)
    }
    

    return (
    // <div style={{width:"100%"}} >
        <form onSubmit={HandlerCLick} style={{width:"70%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        Search for :

        <select onChange={(e)=>{SetSelect(e.target.value)}}     className="form-select" style={{width:"250px",backgroundColor:"#EFEFEF"}}>
            <option value="People">People</option>
            <option value="Planets">Planets</option>
        </select>
        ID:

        <input type="text" style={{width:"10%",backgroundColor:"#EFEFEF"}} onChange={(e)=>{SetId(e.target.value)}} />

        <button  className="btn btn-primary">Search</button>

        </form>
        
    // </div>
    )
}

export default Nav