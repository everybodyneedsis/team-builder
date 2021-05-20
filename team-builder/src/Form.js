import React from 'react'

export default function Form(props) {
    const {
        values,
        update,
        submit,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value } = evt.target
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Member Name:
                <input 
                    value={values.memberName}
                    onChange={onChange}
                    type='text'
                    name='memberName'
                />
            </label>
            <label>Email:
                <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='email'
                />
            </label>
            <label>Role
            <select 
                value={values.role} 
                name='role' 
                onChange={onChange}>
                    <option value=''>-- Select a Role --</option>
                    <option value='SD'>Software Developer</option>
                    <option value='3D'>3D Animator</option>
                    <option value='Instructor'>CopyWriter</option>
            </select>
            </label>

            <button type='submit'>Submit</button>
    </form>
)}