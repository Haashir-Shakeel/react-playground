//react with http(making requests)

import { useState, useEffect } from "react"

export const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {    //useEffect is to make side Effects in your component like api requests
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((err) => {
                console.log(err)
            })
    }, [])
    // this array is for dependencies to determine when to re-run the effect
    // , rightnow none ,,, prevents it to run everytime we render

    return (
        <div>
            <ul>
                {
                    posts.map((post) => {
                        return <li key={post.id}>{post.title}</li>
                    })
                }
            </ul>
        </div>
    )
}