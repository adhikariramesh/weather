import React, { useEffect, useState } from 'react'
import "./style.css";
import "./stylefile/style.css";
const UseEffectHook = () => {
    let initial =10;
    const [num, setNum] = useState(initial)
    useEffect(()=>{
        // alert("yes Effect is running Konw");
    })
  return (
    <>
      <div className="container">
        <div className="content">
            <p>{num}</p>
        </div>
        <div className="botton-body">
            <button className='btn'onClick={()=>setNum(num +1)}>INCR</button>
            
        </div>
      </div>
    </>
  )
}

export default UseEffectHook
