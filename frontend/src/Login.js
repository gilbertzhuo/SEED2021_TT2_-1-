import React, { useState, useEffect } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Login() {

    useEffect(() =>{
        fetchItems();
    }, [])

    const [items, setItems] = useState([]);

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'A4DG0b4pmab5dO6Iguc91CFWWnOtpLu84FZtniQb'
        },
        body: JSON.stringify({
            'username': 'Group1',
            'password': 'Y8UAsjalJ4wcwYK'
        })
    }

    const fetchItems = async() => {
        const data = await fetch("https://cors-anywhere.herokuapp.com/https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/login", requestOptions);
        
        const items = await data.json();
        console.log(items);
    }

    return (
        <h1>HI</h1>
    )    
}

export default Login;