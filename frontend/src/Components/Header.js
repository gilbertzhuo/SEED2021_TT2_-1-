import React from 'react'
import Navigation from './Navigation'
import {Link} from "react-router-dom"
function Header(){
    return(
        <div className="bg-gray-100">
            <header className = "border-b-2 p-2 flex justify-between items center">
            <span className="font-bold text-black">
            <Link to="/" >

                DBSSEED1
            </Link>

            </span>
            
            <Navigation/>
        </header>

        </div>
        
    )
}
export default Header