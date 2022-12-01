import React, {useState} from "react";

const Trafficlight = ()=>{
    const [color, setColor] =useState("")
    return <div className="container d-flex justify-content-center" >
         <div  className="thing "></div>
            <div className="TrafficLight">
            <div onClick={()=>setColor("green")} className={color=="green"?"clicked light green":"light green"}></div>
            <div onClick={()=>setColor("red")} className={color=="red"?"clicked light red":"light red"}></div>
            <div onClick={()=>setColor("yellow")} className={color=="yellow"?"clicked light yellow":"light yellow"}></div>
          </div>
    </div>
      
}

export default Trafficlight
