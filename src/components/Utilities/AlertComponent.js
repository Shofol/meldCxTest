import React, { useState, forwardRef, useImperativeHandle } from 'react'

const AlertComponent = forwardRef((props, ref) => {

    const [showAlertBox, setShowAlertBox] = useState(false);
    const [message, setMessage] = useState(null);

    useImperativeHandle(ref, () => ({
        showAlert(message) {
            setShowAlertBox(true);
            setMessage(message);
            setTimeout(() => {
                setShowAlertBox(false);
                setMessage(null);
            }, 2000);
        }

    }));


    return (
        <>
            {showAlertBox && <div className="fixed right-10 top-10 bg-red-400 p-5">
                {message}
            </div>}
        </>
    )
}
)
export default AlertComponent
