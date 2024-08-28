import {  combineReducers, createStore } from "redux";

import sadnessReducer  from "./reducers/sadnessReducer";
import happynessReducer from "./reducers/happinessReducer";
import ProductReducer from "./reducers/ProductReducer";

export type Moment = {
intensity: number;
when: Date;
}


// export type State = {
//     sad: SadState;
//     happy: HappyState;
// }
// const initialState :State= {
//     sad: initialSadState,
//     happy: initialHappyState,
// }
const reducer = combineReducers({
        sad:sadnessReducer,
        happy:happynessReducer,
        products: ProductReducer,

    });
    export type State =ReturnType<typeof reducer>;    // switch (action.type) {
    //     case HAPPY_BUTTOB_CLICKED:
    //         return {
    //             ...currtentState,
    //             happyMoments: [...currtentState.happyMoments, { intensity: action.payload.count, when: action.payload.when },
    //             ],

    //         };
    //             case SAD_BUUTON_CLICKED:
    //             return {
    //                 ...currtentState, 
    //                 sadMoments:[...currtentState.sadMoments,{
    //                     intensity: action.payload, when: new Date()
    //                 }]
    //             };
    //             default:
    //         return currtentState;

    //         }

    
    const store = createStore(reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    export default store;