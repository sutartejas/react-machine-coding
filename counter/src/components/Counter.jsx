import { useSelector, useDispatch } from "react-redux";
import { incrementCounter , decrementCounter} from '../redux/actions/couunterAction'

const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch()

    function Increment() {
        dispatch(incrementCounter())
    }

    function Decrement() {
        dispatch(decrementCounter())
    }

    return <div className="counter">
        <span>{count}</span>
        <button className="increment" onClick={Increment}>Increment</button>
        <button className="decrement" onClick={Decrement}>Decrement</button>
    </div>
}

export default Counter