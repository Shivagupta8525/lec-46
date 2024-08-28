import HappyIncrement from "./HappyIncrement"
import HappyTracker from "./HappyTracker"
import ProductsListPage from "./ProductsListPage"
import SadIncrementor from "./SadIncrementor"
import SadTracker from "./SadTracker"


function App() {
  

  return (
    <div className ="p-2 space-y-2">
    <HappyTracker/>
    <SadTracker/>
    <HappyIncrement/>
    <SadIncrementor/>
    <ProductsListPage/>
    </div>
      )}

export default App
