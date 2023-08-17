import logo from './logo.svg';
import './App.css';
import Axios from "axios"
import React, { useEffect, useState } from 'react'


function App() {
const[Ares,setAres]=useState([])
useEffect(()=>{
  Axios("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((res)=>{
      setAres(res.data.results)

    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div>
      <ul>
        {Ares.map((One,index)=>{
          return(<li key={index}>{One.name}</li>)
        })}
      </ul>
    </div>
  )
}

export default App;
