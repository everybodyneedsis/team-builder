import React from 'react'

export default function Form(props) {
    const {
        values,
        update,
        submit,
    } = props

    const onChange = evt => {
        const { name, value } = evt.target
      }

      return (
          <form>
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
          </form>
      )
}