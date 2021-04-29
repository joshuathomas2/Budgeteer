import React from "react";
import * as yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

toast.configure();

const validationSchema = yup.object({
    name: yup.string().required()
  })

export function CategoryFormik(props) {

    const category = props.category; 
    const userId = props.userId; 
    const is_new = props.is_new;
    console.log(category);

    const { handleSubmit, handleChange, values, errors, setFieldValue } = useFormik({
        initialValues: !category
        ?   {
            user_id: userId.id,
            name: ""   
            } 
        :  {
            ...category[0]
        },
        validationSchema,
        onSubmit(values){
            fetch(`/api/v1/categories${is_new ? '' : '/' + category[0]._id}`, {
                method: is_new ? "POST" : "PUT",
                headers: {
                  "Content-Type": "application/json"
                },
                credentials: "same-origin",
                body: JSON.stringify(values)
              }).then(() => {
                toast('Successfully submitted', {
                  onClose: () => {
                    document.location = "/categories"
                  }
                })
              }).catch((error) => {
                toast('Failed to submit', {
                  onClose: () => {
                    document.location = "/categories"
                  }
                })
              })
        }
        })
            return (
    
                <form class="text-center p-5" action="#!">
                    <h2 class="mb-4 font-weight-bold text-secondary">{ is_new ? 'Add Category' : 'Edit Category' }</h2>
        
                    <input
                        type="text"
                        class="form-control mb-4 bg-info input-shadow"
                        placeholder="Name"
                        value={values.name}
                        onChange={handleChange}
                        name="name"
                    />
                    <p className="form-errors">{errors.name}</p>
        
                   
                    <button class="btn btn-secondary my-4 text-info" type="submit" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
        
            );
 


}