import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

const validationSchema = yup.object({
    name: yup.string().required()
  })


export function CategoryForm(props) {

    const { handleSubmit, handleChange, values, errors, setFieldValue } = useFormik({
        initialValues:  {
          user_id: "",
          name: ""
            
        } , 
        validationSchema,
        onSubmit(values){
   
        }
        })
    

    return (
    
        <form class="text-center p-5" action="#!">
            <h2 class="mb-4 font-weight-bold text-secondary">Add Category</h2>

            <input
                type="text"
                class="form-control mb-4 bg-info input-shadow"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                name="name"
            />

           
            <button class="btn btn-secondary my-4 text-info" type="submit" onClick={handleSubmit}>
                Create
            </button>
        </form>

    )
}   