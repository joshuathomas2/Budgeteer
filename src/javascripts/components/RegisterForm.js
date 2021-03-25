import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

export function RegisterForm(props) {

    const validationSchema = yup.object({
        email: yup.string().required(),
        username: yup.string().required(),
        password: yup.string().required()
    });

    let { handleSubmit, handleChange, values, error } = useFormik({
        initialValues: {
            email: "",
            username: "",
            password: ""
        },
        validationSchema,
        onSubmit(values) {
            fetch('/api/v1/users/register', {
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
        <form class="text-center p-5" action="#!">
            <h2 class="mb-4 font-weight-bold text-secondary">Registration</h2>

            <input
                type="text"
                class="form-control mb-4 bg-info input-shadow"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                name="email"
            />

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

            <button class="btn btn-secondary my-4 text-info" type="submit" onClick={handleSubmit}>
                Register
            </button>

            <p class="text-secondary">
                Already a user? <a class="text-secondary link-helper" href="/login"> Login</a>
            </p>
        </form>
    )
}