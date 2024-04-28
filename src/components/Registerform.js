import React, {useState} from 'react'
import "./Registerform.css"

function Registerform() {
    const [registeredNames, setRegisteredNames] = useState([]);
    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")

    const firstNameChange= (e) => {
        setFirstName(e.target.value);
    }
    const secondNameChange= (e) => {
        setSecondName(e.target.value);
    }
    const handleSubmission = (event) => {
        event.preventDefault();
        if(firstName.trim() && secondName.trim() !== ''){
            setRegisteredNames([...registeredNames, firstName, secondName])
            setFirstName("");
            setSecondName("");
        }
    }
    console.log(registeredNames)

  return (
    <div className='registerform'>
        <h1>Register Form</h1>
        <form onSubmit={handleSubmission}>
            <input type='text' placeholder='Enter FirstName' value={firstName} onChange={firstNameChange}/>
            <input type='text' placeholder='Enter SecondName'value={secondName} onChange={secondNameChange}/>
            <button type='submit'>Add Names</button>
        </form>
        <div className='display-list'>
            {registeredNames.map((namesRegistered, index) =>(
                <ul key={(index)}>
                    <li>{namesRegistered}</li>
                </ul>
            ))}
        </div>
    </div>
  )
}

export default Registerform