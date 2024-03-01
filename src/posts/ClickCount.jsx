import React  from 'react';
import Counter from './Counter';

const ClickCount = (props)=>{

    const {count , handleIncreaseCount} = props

    return(
        <div className='text-center w-100'>
            <button className='btn btn-success' onClick={handleIncreaseCount}> Click count : {count}</button>
        </div>
    )
}

export default Counter(ClickCount);