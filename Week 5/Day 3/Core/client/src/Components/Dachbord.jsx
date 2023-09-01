import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'


const Dachbord = () => {
    const [authors,setAuthors]=useState([])
    const [test,setTest]=useState(false)
    // const [test2,setTest2]=useState(false)
 


    authors.sort((a,b)=>{
        return a.name.localeCompare(b.name)
    })
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:5000/api/Find")
        .then((res)=>{
            console.log(res.data.AllAuthors)
            setAuthors(res.data.AllAuthors)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    },[test])
    const DeleteAuthor=(id)=>{
        axios.delete(`http://localhost:5000/api/delete/${id}`)
        .then((res)=>{
            console.log('deleted')
            setTest(!test)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const Edit=(id)=>{
        axios.get(`http://localhost:5000/api/Find/${id}`)
        .then((res)=>{
            console.log('found🆗🆗🆗')
            navigate(`/edit/${id}`)
            
        } )
        .catch(err=>{
            if(err){
                navigate("/new")
            }
            console.log(err)
        })
    }
  return (
    <div >
        <Link className=' font-italic' to={"/new"} >Add an Author </Link>
        <p className=' font-italic' >We have quotes by : </p>
        <table  className="table table-bordered table-dark">
        <thead>
            <th className='font-italic'>Author</th>
            <th className='font-italic'  >Actions availabe</th>
        </thead>
        <tbody>
        {authors.map((oneAuthor)=>{
            return (<tr className="table-primary" key={oneAuthor._id}>
                <td className='font-italic' > {oneAuthor.name}</td>
                {/* <td> <Link to={`/edit/${oneAuthor._id}`}  className="btn btn-primary font-italic">Edit </Link> <button onClick={()=>DeleteAuthor(oneAuthor._id)}  className="btn btn-outline-danger font-italic">Delete</button></td> */}
                <td> <button  className="btn btn-primary font-italic" onClick={()=>{Edit(oneAuthor._id)}}>Edit</button> <button onClick={()=>DeleteAuthor(oneAuthor._id)}  className="btn btn-outline-danger font-italic">Delete</button></td>
               
            </tr>)
        })}
       
         
        </tbody>
        </table>
    </div>
  )
}

export default Dachbord