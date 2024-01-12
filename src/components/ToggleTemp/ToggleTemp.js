import React, { useState, useEffect } from 'react';
import './ToggleTemp.css';

const ToggleTemp = ({ temp }) => {
    const [isCelsius, setIsCelsius] = useState(true);
    const [checked, setChecked] = useState(true);
    const [temperature, setTemperature] = useState();

    const toggleTemperatureUnit = () => {
        setIsCelsius((prev) => !prev);
    };

    useEffect(() => {
        if (temp !== undefined) {
            setTemperature(Math.round(temp));
        }
    }, [temp]);

    const convertTemperature = (temp, isCelsius) => {
        return isCelsius ? temp + "°C" : Math.round((temp * 9 / 5) + 32) + "°F";
    };

    return (
        <div>

            <p className='temperature'> {convertTemperature(temperature, isCelsius)}</p>

            <div className='small'>Switch to </div>
            <button
                checked={checked}
                onChange={(e) => setChecked(e.value)}
                onClick={toggleTemperatureUnit}
            >
                {isCelsius ? "Fahrenheit" : "Celcius"}
            </button>
        </div>
    );
};

export default ToggleTemp;
