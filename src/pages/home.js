import React, { useRef } from 'react'
import styles from './home.module.css';
import { useFormik } from 'formik';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import AlertComponent from '../components/Utilities/AlertComponent';

const Home = () => {
    let history = useHistory();
    const alertRef = useRef();

    const validate = values => {
        const errors = {};
        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 7) {
            errors.password = 'Must be 7 characters or more';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };

    const initialFormValues = {
        email: '',
        password: '',
    }

    const formik = useFormik({
        initialValues: initialFormValues,
        validate,
        onSubmit: async (values) => {

            try {
                const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, values);
                localStorage.setItem('token', result.data);
                history.push("/device");

            } catch (error) {
                const { response } = error;
                alertRef.current.showAlert(response.data);
            }
        },
    });


    return (
        <div className={styles.container}>
            <div className="bg-white w-1/4 p-10">
                <h1 className="text-3xl text-center mb-8">Login</h1>
                <form className="flex flex-col" onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <div className="flex items-center bg-gray-200">
                            <img src="/email.svg" width="15px" height="15px" alt="email" className="ml-4" />
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                className="bg-gray-200  rounded-sm  py-2 px-4 w-full outline-none"
                            />
                        </div>
                        {formik.errors.email ? <div className="text-red-700 text-sm">{formik.errors.email}</div> : null}
                    </div>
                    <div className="mb-8">
                        <div className="flex items-center bg-gray-200">
                            <img src="/password.svg" width="15px" height="15px" alt="password" className="ml-4" />

                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                placeholder="Password"
                                className="bg-gray-200 rounded-sm  py-2 px-4 w-full outline-none"
                            />
                        </div>
                        {formik.errors.password ? <div className="text-red-700 text-sm">{formik.errors.password}</div> : null}
                    </div>
                    <button type="submit" className="bg-blue-800 text-white py-2">Login</button>
                </form>
            </div>
            <AlertComponent ref={alertRef} />
        </div>
    )
}

export default Home
