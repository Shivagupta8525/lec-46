import {FC,memo} from "react";
import { useSelector } from "react-redux";
import {  happyMOmentsSeletor } from "./selectors/mood-selectors";

type HappyTrackerProps ={};

const HappyTracker:FC<HappyTrackerProps> =()=>{
    const happyMoments =useSelector(happyMOmentsSeletor)
return <div className="bg-green-500 px-6 py-4">
    {happyMoments.map((m) =>(
       ( <div key={m.intensity}>Happyness Intensity:{m.intensity},when: {m.when.toISOString()}</div>)
    ))}
</div>
};
HappyTracker.defaultProps ={}

export default memo(HappyTracker);