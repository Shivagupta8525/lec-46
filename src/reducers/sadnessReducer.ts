import { AnyAction } from "redux";
import { SAD_BUUTON_CLICKED ,SAD_CLEAR_BUTTON} from "../actions/Actions";
import { Moment } from "../Store";
import { produce } from "immer";

export type SadState ={

    sadMoments:Moment[];
};

export const initialSadState:SadState={
    sadMoments:[],

}

function sadnessReducer(currentSadState=initialSadState,action:AnyAction):SadState{

switch(action.type){
    case SAD_BUUTON_CLICKED:
        
        return produce(currentSadState,(draft)=>{
            draft.sadMoments.push(action.payload);
        });
    



    case SAD_CLEAR_BUTTON:
        return{sadMoments:[]}


default:
    return currentSadState;
}


};


export default sadnessReducer;

