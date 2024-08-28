import { ActionCreator } from "./index";

import { Moment } from "../Store";

export const HAPPY_BUTTOB_CLICKED ="happy button clicked";
export const  SAD_BUUTON_CLICKED ="Sad button clicked";
export const SAD_CLEAR_BUTTON=" Sad Clear button "
export const HAPPY_CLEAR_BUTTON=" Happy Clear button "





export const HappyButtonClicked: ActionCreator<Moment> = (count:number, when :Date) =>({
    type : HAPPY_BUTTOB_CLICKED,
    payload:{intensity:count, when },
});

export const SadButtonClicked :ActionCreator<Moment> =(count:number, when :Date)=>({
    type : SAD_BUUTON_CLICKED,
    payload:{intensity:count,when},
});

export const SadClearButton={
   type:SAD_CLEAR_BUTTON,
}
export const HappyClearButton={
    type:HAPPY_CLEAR_BUTTON,
}
