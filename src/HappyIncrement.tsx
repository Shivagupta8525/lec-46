import {FC, memo, useState} from "react";
import { useDispatch } from "react-redux";
import { HappyButtonClicked, HappyClearButton } from "./actions/Actions";

type HappyIncrementProps ={};

const HappyIncrement:FC<HappyIncrementProps> =()=>{
    const dispatch =useDispatch();
   const  [quantity,setQuantity] =useState(0);

    function increment(){
dispatch(HappyButtonClicked(quantity,new Date))
    }
    function HappyClearButtonClicked(){
        dispatch(HappyClearButton)
    }
return <div >
    <h1>Are you Happy</h1>
    <input
    className="border border-gray-300 rounded-md"
     type="number" value={quantity} onChange={(event)=> setQuantity(+event.target.value)}/>
    <button onClick={increment} className="bg-green-500 mx-2 px-3 rounded-md text-white">Yes</button>
    <button onClick={HappyClearButtonClicked} className='bg-gray-500 px-3 x-2  rounded-md text-white'>Clear</button>
 </div>;
};
HappyIncrement.defaultProps ={}

export default memo(HappyIncrement);