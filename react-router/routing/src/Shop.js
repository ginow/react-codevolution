import './App.css';
import React, { useState, useEffect } from 'react'

function Shop() {
    useEffect(() => {
        fetchItems();
    }, []);
    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos');
        const items = await data.json();
        console.log(items);
        setItems(items);
        debugger
    }
    return (
        <div className="Shop">
            {items.map(item => (
                <h5 key={item.id}>{item.title}</h5>
            ))}
        </div>
    );
}

export default Shop;
