import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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



class ViewBalance extends Component {
  state={
    accounts:null,
    accName:null,
    accBal:null
  }
  async postView(){
    console.log("postView()...");
    const res = await axios.post('https://cors-anywhere.herokuapp.com/https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/view',data,config); //post(url,data)
    const hold = Object.values(res.data);
    console.log("hold arr: res.data",hold[0]);
    this.setState({accounts:Object.values(hold[0])});
    this.setState({accName:hold[0].accountName});
    this.setState({accBal:hold[0].availableBal});
  }

  handleView = () =>{
    console.log("handleView() receives ",this.postView());
  }

  render(){
    return (
      <React.Fragment>
        <h1 className="font-bold">Transaction Balance Page</h1>
        <br />
        <br />
        <button onClick = {this.handleView} className="btn btn-secondary btn-sm">
            Click here to show Transaction Balance!
        </button>
        <br />
        <div className="container">
          <form>
            <div>
            <label htmlFor="AccountName">Account Name:</label>
            <input placeholder={this.state.accName} type="text" disabled/>
            </div>
            <div>
            <label htmlFor="AccountBalance">Account Balance:</label>
            <input placeholder={this.state.accBal}  type="text" disabled/>
            </div>
          </form>
        </div>
        <br />
        <br />
            <ul>
                <li>
                    <Link to="/" 
                    className="text-blue-500 p-3 border-t border-b block">
                        Back To Home
                    </Link>
                </li>
            </ul> 
      </React.Fragment>
    );
  }
  
}

export default ViewBalance;






// import React , { Component } from 'react'
// import axios from 'axios'
// import {Link} from 'react-router-dom'

// class ViewBalance extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
            
//             custID: null,
//             balance: null
//         }

//         this.getBalance = this.getBalance.bind(this);
//     }

//     componentDidMount() {
//         this.getBalance();
//     }

//     async getBalance() {
//         const res = await axios.post('https://cors-anywhere.herokuapp.com/https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/view')
//     }
//     // getBalance = e => {
//     //     e.preventDefault();

//     //     axios.post('https://cors-anywhere.herokuapp.com/https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/accounts/view' , {
//     //         headers: {
//     //             'x-api-key' : `A4DG0b4pmab5dO6Iguc91CFWWnOtpLu84FZtniQb`
//     //         },

//     //         parameters: {
//     //             'custID':1
//     //         }
//     //     })
//     //         .then(res => {
//     //             this.setState({ balance: res.data.balance })
//     //         })
//     //         .catch(err => {
//     //             console.log(err);
//     //         })
//     // }

    
    

//     render() {
//         return(
//                 <div>
//                     <h1> Account Balance: {this.state.balance}</h1>
//                     <h1 className="font-bold">This is the View Balance page</h1>

//                     <ul>
//                         <li>
//                             <Link to="/" 
//                             className="text-blue-500 p-3 border-t border-b block">
//                                 Back To Home
//                             </Link>
//                         </li>
//                     </ul> 
//                 </div>
//         )
//     }
// }
// export default ViewBalance