import { Route, Routes } from "react-router-dom"
// import HappyIncrement from "./HappyIncrement"
// import HappyTracker from "./HappyTracker"
// import ProductsListPage from "./ProductsListPage"
// import SadIncrementor from "./SadIncrementor"
// import SadTracker from "./SadTracker"
import OrderListPage from "./OrderListPage"
import OrderDetailsPage from "./OrderDetailsPage"
import ProductsListPage from "./ProductsListPage"


function App() {
  

  return (
    <>
   <Routes>
    <Route path="/" element={<ProductsListPage />} />
    <Route path="orders" element={<OrderListPage/>} />
    <Route path ="orders/:orderId" element={<OrderDetailsPage/>}/>
   </Routes>

    </>
      )}

export default App
