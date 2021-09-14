import React, { useEffect, useState } from 'react'
import { authAxios } from '../api/authApi';
import styles from './CurrentDevices.module.css'

const CurrentDevices = () => {

    const [currentDevices, setCurrentDevices] = useState([])

    useEffect(() => {
        fetchDevices();

        let timer = setInterval(() => {
            fetchDevices();
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    }, []);


    const fetchDevices = async () => {
        try {
            const result = await authAxios.get(`${process.env.REACT_APP_BASE_URL}/devices`);
            setCurrentDevices(result.data.devices);

        } catch (error) {
            const { response } = error;
            console.log(response);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.centerCircle}>
                <p className="text-white text-center"><span className="text-4xl">{currentDevices.length}</span><br />DEVICES<br /> ONLINE</p>
            </div>
            <div className={styles.circleContainer}>
                {currentDevices.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={styles.circle}
                            style={{
                                transform: `rotate(${index *
                                    (360 / +currentDevices.length)}deg) translate(13em)`
                            }}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default CurrentDevices
