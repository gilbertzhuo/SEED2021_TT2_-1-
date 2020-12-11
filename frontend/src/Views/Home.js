import React from 'react'
import {Link} from "react-router-dom"

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
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link to="/Transaction" 
                    className="text-blue-500 p-3 border-t border-b block"
                   >
                        View Transaction History
                    </Link>
                </li>
                <li>
                    <Link to="/Transfer" 
                    className="text-blue-500 p-3 border-t border-b block"
                   >
                        Make Payments
                    </Link>
                </li>
                <li>
                    <Link to="/ViewBalance" 
                    className="text-blue-500 p-3 border-t border-b block"
                   >
                        ViewBalance
                    </Link>
                </li>
            </ul>

                <br/>
                <br/>

                <button> Make Payments </button>
                <br/>
                <button> View Transaction History </button>
                <br />
                <button> Logout </button>


            </div>
    )
}
export default Home