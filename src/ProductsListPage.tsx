import {FC, memo, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsLoadingSlector, productsSelector } from "./selectors/ProductSelector";
import { LoadProductsAction } from "./actions/product";

type ProductsListPageProps ={};

const ProductsListPage:FC<ProductsListPageProps> =(props)=>{
    const loading=useSelector(productsLoadingSlector);
    const products = useSelector(productsSelector);
    const dispatch =useDispatch();

    useEffect(()=>{
        dispatch(LoadProductsAction());

    },[])
return<div>
{
    loading && <div className="text-3xl text-indigo-200">Loading....</div>
}
{products && products.map((p)=>{
    return <div className="text-2xl" key={p.id}>{p.title} (RS.{p.price})</div>
})}
</div>
};
ProductsListPage.defaultProps ={}

export default memo(ProductsListPage);