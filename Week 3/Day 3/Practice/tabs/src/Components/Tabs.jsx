import React, {useState } from 'react'

const Tabs = () => {
    const[Selector,SetSelector]=useState(1)

  return (
    <div>
        <div style={{display:'flex',gap:"15px",flexDirection:'column'}}>
        <thead >
            <th style={{width: "80px", border:"2px solid silver"}} onClick={()=>SetSelector(1)}>Tab 1</th>
            <th style={{width: "80px",border:"2px solid silver"}} onClick={()=>SetSelector(2)}>Tab 2 </th>
            <th style={{width: "80px",border:"2px solid silver"}} onClick={()=>SetSelector(3)}>Tab 3 </th>
        </thead>
        <div style={{width: "240px", border:"2px solid silver"}}>
            {Selector===1 ? <p>Tab {Selector} content is here</p>:null}
            {Selector===2 ? <p>Tab {Selector} content is here</p>:null}
            {Selector===3 ? <p>Tab {Selector} content is here</p>:null}
        </div>
        </div>
    </div>
  )
}

export default Tabs