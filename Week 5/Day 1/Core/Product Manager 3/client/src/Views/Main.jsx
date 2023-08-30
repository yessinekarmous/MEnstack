import React, { useState } from 'react'
import DisplayAll from '../Components/DisplayAll'
import Form from '../Components/Form'

const Main = () => {
  const [refreshState,setRefreshState]=useState(false)

  const refresh=()=>{
    setRefreshState(!refreshState)
  }

  return (
    <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
        <Form refresh={refresh}/>
        <DisplayAll refreshState={refreshState}/>
    </div>
  )
}

export default Main