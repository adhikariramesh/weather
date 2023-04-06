import React, { useState } from 'react'
import "./style.css";
const UseStateHook = () => {
    let initial =10;
    const [num, setNum] = useState(initial)
  return (
    <>
      <div className="container">
        <div className="content">
            <p>{num}</p>
        </div>
        <div className="botton-body">
            <button className='btn'onClick={()=>setNum(num+1)}>INCR</button>
            <button className='btn' onClick={()=>(num > 0 ? setNum(num-1):setNum(0))}>DECR</button>
        </div>
      </div>
    </>
  )
}

export default UseStateHook
