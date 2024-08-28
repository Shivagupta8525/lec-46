import { AnyAction } from "redux";
import { HAPPY_BUTTOB_CLICKED, HAPPY_CLEAR_BUTTON } from "../actions/Actions";
import { Moment } from "../Store"
import { produce } from "immer";


export type HappyState={
    happyMoment:Moment[];

}
export const initialHappyState:HappyState={
    happyMoment:[],
}

function happynessReducer(currenthappyState=initialHappyState,action:AnyAction)
{
    switch(action.type){
        case HAPPY_BUTTOB_CLICKED:
            return produce (currenthappyState,(draft)=>{
                draft.happyMoment.push(action.payload);
            })
                
            
        
    
case HAPPY_CLEAR_BUTTON:
    return{happyMoment:[]}
    default:
        return currenthappyState;
    }

};

export default happynessReducer;
