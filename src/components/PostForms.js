import { useState } from "react"

export const PostForm = () => {
    const [userid, setUserid] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userid: userid,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => {
                console.log(err)
            })

    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <input
                    type='text'
                    placeholder='User ID'
                    value={userid}
                    onChange={(event) => setUserid(event.target.value)}
                />
            </div>
            <div>
                <input
                    type='text'
                    placeholder='Title'
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div>
                <input
                    type='text'
                    placeholder='Body'
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                />
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}