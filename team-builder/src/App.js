import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import Form from './Form'
import * as yup from 'yup'
import axios from 'axios'

const teamList = [
  {memberName: 'Jacob', email:'jacob@gmail.com', role: 'Software Developer'},
  {memberName: 'Katie', email:'katie@gmail.com', role: '3D Animator'},
  {memberName: 'Allie', email:'allie@gmail.com', role: 'CopyWriter'},
]

const initialFormValues = {
  memberName: '',
  email: '',
  role: '',
}

function App() {
  const [teamMembers, setTeamMember] = useState(teamList)
  const [formValues, setFormValues] = useState(initialFormValues)

  const postNewMember = newMember => {
    axios.post('fakeapi.com', newMember)
    .then(res => {
      setTeamMember([res.data, ...teamMembers])
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
    .finally(setFormValues(initialFormValues))
}

const inputChange = (name, value) => {
  setFormValues({
    ...formValues,
    [name]: value
  })
}

  const formSubmit = () => {
    const newMember = {
      memberName: formValues.memberName.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    postNewMember(newMember)
  }

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setTeamMember(res.data))
  })

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form
        values={formValues}
        update={inputChange}
        submit={formSubmit}
      />
    </div>
  );
}

export default App;
