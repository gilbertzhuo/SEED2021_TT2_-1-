import React from 'react'
import Navigation from './Navigation'
function Header(){
    return(
        <div className="bg-gray-100">
            <header className = "border-b-2 p-2 flex justify-between items center">
            <span className="font-bold text-black">
                DBSSEED1
            </span>
            
            <Navigation/>
        </header>

        </div>
        
    )
}
export default Header