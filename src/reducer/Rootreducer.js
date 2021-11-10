
import itemreducer from "./Reducer";

import {combineReducers} from 'redux';

const Rootreducer = combineReducers({
    todo1:itemreducer,
    
})
export default Rootreducer;