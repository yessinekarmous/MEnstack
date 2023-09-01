import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate,Link, useParams } from 'react-router-dom'


const Update = (props) => {
    const [name,setName]=useState(null)

    
    
    const navigate=useNavigate()
    const {id}=useParams()

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/Find/${id}`)
        .then((res)=>{
            setName(res.data.OneAuthor.name)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[id])

    const HandlerSubmit=(e)=>{
        e.preventDefault()
        const newOne={name}
        axios.put(`http://localhost:5000/api/edit/${id}`,newOne)
        .then((res)=>{
        console.log("Updated succefully🆗🆗🆗🆗")
            navigate("/")
        })
        .catch((err)=>{
            console.log(err)
        })
    }
     
  return (
        <div>
            {name ?  <>
        <Link  className='font-italic'  to={"/"}>Home</Link>
       <p  className='text-success font-italic'>Edit this author:</p>
       <form onSubmit={HandlerSubmit} >
       <div className="form-group border border-dark w-25 p-3 d-flex flex-column ">
           <label>Name:</label>
           <input value={name} onChange={(e)=>{console.log(setName(e.target.value))}}  className="form-control" id="exampleInputEmail1"  />
           <br />
           <div className='pl-5 Button'>
           <button className="btn btn-primary  " onClick={()=>{navigate("/")}}>Cancel</button>
           <input className="btn btn-primary" type="submit" value="Submit" />
           </div>
       </div>
 
 </form>

</> : <>
<p className="font-weight-bold text-danger">We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?</p> 
<Link className=' font-italic' to={"/new"} >Add an Author </Link>
<br />
<Link  className='font-italic'  to={"/"}>Home</Link>
 </>}
      
 
        
      
      
      
      
      
      
      
      </div>
      )}
   
   

export default Update