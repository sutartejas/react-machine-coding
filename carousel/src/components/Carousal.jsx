import { useEffect, useState, useRef } from "react"

const Carousal = ({ data }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const intervalRef = useRef(null);

    useEffect(() => {
        start();
        return () => clearInterval(intervalRef.current)
    }, [])

    const prevSlide = () => {
        stop();
        setActiveIndex((prev) => {
            if (prev === 0) {
                return data.length - 1;
            } else {
                return prev - 1
            }
        })
    }

    const nextSlide = () => {
        stop();
        setActiveIndex((prev) => {
            if (prev === data.length - 1) {
                return 0;
            } else {
                return prev + 1
            }
        })
    }

    const start = () => {
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => {
                if (prev === data.length - 1) {
                    return 0;
                } else {
                    return prev + 1
                }
            })
        }, 3500)
    }


    const stop = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    return <div className="carousal">
        {data.map((item, index) => {
            return (
                <div
                    key={item.id}
                    className={
                        activeIndex === index ? "carousal-item active" : "carousal-item"
                    }
                >
                    <img
                        onMouseLeave={start}
                        onMouseOver={stop}
                        src={item.image}
                        alt={item.title}
                    ></img>
                </div>
            );
        })}

        <button className="prev" onClick={prevSlide}>
            &lt;
        </button>
        <button className="next" onClick={nextSlide}>
            &gt;
        </button>
    </div>

}

export default Carousal;