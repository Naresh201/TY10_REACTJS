import React, { useState } from 'react';

import imag1 from './images/image1.jpg';
import imag2 from './images/image2.jpg';
import imag3 from './images/image.jpg';

 function DynamicCounting(props) {

    const [count, setCount] = useState(0);
    return (
       
        <div  align="center" style={{color:"orange"  }}  > 
        <h4 style={{color:"orange"}}>Welcom to Counting Game</h4>  
            <h1 >{count}</h1>
            <button style={{color:"green"}} onClick={()=>{
                setCount(count+1)
            }} > <img src={imag1 }height="50" width="80" alt=""/> </button>

           <button  style={{color:"green"}} onClick={()=>{
               setCount(0)
            }} ><img src={imag3 }height="50" width="80" alt=""/></button>

             <button  style={{color:"green"}} onClick={()=>{
                setCount(count-1)
            }} ><img src={imag2 }height="50" width="80" alt=""/></button>
        </div>
    );
}
export default   React.memo(DynamicCounting);


