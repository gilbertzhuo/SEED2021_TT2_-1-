import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white'
    }

    return (
        <nav>
            <h3>Logo</h3>
            <ul>
                <Link style={ navStyle } to="/login">
                    <li>Login</li>
                </Link>
            </ul>
        </nav>
    )    
}

export default Nav;
