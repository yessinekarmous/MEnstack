import axios from 'axios'
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import "../App.css";

const Form = () => {
    const [name,setName]=useState("")
    const navigate=useNavigate()


    
    const HandlerSubmit=(e)=>{
        e.preventDefault()
        const newOne={name}
        axios.post("http://localhost:5000/api/create",newOne)
        .then((res)=>{
        console.log("Created succefully🆗🆗🆗🆗")
            navigate("/")
        })
        .catch((err)=>{
            console.log(">>>>>>>>>",err)
        })
    }
    

  return (
      
    <div >
        <Link  className='font-italic'  to={"/"}>Home</Link>
        <p  className='text-success font-italic'>Add a new author:</p>
        <form onSubmit={HandlerSubmit} >
  <div className="form-group border border-dark w-25 p-3 d-flex flex-column ">
    <label>Name:</label>
    <input onChange={(e)=>{setName(e.target.value)}}  className="form-control" id="exampleInputEmail1"  />
    <br />
    <div className='pl-5 Button'>
    <button className="btn btn-primary  " onClick={()=>{navigate("/")}}>Cancel</button>
    <input className="btn btn-primary" type="submit" value="Submit" />
    
    </div>
  </div>
  
  </form>

  </div>)}

export default Form

