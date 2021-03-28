import React from "react";
import {TransactionCard} from './TransactionCard'

export function TransactionsCardList(props) {
  return (

    //TODO Render these cards dynamically according to how many transactions the current user_id has
    <>
      <TransactionCard></TransactionCard>
      <TransactionCard></TransactionCard>
      <TransactionCard></TransactionCard>
      <TransactionCard></TransactionCard>
    </>
    

  );
}
