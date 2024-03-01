import React  from 'react';
import Counter from './Counter';

const HoverCount = (props)=>{

    const {count , handleIncreaseCount , name} = props

    return(
        <div className='text-center w-100'>
            <button className='btn btn-info' onMouseEnter={handleIncreaseCount}> onMouseEnter count {name}: {count}</button>
        </div>
    )
}

export default Counter(HoverCount,10);