import React, { useEffect, useState} from "react";
import { TransactionRow } from './TransactionRow'
import { useCookies } from 'react-cookie'

export function TransactionCard(props) {

  const [cookies, setCookie, removeCookie] = useCookies(['token'])

  const c = props.category;
  const [transactions, setTransactions] = useState()

  useEffect(() => {
    if(userID) {
      if(!categories) {
        fetch(`/api/v1/transactions/categories/${c._id}`, {
          credentials: "same-origin"
        })
         .then(response => response.text())
         .then(data => {
           const retrieved_transactions = JSON.parse(data);
           setTransactions(retrieved_transactions);
           console.log('Transactions: ' + retrieved_transactions);
         })
      }
    } 
  })

  return (
    <div className="card bg-info m-3">
      
    </div>
  );
}
