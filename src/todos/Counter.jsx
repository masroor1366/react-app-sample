import React, { useReducer } from "react";

const init=0;

const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return init;
    }

}


const Counter=()=>{
    const [count,dispatch]=useReducer(reducer,init)

    return (
        <div className="text-center my-3">
        <h1 className='text-center'>{count}</h1>
        <button className='btn btn-success' onClick={()=>dispatch('increment')} >افزایش</button>            
        <button className='btn btn-danger' onClick={()=>dispatch('decrement')} >کاهش</button>            
        <button className='btn btn-warning' onClick={()=>dispatch('reset')} >ریست</button>            
        </div>
    )

}

export default Counter;