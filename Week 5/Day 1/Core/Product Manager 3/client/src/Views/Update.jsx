import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
const {id}=useParams()
const navigate = useNavigate()

    const [NewTitle,SetNewTitle]=useState("")
    const [NewPrice,SetNewPrice]=useState("")
    const [NewDes,SetNewDes]=useState("")

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/FindOne/${id}`)
        .then((res)=>{
            SetNewTitle(res.data.OneProduct.Title)
            SetNewPrice(res.data.OneProduct.Price)
            SetNewDes(res.data.OneProduct.Description)
          })
          .catch((err)=>console.log(err))
        },[id])
    

    const HandlerSub=(e)=>{
        e.preventDefault()
        console.log(id)
        axios.put(`http://localhost:5000/api/edit/${id}`,{
            Title:NewTitle,
            Price:NewPrice,
            Description:NewDes
        })
        .then((res)=>{console.log(res)
        navigate("/")
        })
        .catch((err)=>{console.log(err)})
    SetNewTitle("")
    SetNewPrice("")
    SetNewDes("")
    }
    
  return (
    <div >
       
        <form onSubmit={HandlerSub} style={{width:"100%",display:'flex',flexDirection:"column",gap:"10px",alignItems:'center'}}>
        <div  style={{width:"45%",backgroundColor:"rgb(246,246,246)",padding:"12px",display:'flex',justifyContent:"space-between",alignItems:"center"}}>
            New Title:<input value={NewTitle}   className="form-control" style={{width:"40%"}} type="text" onChange={(e)=>SetNewTitle(e.target.value)} />
        </div>
        
        <div style={{width:"45%",backgroundColor:"rgb(246,246,246)",padding:"12px",display:'flex',justifyContent:"space-between",alignItems:"center"}}>
            New Price:<input value={NewPrice} className="form-control" style={{width:"40%"}} type="text"  onChange={(e)=>SetNewPrice(e.target.value)}  />
        </div>
        
        <div style={{width:"45%",backgroundColor:"rgb(246,246,246)",padding:"12px",display:'flex',justifyContent:"space-between",alignItems:"center"}}>
            New Description:<input value={NewDes}  className="form-control" style={{width:"40%"}} type="text"  onChange={(e)=>SetNewDes(e.target.value)}  />
        </div>
        <button className='btn btn-outline-primary'>Submit</button>
        </form>

    </div>
  )
}

export default Update