import React, { useState, forwardRef, useImperativeHandle } from 'react'

const AlertComponent = forwardRef((props, ref) => {

    const [showAlertBox, setShowAlertBox] = useState(false);
    const [message, setMessage] = useState(null);
    const [type, setType] = useState(null);

    useImperativeHandle(ref, () => ({
        showAlert(type, message) {
            setShowAlertBox(true);
            setMessage(message);
            setType(type);
            setTimeout(() => {
                setShowAlertBox(false);
                setMessage(null);
                setType(null);
            }, 2000);
        }

    }));


    return (
        <>
            {showAlertBox && <div className={"fixed right-10 top-10 p-5 " + (type === 'error' ? 'bg-red-400' : 'bg-green-300')}>
                {message}
            </div>}
        </>
    )
}
)
export default AlertComponent
