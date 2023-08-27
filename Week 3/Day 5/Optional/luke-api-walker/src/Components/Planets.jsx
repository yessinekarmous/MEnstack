import React, { useEffect, useState } from 'react'
import Axios from "axios"
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Planets = (props) => {
    const Id=useParams().id
    console.log("<<<<<<<<<<<<",Id)
    const [Data,SetData]=useState({})
    const navigate = useNavigate()


    useEffect(()=>{
        Axios.get(`https://swapi.dev/api/planets/${Id}`)
        .then((res)=>{
            console.log("moi c planet",res.data)
            SetData(res.data)
        })
        .catch((err)=>{
            console.log(err)
            navigate("/Error")
        })
  },[Id])
  
  return (
    <div style={{width:"60%",border:"2px solid black",textAlign:"left",padding:"25px"}}>
    <h1>{Data.name}</h1><br/>
    <p><span style={{fontWeight:"bold"}}>Climate:</span> {Data.climate} </p>
    <p><span style={{fontWeight:"bold"}}>Terrain:</span> {Data.terrain}</p>
    <p><span style={{fontWeight:"bold"}}>Surface Water:</span> {Data.surface_water}</p>
    <p><span style={{fontWeight:"bold"}}>Population:</span> {Data.population}</p>
    

    
  </div>
  )
}

export default Planets