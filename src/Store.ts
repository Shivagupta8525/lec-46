import {  combineReducers, createStore } from "redux";

import sadnessReducer  from "./reducers/sadnessReducer";
import happynessReducer from "./reducers/happinessReducer";
import ProductReducer from "./reducers/ProductReducer";
import ordersReducer from "./reducers/ordersReducer";


export type Moment = {
intensity: number;
when: Date;
}



const reducer = combineReducers({
        sad:sadnessReducer,
        happy:happynessReducer,
        products: ProductReducer,
        orders:ordersReducer,

    });
    export type State =ReturnType<typeof reducer>;    // switch (action.type) {
    
    
    const store = createStore(reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    export default store;