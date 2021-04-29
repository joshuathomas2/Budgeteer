import React, { useState, useEffect } from "react";
import { TransactionRow } from "./TransactionRow";
import { useCookies } from "react-cookie";

export function LabelItem(props) {
  const l = props.label;

  if (!l) {
    return <li className="mt-3 text-secondary">Loading data...</li>;
  } else {
    return <li className="mt-3 text-secondary">{l.name}</li>;
  }
}

export function Category(props) {
  const [category, setCategory] = useState();
  const [labels, setLabels] = useState();
  const [transactions, setTransactions] = useState();

  //retrieve category id from URL parameter
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let category_id = params.get("id");

  useEffect(() => {
    if (category_id) {
      if (!category) {
        fetch(`/api/v1/categories/one/${category_id}`, {
          credentials: "same-origin",
        })
          .then((response) => response.text())
          .then((data) => {
            const retrieved_category = JSON.parse(data);
            setCategory(retrieved_category);
            //console.log('Category: ' + retrieved_category);
          });
      }
    }
  });

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
            //console.log(retrieved_labels)
          });
      }
    }
  });

  useEffect(() => {
    if (!transactions) {
      fetch(`/api/v1/transactions/categories/${category_id}`, {
        credentials: "same-origin",
      })
        .then((response) => response.text())
        .then((data) => {
          const retrieved_transactions = JSON.parse(data);
          setTransactions(retrieved_transactions);
          //console.log('Transactions: ' + retrieved_transactions);
        });
    }
  });

  if (!category || !labels || !transactions) {
    return <span className="text-center">Loading data...</span>;
  } else {
    console.log(category)
    return (
      <>
        <section id="" className="bg-light my-5">
          <div className="text-center">
          <h1 className="text-secondary text-center my-4">
            {category[0].name}
          </h1>
          <a href={ '/category/form?categoryId=' + category[0]._id} class=" text-center btn btn-primary">
           Edit Category
          </a>
          </div>
          <div className="row">
            <div className="col-6">
              <h4 className="my-3 text-center text-secondary">Labels</h4>
              <ul className="ml-5 px-5">
                {labels.map((l) => {
                  return <LabelItem key={l._id} label={l} />;
                })}
              </ul>
            </div>
            <div className="col-6">
              <img></img>
            </div>
          </div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <h3 className="text-center text-secondary mt-5">
                Transaction List
              </h3>
              <div className="card bg-info m-3">
                <div className="card-body">
                  <div style={{ overflowX: "auto" }}>
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
                          return <TransactionRow key={t._id} transaction={t} category={category[0]} />;
                        })}
                      </tbody>
                    </table>
                  </div>
           
                </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </section>
      </>
    );
  }
}
