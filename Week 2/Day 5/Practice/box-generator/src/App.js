import logo from './logo.svg';
import './App.css';
import Box from './Components/Box';
import { useState } from 'react';

function App() {
  const [box,setBox]=useState([])
  const CreatedBox= (newBox) =>{
    setBox([...box,newBox])
  }
  return (
    <>
    <Box CreatedBox={CreatedBox} />
    <div style={{display:'flex' ,gap:'15px'}}>
            {box.map((box,index) =>(
                <div key={index} style={{ backgroundColor: box.color,width:"90px",height:"90px"}} >
                </div>))}
            

            

        </div>

    </>)
}

export default App;
