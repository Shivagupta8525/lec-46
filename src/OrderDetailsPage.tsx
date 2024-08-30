import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { orderProductsSelector, ordersMapSlector } from "./selectors/orderSelector";
import axios from "axios";
import { OrderDetailLoadedAction } from "./actions/orders";

type OrderDetailsPageProps = {};

const OrderDetailsPage: FC<OrderDetailsPageProps> = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const orderId = +params.orderId!;

  const ordersMap = useSelector(ordersMapSlector);
  const ordersProductsmap = useSelector(orderProductsSelector);

  const order = ordersMap[orderId];
  const products = ordersProductsmap [orderId];

  useEffect(() => {
    
      axios.get("https://dummyjson.com/carts/" + orderId).then((response) => {
        dispatch(OrderDetailLoadedAction(response.data));
      });
    
  }, [orderId]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <>
      this is Orderdetails page {orderId}, totalPage {order.total}
      <div>{products.map((P) =><div key={P.id}> {P.title},price is {P.price}</div>)}
      </div>
    </>
  );
};
OrderDetailsPage.defaultProps = {};

export default memo(OrderDetailsPage);
