import React, {useState} from 'react';
import Login from './Views/Login';
import Home from './Views/Home';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
      <>
      {isAuthenticated ? (<Home setIsAuthenticated={setIsAuthenticated}/>):(<Login setIsAuthenticated={setIsAuthenticated}/>) }
      </>
  );
 
}

export default App;
