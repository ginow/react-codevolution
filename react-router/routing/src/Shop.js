import './App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    }
    return (
        <div className="Shop">
            {items.map(item => (
                <h5 key={item.id}>
                    <Link className="item-links" to={`/shop/${item.id}`}>
                        {item.title}
                    </Link>
                </h5>
            ))}
        </div>
    );
}

export default Shop;
