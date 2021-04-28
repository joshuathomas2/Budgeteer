import React, { useState, useEffect } from "react";
import { TransactionFormik } from "./TransactionFormik";

export function TransactionForm(props) {
  const [transaction, setTransaction] = useState();
  const [labels, setLabels] = useState();
  const [userID, setUserID] = useState();

  //retrieving userID
  useEffect(() => {
    if (!userID) {
      fetch("/api/v1/users/getCurrentUser", {
        credentials: "same-origin",
      })
        .then((response) => response.text())
        .then((data) => {
          const retrieved_id = JSON.parse(data);
          setUserID(retrieved_id);
        });
    }
  });

  let search = window.location.search;
  let params = new URLSearchParams(search);
  let transaction_id = params.get("transactionId");
  let category_id = params.get("categoryId");
console.log(category_id)
  let is_new = true; 
  if (transaction_id) {
    is_new = false;
  }
  //retrieving transaction data if it exists
  useEffect(() => {
    if (transaction_id) {
      if (!transaction) {
        fetch(`/api/v1/transactions/one/${transaction_id}`, {
          credentials: "same-origin",
        })
          .then((response) => response.text())
          .then((data) => {
            const retrieved_transaction = JSON.parse(data);
            setTransaction(retrieved_transaction);
            //console.log(retrieved_transaction);
          });
      }
    }
  });

  //retrieving all labels for current category
  useEffect(() => {
    if (category_id) {
      if (!labels) {
        fetch(`/api/v1/labels/category/${category_id}`, {
          credentials: "same-origin",
        })
          .then((response) => response.text())
          .then((data) => {
            const retrieved_labels = JSON.parse(data);
            setLabels(retrieved_labels);
            //console.log(retrieved_labels);
          });
      }
    }
  });

  if (is_new) {
    if (!labels || !userID) {
      return <p>Loading...</p>;
    } else {
      return <TransactionFormik labels={labels} categoryId={category_id} userId={userID}
      is_new= {is_new} />;
    }
  } else {
    if (!userID || !transaction || !labels) {
      //console.log(labels)
      return <p>Loading data..</p>;
    } else {
      return (
        <TransactionFormik
          transaction={transaction}
          labels={labels}
          categoryId={category_id}
          userId={userID}
          is_new= {is_new}
        />
      );
    }
  }
}
