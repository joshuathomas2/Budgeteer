import React, { useEffect, useState } from "react";
import { TransactionRow } from "./TransactionRow";
import { useCookies } from "react-cookie";
import { LoadingSpinner } from "./LoadingSpinner"

export function TransactionCard(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const c = props.category;
  const [transactions, setTransactions] = useState();

  useEffect(() => {
    if (!transactions) {
      fetch(`/api/v1/transactions/categories/${c._id}`, {
        credentials: "same-origin",
      })
        .then((response) => response.text())
        .then((data) => {
          const retrieved_transactions = JSON.parse(data);
          setTransactions(retrieved_transactions);
    
        });
    }
  });

  if (!transactions) {
    return <LoadingSpinner/>;
  } else {
    return (
   
          <div className="card bg-info m-3">
            <div className="card-body">
              <h3 className="card-title text-secondary">{ c.name }</h3>
              <div style={{ overflowX: 'auto' }}>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Label</th>
                      <th scope="col">Amount</th>
                      <th scope="col">View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((t) => {
                      return <TransactionRow key={t._id} transaction={t} category={c} />;
                    })}
                  </tbody>
                </table>
              </div>
              <a href={ '/transaction/form?categoryId=' + c._id } className="btn btn-primary">
                Add Transaction
              </a>
            </div>
   
      </div>
    );
  }
}
