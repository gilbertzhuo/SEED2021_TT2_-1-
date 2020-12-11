import React from 'react'
// import CounterExample from '../Components/Counter_example'
import {Link} from "react-router-dom"

function Contact(){
    return(
            <div>
                <h1 className="font-bold">This is the Contact page</h1>
                <h2>
                    Our Members: 
                  
                </h2>
                {/* <CounterExample/> */}

                <a className="text-blue-500" href="https://github.com/gilbertzhuo">
                        Gilbert
                </a>
                <br/>
                <a className="text-blue-500" href="https://github.com/orelanthos32/">
                        Bryan
                </a>
                <br/>
                <a className="text-blue-500" href="https://github.com/byc7">
                        Yong Chun
                </a>
                <br/>
                <a className="text-blue-500" href="https://github.com/tjaslyn">
                        Jaslyn
                </a>
                <br />

                <a className="text-blue-500" href="https://github.com/rowter4">
                        Imaan
                </a>
                <br />
                <ul>
                    <li>
                        <Link to="/" 
                        className="text-blue-500 p-3 border-t border-b block">
                            Back To Home
                        </Link>
                    </li>
                </ul>    

            </div>
    )
}
export default Contact