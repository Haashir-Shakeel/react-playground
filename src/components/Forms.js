//Form Handling in react

import { useState } from 'react'

export const Form = () => {
    const [username, setUsername] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Form data is ${username}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input
                    type='text'
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}>

                </input>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

//onchange() event for reflecting changes in the browser