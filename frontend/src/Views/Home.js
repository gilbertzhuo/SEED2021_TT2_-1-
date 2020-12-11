import React from 'react'
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from '../Components/Header'
import Contact from '../Views/ContactUs'
import ApiProg from '../Views/Transfer'
import ViewBalance from '../Views/ViewBalance';

function Home(){
    return(
    <>
          <Router>
          <Header/>
          <div className="p-3">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/Transaction">
                <Home/>
              </Route>
              <Route path="/Contact">
                <Contact/>
              </Route>
              <Route path="/Transfer">
                <ApiProg/>
              </Route>
              <Route path="/ViewBalance">
                <ViewBalance/>
              </Route>
            </Switch>
          </div>
        </Router>

      </>
=======
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust,faBalanceScale,faCreditCard,faHandshake,faGift } from '@fortawesome/free-solid-svg-icons'
function Home(){
    return(
            <div className="centre-align">
                <h1 className="font-bold text-center">Welcome User1</h1>

                <h2 className="font-bold text-center">  What do you want to do today?</h2>
                <div className="bg-red-300">
                        <ul>
                        <li>
                            <Link to="/Contact" 
                            className="text-black p-3 border-t border-b block"
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
                            className="text-black p-3 border-t border-b block"
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
                            className="text-black p-3 border-t border-b block"
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
                            className="text-black p-3 border-t border-b block"
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

                <div>
                    <ul>
                        <li>
                            <Link to="/Rewards" 
                            className="text-black p-3 border-t border-b block"
                            >
                                <span className = "text-xl">
                                    <FontAwesomeIcon 
                                        icon={faGift}
                                    />
                                </span>
                                Rewards
                            </Link>
                        </li>
                        
                    </ul>


                </div>
                
            </div>
>>>>>>> 55fb979e5f42f656d23216e3b532fef13ed40926
    )
}
export default Home