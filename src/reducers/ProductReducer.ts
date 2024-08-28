import { AnyAction } from "redux";
import {produce} from "immer";
import  Product  from "../models/product";
import { LOAD_PRODUCTS, PRODUCTS_LOADED } from "../actions/product";


export type State={
    products:Product[];
    loading:boolean;

};

export const initialState:State={
 products:[],
 loading:false,
};

function ProductReducer (state=initialState,action:AnyAction):State{
    switch (action.type){
        case LOAD_PRODUCTS:
            return produce(state, (draft)=>{
                draft.loading=true;
            });
            case PRODUCTS_LOADED:
                return produce(state,(draft)=>{
                    draft.products=action.payload;
                    draft.loading=false;
                })
        default:
            return state;
    }
} 



export default ProductReducer;