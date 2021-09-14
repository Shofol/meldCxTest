import React from 'react'
import styles from './home.module.css';
import { useFormik } from 'formik';

const Home = () => {

    const validate = values => {
        const errors = {};
        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length > 15) {
            errors.password = 'Must be 15 characters or less';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',

        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
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
                        {formik.errors.email ? <div className="text-red-700">{formik.errors.email}</div> : null}
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
                        {formik.errors.password ? <div className="text-red-700">{formik.errors.password}</div> : null}
                    </div>
                    <button type="submit" className="bg-blue-800 text-white py-2">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Home
