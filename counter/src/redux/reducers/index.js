import { combineReducers } from "redux";
import counterReducer from './counterReducer'

const reducres = combineReducers({
    counter : counterReducer
})

export default reducres