import React, {useState, useEffect} from 'react';

function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        /* function can be defined inside useEffect */
        function doSomething(){
            console.log("Some function is called ");
        }

        doSomething("property value");

        const interval = setInterval(tick, 1000);

        /* unmount function */
        return () => {
            clearInterval(interval);
        }
    }, []);

  return (
    <div>{ count }</div>
  )
}

export default IntervalHookCounter;