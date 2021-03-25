import React from 'react';
import * as yup from 'yup';
import {useFormik} from 'formik';

export function LoginForm(props) {

    const validationSchema = yup.object({
        username: yup.string().required(),
        password: yup.string().required()
    });

    let {handleSubmit, handleChange, values, error} = useFormik({
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
                    throw Error('Failed to login');
                }

                return response.text();
            })
            .then(() => {
                document.location = '/';
            })
            .catch((error) => {
                console.log(error);
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

        <input
          type="password"
          className="form-control mb-4 bg-info input-shadow"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          name="password"
        />

        <div className="d-flex justify-content-around">
          <div>
            <a className="text-secondary link-helper" href="/">Forgot password?</a>
          </div>
        </div>

        <button className="btn btn-secondary my-4 text-info" type="submit" onClick={handleSubmit}>
          Login
        </button>

        <p className="text-secondary">
            Not a member? <a className="text-secondary link-helper" href="/register"> Register</a>
        </p>
      </form>
    )
}