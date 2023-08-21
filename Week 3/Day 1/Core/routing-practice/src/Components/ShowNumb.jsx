import React from 'react'
import { useParams } from 'react-router-dom'

const ShowNumb = () => {
    const {content,color,backColor}=useParams()

  return (
    <div>
    {isNaN(content) ? (<div style={{color:color,backgroundColor:backColor}}> The Word is :{content}</div>):(<div style={{color:color,backgroundColor:backColor}}>The Number is : {content}</div> )}
    </div>
  )
}

export default ShowNumb