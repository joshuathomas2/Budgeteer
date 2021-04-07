import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

const validationSchema = yup.object({
    title: yup.string().required(),
    notes: yup.string().required(),
    amount: yup.number().required().min(0),
    label: yup.string().required()
  })


export function TransactionForm(props) {

    const { handleSubmit, handleChange, values, errors, setFieldValue } = useFormik({
        initialValues:  {
          title: "",
          notes: "",
          amount: 0,
          label: ""
     
        } , 
        validationSchema,
        onSubmit(values){
        }
        })
    

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
              className= "form-control mb-4 bg-info input-shadow"
              id="type"
              name="label"
              value={values.label}
              onChange={handleChange}
            >
              <option value="">Label</option>
              <option value="">Label</option>
            
            </select>

            <input
                type="number"
                className="form-control mb-4 bg-info input-shadow"
                placeholder="Amount"
                value={values.amount}
                onChange={handleChange}
                name="amount"
            />

            {/* implement a dropdown that shows options for all available labels for a user's category */}

            <button class="btn btn-secondary my-4 text-info" type="submit" onClick={handleSubmit}>
                Create
            </button>
        </form>

    )
}   