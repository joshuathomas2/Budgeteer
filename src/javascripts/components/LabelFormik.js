import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import DatePicker from 'react-datepicker'
import { toast } from 'react-toastify';

toast.configure();

const validationSchema = yup.object({
    name: yup.string().required(),
    planned_amount: yup.number().required().min(0),
    received_amount: yup.number().required().min(0),
    status: yup.string().required(),
    notes: yup.string().required(), 
    dueDate: yup.date().required(),
  })

  export function LabelFormik(props) {

    const label = props.label;
    const categoryId = props.categoryId;
    const is_new = props.is_new;

    const { handleSubmit, handleChange, values, errors, setFieldValue } = useFormik({
        initialValues: !label 
        ? {

          category_id: categoryId,
          name: "",
          planned_amount: 0,
          received_amount: 0,
          status: "",
          notes: "",
          dueDate: new Date()
        } : 
        {
            category_id: label[0].category_id,
            name: label[0].name,
            planned_amount: label[0].planned_amount,
            received_amount: label[0].received_amount,
            status: label[0].status,
            notes: label[0].notes,
            dueDate: new Date(label[0].due_date)
        }, 
        validationSchema,
        onSubmit(values){
            fetch(`/api/v1/labels${is_new ? '' : '/' + label[0]._id}`, {
                method: is_new ? "POST" : "PUT",
                headers: {
                  "Content-Type": "application/json"
                },
                credentials: "same-origin",
                body: JSON.stringify(values)
              }).then(() => {
                toast('Successfully submitted label', {
                  onClose: () => {
                    document.location = `/categories`
                  }
                })
              }).catch((error) => {
                toast('Failed to submit label', {
                  onClose: () => {
                    document.location =  `/categories`
                  }
                })
              })
        }
        })

    return (
        
        <form className="text-center p-5" action="#!">
            <h2 className="mb-4 font-weight-bold text-secondary">{ is_new ? 'Add Label' : 'Edit Label' }</h2>

            <input
                type="text"
                className="form-control mb-4 bg-info input-shadow"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                name="name"
            />
            <p className="form-errors">{errors.name}</p>

            <input
                type="number"
                className="form-control mb-4 bg-info input-shadow"
                placeholder="Planned Amount"
                value={values.planned_amount}
                onChange={handleChange}
                name="planned_amount"
            />
            <p className="form-errors">{errors.planned_amount}</p>

            <input
                type="number"
                className="form-control mb-4 bg-info input-shadow"
                placeholder="Received Amount"
                value={values.received_amount}
                onChange={handleChange}
                name="received_amount"
            />
            <p className="form-errors">{errors.received_amount}</p>

            <input
                type="text"
                className="form-control mb-4 bg-info input-shadow"
                placeholder="Status"
                value={values.status}
                onChange={handleChange}
                name="status"
            />
            <p className="form-errors">{errors.status}</p>

            <div className="field mb-3">
            <div className="input-group has-validation">
                <div className={errors.due_date ? 'is-invalid' : ''}>
                <DatePicker  placeholderText="Due Date" className={`form-control ${errors.due_date ? 'is-invalid' : ''} bg-info`} id="due_date" name="due_date" selected={values.due_date} onChange={date => setFieldValue('due_date', date)}/>
                </div>
                <p className="form-errors">{errors.due_date}</p>
            </div>
            </div>

            <textarea
                className="form-control mb-4 bg-info input-shadow"
                placeholder="Notes"
                value={values.notes}
                onChange={handleChange}
                name="notes"
            />
            <p className="form-errors">{errors.notes}</p>

            <button className="btn btn-secondary my-4 text-info" type="submit" onClick={handleSubmit}>
                Submit
            </button>
        </form>

    )
}   