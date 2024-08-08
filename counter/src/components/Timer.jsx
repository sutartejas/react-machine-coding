import { useEffect, useRef, useState } from "react";


const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCount(count + 1)
        }, 100)
    }, []);

    return <div>
        {count}
    </div>
}

export default Timer;