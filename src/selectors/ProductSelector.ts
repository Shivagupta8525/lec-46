import { State } from "../Store";

 
 export function productsLoadingSlector(state:State){
    return state.products.loading;
 }

 export function productsSelector(state:State){
    return state.products.products;
 }