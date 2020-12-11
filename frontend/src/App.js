import React, { Component } from 'react';
import './App.scss';

var axios = require('axios');
var data = JSON.stringify({"username":"Group1","password":"Y8UAsjalJ4wcwYK"});

var config = {
  method: 'post',
  url: 'https://cors-anywhere.herokuapp.com/u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/login',
  headers: { 
    'Content-Type': 'application/json', 
    'x-api-key': 'A4DG0b4pmab5dO6Iguc91CFWWnOtpLu84FZtniQb'
  },
  data : data
};



class App extends Component {
  login = () =>{
    axios(config)
    .then(function (response) {
      console.log('response',response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render(){
    return (
      <React.Fragment>
        <h1>API Login Test</h1>
        <button onClick = {this.login}
            className="btn btn-secondary btn-sm"
          >
            Magic Login
          </button>
      </React.Fragment>
    );
  }
  
}

export default App;