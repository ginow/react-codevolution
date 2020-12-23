import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPosts] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick]) // Remember to use empty array to fetch data only on mount
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetching
