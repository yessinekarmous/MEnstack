import React from 'react'

const Main = (props) => {
  return (
    <div style={{width:"73.3%",height:"420px",backgroundColor:"#E06666",padding:"10px",display:'flex',justifyContent:"space-between",flexWrap:"wrap",border:"2px solid black"}}>
            {props.children}    
    </div>
  )
}

export default Main