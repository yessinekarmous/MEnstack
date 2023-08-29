import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const DisplayAll = () => {
   const[AllProducts,SetAllProducts]=useState([])
      // Getting all Products
    useEffect(()=>{
        axios.get("http://localhost:5000/api/FindAll")
        .then((res)=>SetAllProducts(res.data.AllProducts))
        .catch((err)=>console.log(err))
    },[])
    return (
    <div>
        <h2>All Products :</h2>
        {AllProducts.map((OneProduct,idx)=>{
            return <div key={idx}>
                    <p> <Link to={`/DisplayOne/${OneProduct._id}`} style={{color:"black"}}> {OneProduct.Title}</Link>   </p>
                    <hr/>
            </div>
        })}
        
    </div>
      )
    }
    


export default DisplayAll
