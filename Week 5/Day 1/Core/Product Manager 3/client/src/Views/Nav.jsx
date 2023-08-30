import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div  style={{paddingLeft:"850px",position:"relative"}}>
      <Link  className='btn btn-success' style={{textDecorationLine:"none",color:"white"}} to="/">Home</Link>
        
    </div>)
}

export default Nav