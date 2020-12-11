import React from 'react'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust,faBalanceScale,faCreditCard,faHandshake } from '@fortawesome/free-solid-svg-icons'
function Home(){
    return(
            <div className="centre-align">
                <h1 className="font-bold">Welcome in</h1>

                <h2>  What do you want to do today?</h2>

                <ul>
                <li>
                    <Link to="/Contact" 
                    className="text-blue-500 p-3 border-t border-b block"
                    >
                        <span className = "text-xl">
                            <FontAwesomeIcon 
                                icon={faAdjust}
                            />
                        </span>
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link to="/Transaction" 
                    className="text-blue-500 p-3 border-t border-b block"
                   >
                        <span className = "text-xl">
                            <FontAwesomeIcon 
                                icon={faCreditCard}
                            />
                        </span>
                        View Transaction History
                    </Link>
                </li>
                <li>
                    <Link to="/Transfer" 
                    className="text-blue-500 p-3 border-t border-b block"
                   >
                        <span className = "text-xl">
                            <FontAwesomeIcon 
                                icon={faHandshake}
                            />
                        </span>
                        Make Payments
                    </Link>
                </li>
                <li>
                    <Link to="/ViewBalance" 
                    className="text-blue-500 p-3 border-t border-b block"
                   >
                        <span className = "text-xl">
                            <FontAwesomeIcon 
                                icon={faBalanceScale}
                            />
                        </span>
                        ViewBalance
                    </Link>
                </li>
            </ul>
            </div>
    )
}
export default Home