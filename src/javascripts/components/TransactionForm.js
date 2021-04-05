import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

export function RegisterForm(props) {
    return (
        //label picker: dropdown? 
        //title: text field 
        //notes: text area 
        //amount: text, numbers

        <form class="text-center p-5" action="#!">
            <h2 class="mb-4 font-weight-bold text-secondary">Add Transaction</h2>

            <input
                type="text"
                class="form-control mb-4 bg-info input-shadow"
                placeholder="title"
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