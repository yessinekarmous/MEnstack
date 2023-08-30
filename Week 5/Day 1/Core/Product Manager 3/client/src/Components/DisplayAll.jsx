import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const DisplayAll = (props) => {
   const[AllProducts,SetAllProducts]=useState([])
   const {refreshState}=props
   const[test,setTest]=useState(false)
      // Getting all Products
    useEffect(()=>{
        axios.get("http://localhost:5000/api/FindAll")
        .then((res)=>{
            console.log(res);
            SetAllProducts(res.data.AllProducts);
        })
        .catch((err)=>console.log(err))
    },[refreshState, test])

    const deleteProduct=(id)=>{
            axios.delete(`http://localhost:5000/api/delete/${id}`)
            .then((res)=>{
                // const new_products = AllProducts.filter(()=>AllProducts._id!==id)
                // SetAllProducts(new_products)
                setTest(!test)
                console.log(res)
            
            })
            .catch((err)=>{console.log(err)})
    }

    return (
    <div style={{width:"100%",display:'flex',gap:"10px",alignItems:'center',flexDirection:'column'}}>
        <h2>All Products :</h2>
        <div style={{width:"75%",display:"flex",flexWrap:"wrap",paddingLeft:"30%",gap:"10px"}}>
        {AllProducts.map((OneProduct,idx)=>{
            return <div key={idx} style={{display:"flex",width:"50%",justifyContent:'space-between'}}>
                    <p> <Link  to={`/DisplayOne/${OneProduct._id}`} style={{color:"black"}}> {OneProduct.Title}</Link>   </p>
                    <button className='btn btn-danger' onClick={()=>deleteProduct(OneProduct._id)}>Delete</button>
                    
            </div>
        })}
        </div>
    </div>
      )
    }
    


export default DisplayAll
