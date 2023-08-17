import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'


function App() {
  const [Res,setRes]=useState([])

useEffect(()=>{
    fetch(" https://pokeapi.co/api/v2/pokemon?limit=807'")
  
    .then(response=>{
      return response.json();
    })
    .then(response=>{
      setRes(response.results)
    })
    .catch(err =>{
      console.log(err)
    })
},[])

  return (
    <div>
      <ul>
        {
        Res.map((poke, index) =>{
          return(<li  key={index}>{poke.name}</li>)
          })
          }
      </ul>
    </div>
  )
    
        }
export default App