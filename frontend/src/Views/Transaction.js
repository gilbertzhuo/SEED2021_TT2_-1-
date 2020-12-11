import React, { useState, useEffect } from 'react';

function Transaction(){

    useEffect(() =>{
        fetchTransactions();
    }, [])

    const [transactions, setTransactions] = useState([]);

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'A4DG0b4pmab5dO6Iguc91CFWWnOtpLu84FZtniQb'
        },
        body: JSON.stringify({
            'custID': '1'
        })
    }

    const fetchTransactions = async() => {
        const data = await fetch("https://cors-anywhere.herokuapp.com/https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/transaction/view", requestOptions);

        const transactions = await data.json();
        console.log(transactions);
        setTransactions(transactions);
    }

    return(
        
        <div>
            <h1> Transaction History </h1>

            <table>
                <tr>
                    <th>Date</th>
                    <th>payeeID</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>eGift</th>
                    <th>message</th>
                </tr>
                { transactions.map(transaction => (
                <tr>
                    <th>{transaction.dateTime}</th>
                    <th>{transaction.payeeID}</th>
                    <th>${transaction.amount}</th>
                    <th>{transaction.expensesCat}</th>
                    <th>{transaction.eGift.toString()}</th>
                    <th>{transaction.message}</th>
                </tr>
                ))}
            </table>
        </div>
    )
}
export default Transaction 