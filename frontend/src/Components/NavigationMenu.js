import React from 'react'
import {Link} from "react-router-dom"


function NavigationMenu(props){
    return(
        <div>
            <div className="border-b-2 p-2 flex justify-between items center font-bold">
                DBSSEED1
            </div>
            <ul>
                <li>
                    <Link to="/" 
                    className="text-blue-500 p-3 border-t border-b block"
                    onClick= {(props.closeMenu)}>
                        Check out new deals on the home page!
                    </Link>
                </li>
                <li>
                    <Link to="/Contact" 
                    className="text-blue-500 p-3 border-t border-b block"
                    onClick= {(props.closeMenu)}>
                        Leave us a feedback for the app
                    </Link>
                </li>
                <li>
                    <Link to="/Transaction" 
                    className="text-blue-500 p-3 border-t border-b block"
                    onClick= {(props.closeMenu)}>
                        You paid $15 to tokyo ramen
                    </Link>
                </li>
                <li>
                    <Link to="/Transfer" 
                    className="text-blue-500 p-3 border-t border-b block"
                    onClick= {(props.closeMenu)}>
                        Jaslyn has a payment request from you.
                    </Link>
                </li>
                <li>
                    <Link to="/ViewBalance" 
                    className="text-blue-500 p-3 border-t border-b block"
                    onClick= {(props.closeMenu)}>
                        View your balance for the month
                    </Link>
                </li>
            </ul>

        </div>
    )}





export default NavigationMenu