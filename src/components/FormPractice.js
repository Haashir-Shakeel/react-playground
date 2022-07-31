import { useState } from "react"

export const FormPractice = () => {
    const [age, setAge] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Age is ${age}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>age</label>
                <input
                    type='number'
                    value={age}
                    onChange={(event) => setAge(event.target.value)}>

                </input>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}