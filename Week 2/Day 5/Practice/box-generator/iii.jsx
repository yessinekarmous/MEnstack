
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [people, setPeople] = useState([
    {
      id: 0,
      name: "Mario",
      age: 40
    },
    {
      id: 1,
      name: "Luigi",
      age: "40"
    },
    {
      id: 2,
      name: "Mhamed",
      age: 35
    },
  ])

  const updatePersons = (newPerson) => {
    setPeople([...people, newPerson])

  }
  return (
    <div className="App">
      <fieldset className='App'>
        <legend>App.jsx</legend>
        state var is = {JSON.stringify(people)}
        <h1>Lifting State</h1>
        <hr />
        <Form updatePersons={updatePersons} />
        <Display people={people} />
      </fieldset>

    </div>
  );
}

export default App;

/////
import React from 'react'

const Display = (props) => {
    return (
        <fieldset>
            <legend>Display.jsx</legend>
            <hr />
            <h2>⬇️⬇️⬇️ ALL People ⬇️⬇️⬇️</h2>
            {
                props.people.map((onePer) => {
                    return (
                        <div key={onePer.id}>
                            <p>{onePer.name}</p>
                            <p>{onePer.age}</p>

                        </div>
                    )
                })
            }
        </fieldset>

    )
}


export default Display


////4
import React, { useState } from 'react'

const Form = (props) => {

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [id, setid] = useState(2)


    const submitPerson = (e) => {

        e.preventDefault()

        const newPerson = {
            name,
            age,
            id: id++

        }
        props.updatePersons(newPerson)
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <hr />
            <form className="w-60 p-5 mx-auto p-3 mb-2 bg-secondary text-white" onSubmit={submitPerson}>
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input className="form-control" onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age:</label>
                    <input type="number" className="form-control" onChange={(e) => { setAge(e.target.value) }} />
                </div>
                <button type="submit" className="btn btn-primary">Add Person</button>
            </form>
            <hr />


        </fieldset>
    )
}

export default Form
