import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import DatePicker from 'react-datepicker'


const validationSchema = yup.object({
    name: yup.string().required(),
    planned_amount: yup.number().required().min(0),
    received_amount: yup.number().required().min(0),
    status: yup.string().required(),
    notes: yup.string().required(), 
    dueDate: yup.date().required(),
  })


export function LabelForm(props) {

    const { handleSubmit, handleChange, values, errors, setFieldValue } = useFormik({
        initialValues:  {
          name: "",
          planned_amount: 0,
          received_amount: 0,
          status: "",
          notes: "",
          dueDate: new Date()
        } , 
        validationSchema,
        onSubmit(values){
        }
        })
    

    return (
        
        <form class="text-center p-5" action="#!">
            <h2 class="mb-4 font-weight-bold text-secondary">Add Label</h2>

            <input
                type="text"
                class="form-control mb-4 bg-info input-shadow"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                name="name"
            />

            <input
                type="number"
                className="form-control mb-4 bg-info input-shadow"
                placeholder="Planned Amount"
                value={values.planned_amount}
                onChange={handleChange}
                name="planned_amount"
            />

            <input
                type="number"
                className="form-control mb-4 bg-info input-shadow"
                placeholder="Received Amount"
                value={values.received_amount}
                onChange={handleChange}
                name="received_amount"
            />

            <input
                type="text"
                class="form-control mb-4 bg-info input-shadow"
                placeholder="Status"
                value={values.status}
                onChange={handleChange}
                name="status"
            />

            <div className="field mb-3">
            <label htmlFor="due_date" className="form-label">Due Date</label>
            <div className="input-group has-validation">
                <div className={errors.due_date ? 'is-invalid' : ''}>
                <DatePicker className={`form-control ${errors.due_date ? 'is-invalid' : ''}`} id="due_date" name="due_date" selected={values.due_date} onChange={date => setFieldValue('due_date', date)}/>
                </div>
            </div>
            </div>

            <textarea
                className="form-control mb-4 bg-info input-shadow"
                placeholder="Notes"
                value={values.notes}
                onChange={handleChange}
                name="notes"
            />


            <button class="btn btn-secondary my-4 text-info" type="submit" onClick={handleSubmit}>
                Create
            </button>
        </form>

    )
}   