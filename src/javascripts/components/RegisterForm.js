import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

toast.configure();

export function RegisterForm(props) {

    const validationSchema = yup.object({
        email: yup.string().required(),
        username: yup.string().required(),
        password: yup.string().required()
    });

    let { handleSubmit, handleChange, values, errors } = useFormik({
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
                    toast.success('Successfully registered!', {
                      onClose: () => {
                        document.location = "/"
                      },
                      autoClose: 2000
                    })
                  })
                  .catch((error) => {
                    toast.error('Failed to register!', {
                      onClose: () => {
                        document.location = "/login"
                      },
                      autoClose: 2000
                    })
                  })
        }
    })

    return (
        <form className="text-center p-5" action="#!">
            <h2 className="mb-4 font-weight-bold text-secondary">Registration</h2>

            <input
                type="text"
                class="form-control mb-4 bg-info input-shadow"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                name="email"
            />
            <p className="form-errors">{errors.email}</p>

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

            <button classclassName="btn btn-secondary my-4 text-info" type="submit" onClick={handleSubmit}>
                Register
            </button>

            <p classclassName="text-secondary">
                Already a user? <a class="text-secondary link-helper" href="/login"> Login</a>
            </p>
        </form>
    )
}