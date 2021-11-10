import Rootreducer from "../reducer/Rootreducer";
import { createStore } from "redux";

const store =  createStore(
    Rootreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    );
export default store;