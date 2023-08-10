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
            First Name: <input type="text" onChange={(e)=>setFirstName(e.target.value)} />
        </div>
        <div style={{backgroundColor: "silver",width:"35%"}}>
            Last Name: <input type="text" onChange={(e)=>setLastName(e.target.value)} />
        </div>
        <div style={{backgroundColor: "silver",width:"35%"}}>
            Email: <input type="email" onChange={(e)=>setEMail(e.target.value)} />
        </div>
        <div style={{backgroundColor: "silver",width:"35%"}}>
            Password: <input type="text" onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div style={{backgroundColor: "silver",width:"35%"}}>
            Confirm Password: <input type="text" onChange={(e)=>setCPassword(e.target.value)}  />
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