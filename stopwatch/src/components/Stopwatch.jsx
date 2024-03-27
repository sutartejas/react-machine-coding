
import { useState, useEffect, useRef } from "react";

const Stopwatch = () => {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalref = useRef(null);
    const startRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalref.current = setInterval(() => {
                setElapsedTime(Date.now() - startRef.current)
            }, 10)
        }
        return () => {
            clearInterval(intervalref.current)
        }
    }, [isRunning])


    function start() {
        setIsRunning(true);
        startRef.current = Date.now() - elapsedTime;
    }
    function stop() {
        setIsRunning(false)

    }
    function reset() {
        setIsRunning(false);
        setElapsedTime(0)
    }
    
    function formatTime() {

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let miliseconds = Math.floor(elapsedTime / (1000 / 10));

        hours = String(hours).padStart(2, "0")
        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        miliseconds = String(miliseconds).padStart(2, "0")
        return `${hours}:${minutes}:${seconds}:${miliseconds}`

    }

    return <div className="stopwatch">
        <div className="time">
            {formatTime()}
        </div>
        <div className="buttons">
            <button onClick={start} className="start-button">Start</button>
            <button onClick={stop} className="stop-button">Stop</button>
            <button onClick={reset} className="reset-button">Reset</button>
        </div>
    </div>
}

export default Stopwatch;