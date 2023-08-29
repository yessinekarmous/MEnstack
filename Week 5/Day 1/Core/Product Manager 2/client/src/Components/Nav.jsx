import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className="btn btn-link" style={{paddingLeft:"850px",position:"relative"}}>
        <button><Link to="/">Home</Link></button>
    </div>
  )
}

export default Nav