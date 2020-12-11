import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './App.scss';

var axios = require('axios');
var data = JSON.stringify({
  "eGift": false,

  "dateTime": "2020-03-25T12:24:15.890Z",

  "custID": 1,

  "expensesCat": "Food",

  "amount": 0.10,

  "message": "",

  "payeeID": 20
});
var config = {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'A4DG0b4pmab5dO6Iguc91CFWWnOtpLu84FZtniQb'
  },
  data: data
};



class MakePayments extends Component {
  state = {

    eGift: false,
    dateTime: "2020-03-25T12:24:15.890Z",
    custID: 1,
    expensesCat: "Food",
    amount: 0.10,
    message: "",
    payeeID: 20
   
  }
  async postView() {
    console.log("postView()...");
    
    const res = await axios.post('https://cors-anywhere.herokuapp.com/https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/transaction/add', data, config); //post(url,data)
    const hold = Object.values(res.data);
    console.log("hold arr: res.data", hold[0]);

    this.setState({ accounts: Object.values(hold[0]) });

    this.setState({ accounts: Object.values(hold[0]) });
    this.setState({ accName: hold[0].accountName });
    this.setState({ accBal: hold[0].availableBal });
  }

  handleView = () => {
    console.log("handleView() receives ", this.postView());
  }

  submitForm = () => {
    this.setState({ dateTime: Date.now() });
   
  }

  changeHandler = e => {
    const name = e.target.name;
    this.setState ({
        [name]: e.target.value
    });

    console.log(e.target.value)
}
  render() {
    return (
      <React.Fragment>
        <h1 className="font-bold">Make Payments Page</h1>
        <br />
        <br />
        <form>
          <label for="amount">Amount:
            <br />
            <input name="amount" type="number" step="0.01" onChange={this.changeHandler}></input>
          </label>

          <label for="payee">Payee:
            <br />
            <input name="payee" type="integer" onChange={this.changeHandler}></input>         
          </label>

          <label for="message">Message:
            <br />
            <input name="message" type="text"onChange={this.changeHandler}></input>
          </label>

         
          <button> Submit </button>
          <ul>
            <li>
              <Link to="/"
                className="text-blue-500 p-3 border-t border-b block">
                Back To Home
                    </Link>
            </li>
          </ul>
        </form>
      </React.Fragment>
    );
  }

}

export default MakePayments;