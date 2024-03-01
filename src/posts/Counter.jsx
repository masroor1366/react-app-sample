import React, { useState } from 'react';

const Counter = (MainComponent,numberCount)=>{
    const NewComponent = (props)=>{
        const [count , setCount] = useState(0);

        const handleIncreaseCount = ()=>{
            setCount(count + numberCount);
        }
        return (
            <MainComponent {...props} count={count} handleIncreaseCount={handleIncreaseCount}/>
        )
    }
    return NewComponent
}

export default Counter