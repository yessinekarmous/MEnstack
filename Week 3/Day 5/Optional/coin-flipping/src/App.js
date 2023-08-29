import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  // function tossCoin() {
  //       return Math.random() > 0.5 ? "heads" : "tails";
  //   }
    
  //   function fiveHeadsSync() {
  //         let headsCount = 0;
  //         let attempts = 0;
  //         while(headsCount < 5) {
  //             attempts++;
  //             let result = tossCoin();
  //             console.log(`${result} was flipped`);
  //             if(result === "heads") {
  //                 headsCount++;
  //             } else {
  //                 headsCount = 0;
  //             }
  //         }
  //         return `It took ${attempts} tries to flip five "heads"`;
  //     }
  //     console.log( fiveHeadsSync() );
  //     console.log( "This is run after the fiveHeadsSync function completes" );
 const [result,Setresult]=useState()
  function fiveHeads() {
  return new Promise( (resolve, reject) => {
    let S=0
    let headcounts=0
    while((S < 5)&&(headcounts<=100))
    { headcounts++
      Math.random() > 0.5 ? S++ : S=0;
    }
    if (headcounts>100){
      reject("Attempts have exceeded 100 flips.")
    }
    else{
      resolve(`it took ${headcounts} tries to flip five heads`)
    }
    });
  }
  useEffect(() => {
  fiveHeads()
  .then( res => {console.log(res)
                Setresult(res)
  } )
  .catch( err =>{ console.log(err)
  Setresult(err)} );}
  
  ,[])
  
    
      
    
  return (
    <div className="App">
        <p> <span>This the result :</span>{result}</p>
    </div>
  );
}

export default App;
