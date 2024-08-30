import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadoOrdersAction, ordersLoadedAction } from "./actions/orders";
import axios from "axios";
import { orderloadingSelector, orderSelector } from "./selectors/orderSelector";

import { Link } from "react-router-dom";

type OrderListPageProps = {};

const OrderListPage: FC<OrderListPageProps> = () => {
  const dispatch = useDispatch();

  const ordersLoading = useSelector(orderloadingSelector);
  const orders = useSelector(orderSelector);

  useEffect(() => {
    dispatch(LoadoOrdersAction());
    axios.get("https://dummyjson.com/carts").then((response) => {
      dispatch(ordersLoadedAction(response.data.carts));
    });
  }, []);
  if (ordersLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {orders.map((obj) => (
        <div key={obj.id}>
          <Link className="px-2 text-indigo-400 cursor-pointer"  to={"/orders/"+ obj.id}>Order Number{obj.id}</Link>    total{obj.total},totapdiscount
          {obj.discountTotal}
        </div>
      ))}
    </div>
  );
};
OrderListPage.defaultProps = {};

export default memo(OrderListPage);
