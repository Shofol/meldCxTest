import React from 'react'
import { authAxios } from '../api/authApi'

const Notify = () => {


    const handleNotify = async () => {
        try {
            const values = {
                name: 'Anower Jahan Shofol',
                email: 'jahananower@gmail.com',
                repoUrl: 'https://github.com/Shofol/meldCxTest.git',
                message: 'Wake me up before september ends because I want to know if I got this job'
            };
            const result = await authAxios.post(`${process.env.REACT_APP_BASE_URL}/notify`, values);

        } catch (error) {
            const { response } = error;
            console.log(response);
        }
    }



    return (
        <button onClick={handleNotify} className="px-8 py-3 rounded-md bg-white font-bold m-4">
            NOTIFY
        </button>
    )
}

export default Notify
