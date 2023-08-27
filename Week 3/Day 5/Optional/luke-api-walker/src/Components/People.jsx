import React, { useEffect, useState } from 'react'
import Axios from "axios"
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const People = (props) => {
    const Id=useParams().id
  const[Data,SetData]=useState([])
  const[homeworld,SetHomeWorld]=useState("")
  const[homeworldId,SetHomeWorldId]=useState("")
  const navigate = useNavigate()

    
    useEffect(()=>{
        Axios.get(`https://swapi.dev/api/people/${Id}`)
        .then((res)=>{
            console.log("moi c people",res.data)
            SetData(res.data)
            IdOfHomeworld(res.data.homeworld)

              Axios.get(res.data.homeworld)
                  .then((resp)=>{
                      console.log("im the resp",resp.data)
                      SetHomeWorld(resp.data)
                      
                      })
                  .catch((err)=>{
                      navigate("/Error")
                      console.log(err)})
                  })
        .catch((err)=>{
          navigate("/Error")
            console.log(err)
        })
  },[Id])
  const IdOfHomeworld=(UrlhomeWorld)=>{
    console.log("i m the homeworld",UrlhomeWorld)
    if(UrlhomeWorld.charAt(UrlhomeWorld.length-3)==="/")
      { SetHomeWorldId(UrlhomeWorld.charAt(UrlhomeWorld.length-2))
      }
    else{
      const FirstC=UrlhomeWorld.charAt(UrlhomeWorld.length-3)
      const SecondC=UrlhomeWorld.charAt(UrlhomeWorld.length-2)
      SetHomeWorldId(`${FirstC}${SecondC}`)

    }
  
  }
  return (
    <div style={{width:"60%",border:"2px solid black",textAlign:"left",padding:"25px"}}>
      <h1>{Data.name}</h1><br/>
      <p><span style={{fontWeight:"bold"}}>Height:</span> {Data.height} cm</p>
      <p><span style={{fontWeight:"bold"}}>Hair Color:</span> {Data.hair_color}</p>
      <p><span style={{fontWeight:"bold"}}>Eye Color:</span> {Data.eye_color}</p>
      <p><span style={{fontWeight:"bold"}}>Skin Color:</span> {Data.skin_color}</p>
      <p><span style={{fontWeight:"bold"}}>the Homeworld is :</span>{homeworld.name}</p>
      <Link to={`/Planets/${homeworldId}`}>Homeworld</Link>
      
    </div>
  )
}

export default People