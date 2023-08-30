import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DisplayOne = () => {
  const {id}=useParams()
  const[AllProducts,SetAllProducts]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:5000/api/FindOne/${id}`)
    .then((res)=>{
      SetAllProducts(res.data.OneProduct)
    })
    .catch((err)=>console.log(err))
  },[id])


  return (
    <div>
      <h4 style={{color:"red"}}>{AllProducts.Title}</h4>
      <p>Price: {AllProducts.Price}</p>
      <p>Description : {AllProducts.Description} </p>
    </div>
  )
}

export default DisplayOne