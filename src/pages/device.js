import React from 'react'
import styles from './device.module.css';
import CurrentDevices from '../components/CurrentDevices'
import Notify from '../components/Notify';
import Logut from '../components/Logut';

const Device = () => {
    return (
        <div className={styles.container}>
            <CurrentDevices />
            <div className="flex justify-center items-center fixed bottom-0 left-0 right-0 bg-deep-org">
                <Notify />
                <Logut />
            </div>
        </div>
    )
}

export default Device
