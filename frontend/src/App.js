import React, { Component } from 'react';
import './App.scss';

var axios = require('axios');
//var data = JSON.stringify({"username":"Group1","password":"Y8UAsjalJ4wcwYK"});
var data = JSON.stringify({"custID":1});
var config = {
  method: 'post',
  headers: { 
    'Content-Type': 'application/json', 
    'x-api-key': 'A4DG0b4pmab5dO6Iguc91CFWWnOtpLu84FZtniQb'
  },
  data : data
};


export async function postView(){
  console.log("postView()...");
  const res = await axios.post('https://cors-anywhere.herokuapp.com/https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/view',data,config); //post(url,data)
  console.log("res",res);
  return res;
}

class App extends Component {
  login = () =>{
    console.log("login()...")
    postView();
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