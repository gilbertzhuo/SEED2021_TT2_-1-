import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavigationMenu from "./NavigationMenu"
function Navigation(){
    const [ShowMenu, setShowMenu] = useState(false)
    //false menu closed, true menu open

    let menu
    let menuMask

    if(ShowMenu){
        menu= <div className="fixed bg-white top-0 left-0 w-4/5 h-full shadow z-50"> 
        <NavigationMenu closeMenu={()=>setShowMenu(false)}/>
        </div>
        menuMask =
        <div 
        className="bg-gray-200 bg-opacity-50 top-0 fixed left-0 w-full h-full z-50"
        onClick={() => setShowMenu(!ShowMenu)}>
      
        </div>
    }

    return(
        <nav>

            <span className = "text-xl font-white">
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={() => setShowMenu(!ShowMenu)}
                />
            </span>
            {menuMask}
            {menu}

        </nav>
    )
}
export default Navigation