import React, { Component } from 'react';
import './App.scss';

var axios = require('axios');
var data = JSON.stringify({"eGift": false,

"dateTime": "2020-03-25T12:24:15.890Z",

"custID": 2,

"expensesCat": "Food",

"amount": 0.10,

"message": "",

"payeeID": 20});
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
    accName:null,
    accBal:null
  }
  
  async postUpdate(){
    console.log("postView()...");
    const res = await axios.post('https://cors-anywhere.herokuapp.com/https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/update',data,config); //post(url,data)
    const hold = Object.values(res);
    console.log("hold arr: res",hold);
  }

  async postView(){ //postAdd
    console.log("postView()...");
    try{
      const res = await axios.post('https://cors-anywhere.herokuapp.com/https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/transaction/add',data,config); //post(url,data)
      const hold = Object.values(res);
      console.log("hold arr: res",hold);
    }
    catch(error){
      console.log( error.response.request._response ) 
    }
    
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
          <h2>{this.state.accName}</h2>
          <h2>{this.state.accBal}</h2>
      </React.Fragment>
    );
  }
  
}

export default App;