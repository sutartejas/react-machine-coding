import { useEffect, useState } from "react";

const Timer = () => {
    const [days, setDays] = useState("00");
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");

    const deadline = 'December 31, 2024 23:59:59';

    const getTime = () => {
        let timeInMillis = Date.parse(deadline) - Date.now();

        if (timeInMillis < 0) {
            timeInMillis = 0;
        }

        let days = Math.floor(timeInMillis / (1000 * 60 * 60 * 24));
        timeInMillis %= (1000 * 60 * 60 * 24);

        let hours = Math.floor(timeInMillis / (1000 * 60 * 60));
        timeInMillis %= (1000 * 60 * 60);

        let minutes = Math.floor(timeInMillis / (1000 * 60));
        timeInMillis %= (1000 * 60);

        let seconds = Math.floor(timeInMillis / 1000);

        // Ensure double-digit formatting
        setDays(String(days).padStart(2, "0"));
        setHours(String(hours).padStart(2, "0"));
        setMinutes(String(minutes).padStart(2, "0"));
        setSeconds(String(seconds).padStart(2, "0"));
    };

    useEffect(() => {
        const interval = setInterval(getTime, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div>Happy New Year In:</div>
            <div>{`${days}:${hours}:${minutes}:${seconds}`}</div>
        </div>
    );
};

export default Timer;

