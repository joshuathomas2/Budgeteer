import React from 'react';
import * as yup from 'yup';
import {useFormik} from 'formik';
import { toast } from 'react-toastify';

toast.configure();

export function LoginForm(props) {

    const validationSchema = yup.object({
        username: yup.string().required(),
        password: yup.string().required()
    });

    let {handleSubmit, handleChange, values, errors} = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema,
        onSubmit(values) {
            fetch('/api/v1/users/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                credentials: 'same-origin',
                body: JSON.stringify(values)
            })
            .then(response => {
                if (!response.ok) {
                    throw Error('Failed to login')
                }
                return response.text();
            })
            .then(() => {
              toast('Successfully signed in', {
                onClose: () => {
                  document.location = "/"
                }
              })
            })
            .catch((error) => {
              toast('Failed to sign in', {
                onClose: () => {
                  document.location = "/login"
                }
              })
            })
        }
    })

    return (

        <form className="text-center p-5">

        <h1 className="mb-2 font-weight-bold text-secondary">
          Welcome to Budgeteer
        </h1>

        <img className="w-50 mb-4" src="../../images/DarkGreenLogo-cutout.png"/>

        <input
          type="text"
          className="form-control mb-4 bg-info input-shadow"
          placeholder="Username"
          value={values.username}
          onChange={handleChange}
          name="username"
        />
        <p className="form-errors">{errors.username}</p>

        <input
          type="password"
          className="form-control mb-4 bg-info input-shadow"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          name="password"
        />
        <p className="form-errors">{errors.password}</p>


        <button className="btn btn-secondary my-4 text-info" type="submit" onClick={handleSubmit}>
          Login
        </button>

        <p className="text-secondary">
            Not a member? <a className="text-secondary link-helper" href="/register"> Register</a>
        </p>
      </form>
    )
}