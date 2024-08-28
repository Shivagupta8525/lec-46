 import {FC, memo, useState} from "react";
import { useDispatch } from "react-redux";
import { SadButtonClicked ,SadClearButton} from "./actions/Actions";
 
 type SadIncrementorProps ={};
 
 const SadIncrementor:FC<SadIncrementorProps> =()=>{
    const dispatch= useDispatch();
    const [quantity,setQuantity] =useState(0);
    const increment = () => {
        dispatch(SadButtonClicked(quantity, new Date()));
    }
  function  SadClearButtonClicked(){
   dispatch(SadClearButton)

  }
 return <div >
    <h1>Are you sad</h1>
    <input
    className="border border-gray-300 rounded-md"
     type="number" value={quantity} onChange={(event)=> setQuantity(+event.target.value)}/>
    <button  onClick={increment} className="bg-red-500 mx-2 px-3 rounded-md text-white">Yes</button>
    <button onClick={SadClearButtonClicked} className='bg-gray-500 px-3 x-2  rounded-md text-white'>Clear</button>
    </div>
 
 };
 SadIncrementor.defaultProps ={}
 
 export default memo(SadIncrementor);



