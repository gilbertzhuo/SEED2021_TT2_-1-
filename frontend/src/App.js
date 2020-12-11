import React from 'react';
import Nav from './Nav';
import Login from './Login';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        // <Router> all components under it have routing ability
        // <Route>: renders component out base on url
        // if any letter under path matches, will be displayed and continue onto next <Route>
        // <Switch>: ensures that once a route is accessed the whole search process will stop
        // exact: putting it in <Route> will ensure render occurs if exact match
        <Router>
            <div className="App">
                <Nav />
                    <Switch>
                        <Route path="/" exact component={ Home } />
                        <Route path="/login" exact component={ Login } />
                    </Switch>
            </div>
        </Router>
    )    
}

const Home = () => (
    <div>    
        <h1>Home Page</h1>
    </div>
);

export default App;