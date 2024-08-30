import { produce } from "immer";
import Order from "../models/order";
import { LOAD_ORDERS, ORDER_DETAIL_LOADED, ORDERS_LOADED } from "../actions/orders";
import { Action } from "../actions";
import { normalize, schema } from "normalizr";
import { act } from "react";


type normalizeorder = { [id: number]: Order }



export type State = {
    loading: boolean,
    orders: normalizeorder;
    // orderProduct: { [orderId: number]: number[] };

};

export const initialState: State = {
    loading: false,
    orders: {},
    // orderProduct: {},

};

function ordersReducer(state = initialState, action: Action): State {
    switch (action.type) {
        case LOAD_ORDERS:
            return produce(state, (draft) => {
                draft.loading = true;
            })
        case ORDERS_LOADED:
            return produce(state, (draft) => {
                draft.loading = false;

                const orderArray = action.payload;
                const productEntity = new schema.Entity("products");
                const orderEntity = new schema.Entity("orders",{products:[productEntity],});
                

                const data = normalize(orderArray,[orderEntity]);

                // const NormelizeOrders = orderArray.reduce(function (previous: normalizeorder, current: Order) {
                //     return { ...previous, [current.id]: current };
                // }, {});
                draft.orders = data.entities.orders!;

                console.log("nomazie", orderArray);
            })
        case ORDER_DETAIL_LOADED:
            return produce(state, (draft) => {
                const order =action.payload;

                const productEntity = new schema.Entity("products");
                const orderEntity = new schema.Entity("orders",{products:[productEntity],});
                

                const data = normalize(order,orderEntity);
                draft.orders[order.id] =data.entities.orders![order.id]
            });

        default:
            return state;
    }
}



export default ordersReducer;