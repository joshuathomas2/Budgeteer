import React from "react";
import { TransactionRow } from './TransactionRow'

export function TransactionCard(props) {
  return (
    <div className="card bg-info m-3">
      <div className="card-body">
        <h5 className="card-title text-center">Category Title</h5>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Label</th>
              <th scope="col">Amount</th>
              <th scope="col">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {/*TODO: each transaction will be need to rendered dynamically 
                     from a GET /transactions call, filtered on the specific 
                     category card that the user is viewing */}
            <TransactionRow></TransactionRow>
            <TransactionRow></TransactionRow>
            <TransactionRow></TransactionRow>
          </tbody>
        </table>
        <a href="/transaction/new" className="btn btn-primary">
          Add Transaction
        </a>
      </div>
    </div>
  );
}
