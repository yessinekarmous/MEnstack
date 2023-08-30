import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,Link, Navigate, useNavigate } from 'react-router-dom'


const DisplayOne = () => {
  const {id}=useParams()
  const[AllProducts,SetAllProducts]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    axios.get(`http://localhost:5000/api/FindOne/${id}`)
    .then((res)=>{
      SetAllProducts(res.data.OneProduct)
    })
    .catch((err)=>console.log(err))
  },[id])

  const deleteProduct=()=>{
    axios.delete(`http://localhost:5000/api/delete/${id}`)
    .then((res)=>{
        console.log(res)
        // const new_products = AllProducts.filter(()=>clg(AllProducts)
        navigate("/")
    })
    .catch((err)=>{console.log(err)})
}

  return (
    <div>
      <h4 style={{color:"red"}}>{AllProducts.Title}</h4>
      <p>Price: {AllProducts.Price}</p>
      <p>Description : {AllProducts.Description} </p>
      <Link className='btn btn-danger' style={{textDecorationLine:"none",color:"white"}}  to={`/edit/${id}`} >Updated this Product</Link>
      <br />
      <br />
      <button className='btn btn-danger' onClick={()=>deleteProduct()}> Delete</button>
    </div>
    
  )
}

export default DisplayOne