import React, { useState } from 'react'
import axios from 'axios'

const Form = (props) => {
    const [Title,SetTitle]=useState("")
    const [Price,SetPrice]=useState("")
    const [Des,SetDes]=useState("")

    const {refresh}=props
    //Creating a Product
    const HandlerSubmit=(e)=>{
        e.preventDefault()
        const newObj={
            Title,
            Price,
            Description:Des
        }
        axios.post("http://localhost:5000/api/CreateProduct",newObj)
            .then(res=>{
                console.log("Product added🆗🆗🆗🆗")
                refresh()
            })
            .catch(err=>console.log(err))
        SetTitle("")
        SetPrice("")
        SetDes("")
    }
    

  return (
    <div>
        {/* {JSON.stringify(Title)} */}
        <form onSubmit={HandlerSubmit}  style={{width:"100%",display:'flex',flexDirection:"column",gap:"10px",alignItems:'center'}}>
        
        <div  style={{width:"45%",backgroundColor:"rgb(246,246,246)",padding:"12px",display:'flex',justifyContent:"space-between",alignItems:"center"}}>
            Title:<input value={Title} className="form-control" style={{width:"40%"}} type="text" onChange={(e)=>{SetTitle(e.target.value)}} />
        </div>
        
        <div style={{width:"45%",backgroundColor:"rgb(246,246,246)",padding:"12px",display:'flex',justifyContent:"space-between",alignItems:"center"}}>
            Price:<input value={Price}  className="form-control" style={{width:"40%"}} type="text"  onChange={(e)=>{SetPrice(e.target.value)}} />
        </div>
        
        <div style={{width:"45%",backgroundColor:"rgb(246,246,246)",padding:"12px",display:'flex',justifyContent:"space-between",alignItems:"center"}}>
            Description:<input value={Des} className="form-control" style={{width:"40%"}} type="text"  onChange={(e)=>{SetDes(e.target.value)}} />
        </div>
        
        <button style={{width:"10%"}} className="btn btn-outline-primary">Create</button>
        
        </form>

        
    </div>
  )
}

export default Form