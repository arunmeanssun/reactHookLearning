import React, {useState} from 'react';

function HookCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    

  return (
    <div>
        <p>Count : {count}</p>
        <p>
            <button className="mr-2" onClick={() => setCount((prevCount) => prevCount + 1)}>+</button> 
            <button className="mr-2" onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
            <button className="mr-2" onClick={() => setCount(initialCount)}>Reset</button>
        </p>
    </div>
  )
}

export default HookCounterTwo;