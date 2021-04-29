import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from 'react-toastify';

toast.configure();

const validationSchema = yup.object({
  title: yup.string().required(),
  notes: yup.string().required(),
  amount: yup.number().required().min(0),
  label_id: yup.string().required(),
});

export function TransactionFormik(props) {
    const transaction = props.transaction; 
    const labels = props.labels;
    const categoryId = props.categoryId;
    const userId = props.userId;
    const is_new = props.is_new;

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: !transaction
      ? {
          user_id: userId._id,
          category_id: categoryId,
          label_id: labels[0]._id,
          title: "",
          notes: "",
          amount: 0,
        }
      : {
          ...transaction,
        },
    validationSchema,
    onSubmit(values) {
        fetch(`/api/v1/transactions${is_new ? '' : '/' + transaction._id}`, {
            method: is_new ? "POST" : "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            credentials: "same-origin",
            body: JSON.stringify(values)
          }).then(() => {
            toast('Successfully submitted', {
              onClose: () => {
                document.location = "/transactions"
              }
            })
          }).catch((error) => {
            toast('Failed to submit', {
              onClose: () => {
                document.location = "/transactions"
              }
            })
          })
    },
  });


  return (
    <form className="text-center p-5" action="#!">
      <h2 className="mb-4 font-weight-bold text-secondary">{ is_new ? 'Add Transaction' : 'Edit Transaction' }</h2>



      <input
        type="text"
        className="form-control mb-4 bg-info input-shadow"
        placeholder="Title"
        value={values.title}
        onChange={handleChange}
        name="title"
      />
      <p className="form-errors">{errors.title}</p>

      <textarea
        className="form-control mb-4 bg-info input-shadow"
        placeholder="Notes"
        value={values.notes}
        onChange={handleChange}
        name="notes"
      />
      <p className="form-errors">{errors.notes}</p>

      <select
        className="form-control mb-4 bg-info input-shadow"
        id="label_id"
        name="label_id"
        value={values.label_id}
        onChange={handleChange}
      >
        {labels.map((l) => {
            return (
                <option value={l._id}>{l.name}</option>
            );
        })}
      </select>

      <input
        type="number"
        className="form-control mb-4 bg-info input-shadow"
        placeholder="Amount"
        value={values.amount}
        onChange={handleChange}
        name="amount"
      />
      <p className="form-errors">{errors.amount}</p>

      <button
        className="btn btn-secondary my-4 text-info"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
  
  
}
