import React from 'react'
import { useHistory } from "react-router-dom";

const Logut = () => {

    let history = useHistory();

    const handleLogOut = () => {
        localStorage.removeItem('token');
        history.push('/');
    }

    return (
        <button onClick={handleLogOut} className="px-8 py-3 rounded-md bg-gray-800 text-white font-bold m-4">
            LOGOUT
        </button>
    )
}

export default Logut
