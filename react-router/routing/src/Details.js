
import './App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Details(match) {
    useEffect(() => {
        fetchItem();
        console.log(match);
        debugger
    }, []);
    const [item, setItem] = useState({});
    const fetchItem = async () => {
        const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/todos/${match.match.params.id}`)
        const item = await fetchItem.json();
        setItem(item);
    }
    return (
        <div>
            <h3>Title: {item.title}</h3>
            <h4>ID: {item.id}</h4>
        </div>
    );
}

export default Details;
