import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import { useState } from 'react';

function App() {
  const [Box,SetBox]=useState([])


  const CreatedBox=(CreatedOne)=>{
    SetBox([...Box,CreatedOne])
    console.log(CreatedOne)
  }

  return (

    <div className="App">
        <Form CreatedBox={CreatedBox} />
        <div style={{display:'flex' ,gap:'15px'}} >
          {Box.map((OneBox,idx)=>(
            <div key={idx} style={{width:(OneBox.width),height:OneBox.height,padding:"15px",backgroundColor: OneBox.color}}></div>
        ))}
        </div>
    </div>
  );
}

export default App;
