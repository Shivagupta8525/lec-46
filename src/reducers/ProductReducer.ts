import { AnyAction } from "redux";
import { produce } from "immer";
import Product from "../models/product";
import { LOAD_PRODUCTS, PRODUCTS_LOADED } from "../actions/product";
import { ORDER_DETAIL_LOADED, ORDERS_LOADED } from "../actions/orders";
import { normalize, schema } from "normalizr";

type Normalized = {
    [id: number]: Product;
}

type State = {
    products: Normalized
    loading: boolean;

};

export const initialState: State = {
    products: {},
    loading: false,
};

function ProductReducer(state = initialState, action: AnyAction): State {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return produce(state, (draft) => {
                draft.loading = true;
            });
        case PRODUCTS_LOADED:
            return produce(state, (draft) => {
                const products = action.payload;
                const normaliproduct = products.reduce(function (previous: Normalized,
                    current: Product) {
                    return { ...previous, [current.id]: current };
                }, {});

                draft.products = normaliproduct;

                draft.loading = false;
            });
        case ORDERS_LOADED:
            return produce(state, (draft) => {
                const orders = action.payload;
                const products = orders.reduce(function (previous: Product[], current: any) {
                    return [...previous, ...current.products];
                }, []);
                const normaliproduct = products.reduce(function (previous: Normalized,
                    current: Product) {
                    return { ...previous, [current.id]: current };
                }, {});

                draft.products = normaliproduct;
            });
        case ORDER_DETAIL_LOADED:
            return produce(state, (draft) => {
                const order = action.payload;
                const productEntity = new schema.Entity("products");

                const data = normalize(order.products, [productEntity]);
                draft.products = { ...draft.products, ...data.entities.products };
            });
        default:
            return state;
    }
}



export default ProductReducer;