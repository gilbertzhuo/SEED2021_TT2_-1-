import React from 'react'
import {Link} from "react-router-dom"


function NavigationMenu(props){
    return(
        <div>
            <div className="border-b-2 p-2 flex justify-between items center font-bold">
                AppName
            </div>
            <ul>
                <li>
                    <Link to="/" 
                    className="text-blue-500 p-3 border-t border-b block"
                    onClick= {(props.closeMenu)}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/Contact" 
                    className="text-blue-500 p-3 border-t border-b block"
                    onClick= {(props.closeMenu)}>
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link to="/Transaction" 
                    className="text-blue-500 p-3 border-t border-b block"
                    onClick= {(props.closeMenu)}>
                        ApiProg
                    </Link>
                </li>
                <li>
                    <Link to="/Transfer" 
                    className="text-blue-500 p-3 border-t border-b block"
                    onClick= {(props.closeMenu)}>
                        Transfer
                    </Link>
                </li>
                <li>
                    <Link to="/ViewBalance" 
                    className="text-blue-500 p-3 border-t border-b block"
                    onClick= {(props.closeMenu)}>
                        ViewBalance
                    </Link>
                </li>
            </ul>

        </div>
    )}





export default NavigationMenu