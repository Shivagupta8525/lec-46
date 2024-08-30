import { createSelector } from "reselect";
import { State } from "../Store";


export const productStateSelector = (state: State)=>{
   return state.products;
}


export const productsLoadingSelector = createSelector(productStateSelector, (productState) =>productState.loading);


export const productsMapSelector = createSelector(productStateSelector, (productState) =>productState.products);



export const productsSelector = createSelector(productsMapSelector, (NormalizeProducts) =>Object.keys(NormalizeProducts).map((pid) => NormalizeProducts[+pid])
);

// export function productsSelector(state: State) {
//    const NormalizeProducts = state.products.products;
//    return Object.keys(NormalizeProducts).map((pid) => NormalizeProducts[+pid])
// }