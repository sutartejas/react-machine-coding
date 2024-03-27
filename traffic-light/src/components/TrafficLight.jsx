import { useEffect, useState } from "react";


const TrafficLight = ({ initialColor = 'red', config }) => {

    const [currentColor, setCurrentColor] = useState(initialColor);
    

    useEffect(() => {

        const { duration, nextColor } = config[currentColor];
        console.log(duration)

        const timer = setTimeout(() => {
            setCurrentColor(nextColor)
        }, duration);
        return () => {
            clearTimeout(timer)
        }

    }, [currentColor]);

    console.log(config, config.currentColor)

    return <div className="traffic-light-container">{
        Object.keys(config).map((color, i) => {
            return <Light key={i} backgroundColor={color === currentColor ? currentColor : undefined} />
        })
    }</div>
}

function Light({ backgroundColor }) {
    return (
        <div
            aria-hidden={true}
            className="traffic-light"
            style={{ backgroundColor }}
        />
    );
}
export default TrafficLight;