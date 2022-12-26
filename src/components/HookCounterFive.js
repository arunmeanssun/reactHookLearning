import React, {useState, useEffect} from 'react';

function HookCounterFive() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Arun')

    const incrementCount = () => {
        setCount((prevState) => {
            return prevState + 1;
        })
    }

    /* count parameter is passed to check the change in count state and to run effect */
    useEffect(() => {
        console.log("Updating document title");
        document.title = `You cicked ${count} times`;
    }, [count]);

    return (
        <div className='my-3'>
            <input className='mr-2' onChange={(e) => { setName(e.target.value)}} />
            <button onClick={incrementCount}>Increase Count {count}</button>
        </div>
    )
}

export default HookCounterFive;