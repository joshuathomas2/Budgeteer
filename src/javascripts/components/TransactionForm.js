import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  title: yup.string().required(),
  notes: yup.string().required(),
  amount: yup.number().required().min(0),
  label: yup.string().required(),
});

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

  let is_new = transaction_id === undefined;
  //retrieving transaction data if it exists
  useEffect(() => {
    if (transaction_id) {
      fetch(`/api/v1/transactions/one/${transaction_id}`, {
        credentials: "same-origin",
      })
        .then((response) => response.text())
        .then((data) => {
          const retrieved_transaction = JSON.parse(data);
          setTransaction(retrieved_transaction);
        });
    }
  });

  //retrieving all labels for current category
  useEffect(() => {
    if (!userID) {
      if (category_id) {
        fetch(`/api/v1/labels/name/${category_id}`, {
          credentials: "same-origin",
        })
          .then((response) => response.text())
          .then((data) => {
            const retrieved_labels = JSON.parse(data);
            setLabels(retrieved_labels);
          });
      }
    }
  });

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: is_new
      ? {
          user_id: "",
          category_id: "",
          label_id: "",
          title: "",
          notes: "",
          amount: 0,
        }
      : {
          ...transaction,
        },
    validationSchema,
    onSubmit(values) {},
  });

  if (!is_new) {
      if (!transaction || !labels) {
        return <span className="text-center">Loading data...</span>;
      }  
  } else {
    return (
      //to be addedlabel picker: dropdown?
      <form class="text-center p-5" action="#!">
        <h2 class="mb-4 font-weight-bold text-secondary">Add Transaction</h2>

        <input
          type="text"
          class="form-control mb-4 bg-info input-shadow"
          placeholder="Title"
          value={values.title}
          onChange={handleChange}
          name="title"
        />

        <textarea
          className="form-control mb-4 bg-info input-shadow"
          placeholder="Notes"
          value={values.notes}
          onChange={handleChange}
          name="notes"
        />

        <select
          className="form-control mb-4 bg-info input-shadow"
          id="type"
          name="label"
          value={values.label}
          onChange={handleChange}
        >
          {/* //implement a map function rather than the below option tags that dynamically shows all labels for the current category_id that the user is in  */}
          <option value=""></option>
          <option value=""></option>
        </select>

        <input
          type="number"
          className="form-control mb-4 bg-info input-shadow"
          placeholder="Amount"
          value={values.amount}
          onChange={handleChange}
          name="amount"
        />

        <button
          class="btn btn-secondary my-4 text-info"
          type="submit"
          onClick={handleSubmit}
        >
          Create
        </button>
      </form>
    );
  }
}
