import React from 'react';

function PersonCard(props) {

    return (
        <div>
            {console.log(props)}
            <h1>{props.item.lastName},{props.item.firstName} </h1>
            <p>age: {props.item.age}</p>
            <p>HairColor: {props.item.hairColor}</p>



            
        </div>
    );
}

export default PersonCard;