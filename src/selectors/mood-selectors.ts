import { State } from "../Store";

export const happyMOmentsSeletor=(state :State)=>{
    return state.happy.happyMoment;
}
export const sadMomentsSeletor =(state:State)=>{
    return state.sad.sadMoments;
}