import React, { useRef } from 'react'
import { authAxios } from '../api/authApi'
import AlertComponent from './Utilities/AlertComponent';
import { useHistory } from "react-router-dom";

const Notify = () => {
    const alertRef = useRef();
    let history = useHistory();

    const handleNotify = async () => {
        try {
            const values = {
                name: 'Anower Jahan Shofol',
                email: 'jahananower@gmail.com',
                repoUrl: 'https://github.com/Shofol/meldCxTest.git',
                message: 'Wake me up before september ends because I want to know if I got this job'
            };
            const result = await authAxios.post(`${process.env.REACT_APP_BASE_URL}/notify`, values);
            alertRef.current.showAlert('success', 'Test completed');

            setTimeout(() => {
                history.push('/');
            }, 2500);

        } catch (error) {
            const { response } = error;
            console.log(response);
        }
    }



    return (
        <>
            <button onClick={handleNotify} className="px-8 py-3 rounded-md bg-white font-bold m-4">
                NOTIFY
            </button>
            <AlertComponent ref={alertRef} />
        </>
    )
}

export default Notify
