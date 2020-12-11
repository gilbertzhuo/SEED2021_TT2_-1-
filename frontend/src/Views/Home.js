import React from 'react'
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
    )
}
export default Home