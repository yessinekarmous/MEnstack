import React, { useState } from 'react';

function Person(props) {
    const[Age, SetAge]= useState(props.person.Age)
    const IncreaseAge= ()=>{
        SetAge(Age+1)
    }
    return (
        <div>
            <h1>{props.person.Lastname},{props.person.Firstname}</h1>
            <p>Age: {Age}</p>
            <p>Hair color: {props.person.Haircolor}</p>
            <button onClick={()=>{IncreaseAge()}}>Birtdhay Button for {props.person.Firstname} {props.person.Lastname}</button>
        </div>
    );
}

export default Person;