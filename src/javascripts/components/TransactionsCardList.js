import React from "react";
import {TransactionCard} from './TransactionCard'

export function TransactionsCardList(props) {
  return (

    //TODO Render cards dynamically based on results of a GET /categories api call. 
    //I have 4 hard coded components for layout purposes
    <>
      <TransactionCard></TransactionCard>
      <TransactionCard></TransactionCard>
      <TransactionCard></TransactionCard>
      <TransactionCard></TransactionCard>
    </>
    

  );
}
