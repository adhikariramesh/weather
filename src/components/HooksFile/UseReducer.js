import React, { useReducer } from 'react'

const reducer = (state, action) =>{
    if(action.type === "INCR"){
        state = state + 1;
    }
    if(state > 0 && action.type === "DECR"){
        state = state - 1;
    }
    return state;
}

const UseReducer = () => {
    let initailData = 10;
    const [state, dispatch]=useReducer(reducer, initailData);
  return (
    <div>
      <div className="container">
        <div className="content">
            <p>{state}</p>
        </div>
        <div className="botton-body">
            <button className='btn'onClick={()=>dispatch({type:"INCR"})}>INCR</button>

            <button className='btn'onClick={()=>dispatch({type: "DECR"})}>DECR</button>
            <input type="text" placeholder='✍ Add Item' />
        </div>
      </div>
    </div>
  )
}

export default UseReducer
