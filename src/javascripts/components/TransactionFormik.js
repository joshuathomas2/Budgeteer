import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  title: yup.string().required(),
  notes: yup.string().required(),
  amount: yup.number().required().min(0),
  label: yup.string().required(),
});

export function TransactionFormik(props) {
    const transaction = props.transaction; 
    const labels = props.labels;
    const categoryId = props.categoryId;

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: !transaction
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

  return (
    <form className="text-center p-5" action="#!">
      <h2 className="mb-4 font-weight-bold text-secondary">Add Transaction</h2>

      <input
        type="text"
        className="form-control mb-4 bg-info input-shadow"
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
        className="btn btn-secondary my-4 text-info"
        type="submit"
        onClick={handleSubmit}
      >
        Create
      </button>
    </form>
  );
}
