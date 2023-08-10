import React, { useState } from 'react'

const Form = () => {
    const [FirstName,setFirstName]=useState("")
    const [LastName,setLastName]=useState("")
    const[email,setEMail]=useState("")
    const[Password,setPassword]=useState("")
    const[CPassword,setCPassword]=useState("")
    return (
    <form className='Form'>
        <div style={{backgroundColor: "silver",width:"35%"}}>
            First Name: <input type="text" placeholder='Search'  onChange={(e)=>setFirstName(e.target.value)} />
            {FirstName.length<=2&&FirstName.length!=0 ? <p style={{backgroundColor: "white", color:"red"}} >First Name must be at least 2 characters</p>: <p></p>}
        </div>
            
        
        <div style={{backgroundColor: "silver",width:"35%"}}>
            Last Name: <input type="text" placeholder='Search' onChange={(e)=>setLastName(e.target.value)} />
            {LastName.length<2&&LastName.length!=0 ? <p style={{backgroundColor: "white", color:"red",font:"10px"}} >Last Name must be at least 2 characters</p>: <p></p>}
        </div>
        <div style={{backgroundColor: "silver",width:"35%"}}>
            Email: <input type="email" placeholder='Email'  onChange={(e)=>setEMail(e.target.value)} />
            {email.length<5&&email.length!=0 ?  <p style={{backgroundColor: "white", color:"red"}} >Email must be at least 5 characters</p>: <p></p>}
        </div>
        <div style={{backgroundColor: "silver",width:"35%"}}>
            Password: <input type="text" placeholder='Password'  onChange={(e)=>setPassword(e.target.value)} />
            {Password.length<5&&Password.length!=0 ?  <p style={{backgroundColor: "white", color:"red"}} >Password must be at least 5 characters</p>: <p></p>}
        </div>
        <div style={{backgroundColor: "silver",width:"35%"}}>
            Confirm Password: <input type="text" placeholder='Confirm Password' onChange={(e)=>setCPassword(e.target.value)}  />
            {CPassword!==Password&&CPassword.length!==0 ?  <p style={{backgroundColor: "white", color:"red"}} >Password don't match</p>: <p></p>}
        </div>
        <div style={{width:"35%",textAlign:"left"}}>First Name: {FirstName}</div>
        <div style={{width:"35%",textAlign:"left"}}>Last Name :{LastName}</div>
        <div style={{width:"35%",textAlign:"left"}}>Email: {email}</div>
        <div style={{width:"35%",textAlign:"left"}}>Password:{Password}</div>
        <div style={{width:"35%",textAlign:"left"}}>Confirm Password :{CPassword}</div>
    </form>
)
}

export default Form