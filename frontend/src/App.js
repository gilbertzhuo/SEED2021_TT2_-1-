import React, { Component } from 'react';
import './App.scss';

var axios = require('axios');
var data = JSON.stringify({"custID":1});
var config = {
  method: 'post',
  headers: { 
    'Content-Type': 'application/json', 
    'x-api-key': 'A4DG0b4pmab5dO6Iguc91CFWWnOtpLu84FZtniQb'
  },
  data : data
};



class App extends Component {
  state={
    accounts:null,
    accNames:null,
    accBal:[]
  }
  async postView(){
    console.log("postView()...");
    const res = await axios.post('https://cors-anywhere.herokuapp.com/https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/view',data,config); //post(url,data)
    const hold = Object.values(res.data);
    console.log("hold arr: res.data",hold[0]);
    this.setState({accounts:Object.values(hold[0])});
    
    this.setState({accNames:Object.values(hold[0].accountName)})
  }

  handleView = () =>{
    console.log("handleView() receives ",this.postView());
  }

  render(){
    return (
      <React.Fragment>
        <h1>API Login Test</h1>
        <button onClick = {this.handleView}
            className="btn btn-secondary btn-sm"
          >
            Magic Button
          </button>
          <h2>{this.state.accNames}</h2>
      </React.Fragment>
    );
  }
  
}

export default App;