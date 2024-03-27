
import { useState } from "react";

const GridLights = () => {
    const [order, setOrder] = useState([]);
    const [isDeActivating, setIsDeActivating] = useState(false)

    const config = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];

    const activateCell = (i) => {
        let currentOrder = [...order];
        currentOrder.push(i)
        setOrder(currentOrder);
        if (currentOrder.length === config.flat(1).filter(Boolean).length) {
            deActivateCells()
        }
    }

    const deActivateCells = () => {
        setIsDeActivating(true)
        let timer = setInterval(() => {
            setOrder(order => {
                let newOrder = order.slice();
                newOrder.pop();
                if (newOrder.length == 0) {
                    clearInterval(timer);
                    setIsDeActivating(false)
                }
                return newOrder
            })
        }, 500)
    }

    return <div className="grid-sequence-container">
        {config.flat(1).map((cell, index) => {
            return cell ? <Cell
                disabled={order.includes(index) || isDeActivating}
                filled={order.includes(index)}
                onClick={() => activateCell(index)}
            /> : <span></span>
        })}
    </div>
}


const Cell = ({ onClick, filled, disabled }) => {
    return <button
        onClick={onClick}
        disabled={disabled}
        className={filled ? 'cell cell-activated' : 'cell'}></button>
}

export default GridLights