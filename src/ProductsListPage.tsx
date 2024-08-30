import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {productsLoadingSelector,productsSelector} from "./selectors/ProductSelector";
import { LoadProductsAction, ProductsloadedAction } from "./actions/product";
import axios from "axios";

type ProductsListPageProps = {};

const ProductsListPage: FC<ProductsListPageProps> = () => {
  const loading = useSelector(productsLoadingSelector);
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadProductsAction());
     axios.get('https://dummyjson.com/products').then((response)=> dispatch(ProductsloadedAction(response.data)));
  }, []);
   console.log("product,",products);
  return (
    <div>
      {loading && <div className="text-3xl text-indigo-200">Loading....</div>}
      {products &&
        products.map((p) => {
          return (
            <div className="text-2xl" key={p.id}>
              {p.title} (RS.{p.price})
            </div>
          );
        })}
    </div>
  );
};
// ProductsListPage.defaultProps = {};

export default memo(ProductsListPage);
