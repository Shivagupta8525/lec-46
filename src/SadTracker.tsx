import {FC, memo} from "react";
import { useSelector } from "react-redux";
import { sadMomentsSeletor } from "./selectors/mood-selectors";

type SadTrackerProps ={};

const SadTracker:FC<SadTrackerProps> =()=>{
    const sadMoments = useSelector(sadMomentsSeletor);
return <div className="bg-red-500 px-6 py-4">
    {sadMoments.map((m) =>(
       ( <div key={m.intensity} >Sadness Intensity:{m.intensity},when: {m.when.toISOString()}</div>)
    ))}
</div>
};
SadTracker.defaultProps ={}

export default memo(SadTracker);