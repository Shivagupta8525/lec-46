import { createSelector } from "reselect";
import Product from "../models/product";
import { State } from "../Store";
import { productsMapSelector } from "./ProductSelector";



export const orderStateSelector=(state:State)=>{
    return state.orders;

}

export const orderloadingSelector =  createSelector(orderStateSelector,
    function(orderState){
        return orderState.loading;
    }
)
  

// export const ordersMapSlector = (state: State) => {
//     return state.orders.orders;
// }

export const ordersMapSlector = createSelector(orderStateSelector,(orderState)=> orderState.orders
)

// export const orderSelector = (state: State) => {
//     const normalizeorder = state.orders.orders;

//     const orderAray = Object.keys(normalizeorder).map((orderId) => normalizeorder[+orderId]);
//     // order.products =order.products.map(productId=>state.products.products[productId])
//     return orderAray;
// }

export const orderSelector=createSelector(ordersMapSlector,(normalizeorder)=>Object.keys(normalizeorder).map((orderId) => normalizeorder[+orderId]));

export const orderProductsSelector= createSelector(ordersMapSlector,productsMapSelector,(orderMap,productsMap)=> Object.keys(orderMap).reduce<{[orderId:number]:Product[]}>((previous,currentOrderId) => {
    const order = orderMap[+currentOrderId];
    const products = order.products.map((productId )=> productsMap[productId]);
    return {...previous , [currentOrderId]:products};
},{})



);

export const orderProductsSelector2 = (state: State) => {
   return Object.keys(state.orders.orders).reduce<{[orderId:number]:Product[]}>((previous,currentOrderId) => {
        const order = state.orders.orders[+currentOrderId];
        const products = order.products.map((productId )=> state.products.products[productId]);
        return {...previous , [currentOrderId]:products};

    },{});

}


