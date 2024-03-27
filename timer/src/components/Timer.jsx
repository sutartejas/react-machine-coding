import { useEffect, useState } from "react"

const Timer = () => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0);

    const deadline = 'Dec, 31, 2024';

    function getTime() {
        const time = Date.parse(deadline) - Date.now();

        let days = Math.floor(time / (1000 * 60 * 60 * 24))
        let hours = Math.floor(time / (1000 * 60 * 60) % 24)
        let minutes = Math.floor(time / (1000 * 60) % 60)
        let seconds = Math.floor(time / (1000) % 60);

        hours = String(hours).padStart(2, "0")
        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        days = String(days).padStart(2, "0")
        
        setDays(days);
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)

    }

    useEffect(() => {
        const interval = setInterval(() => {
            getTime(deadline)
        }, 1000);

        return () => {
            clearInterval(interval)
        }

    }, [])

    return <div>
        <div>happy New Year In-</div>
        <div>{`${days}: ${hours}: ${minutes}: ${seconds}`}</div>
    </div>

}

export default Timer;
