import React, {useReducer} from 'react';

const initialState = 0;
const reducer = (currentState, action) => {
    switch(action) {
        case 'increment':
            return currentState + 1;

        case "decrement":
            return currentState - 1;

        case "reset":
            return initialState;
        default:
            return currentState;
    }
};

function ReducerCounterOne() {
    const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <h2>useReducer Hook</h2>
        <p>Count - {count} </p>
        <p><button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
        </p>
    </div>
  )
}

export default ReducerCounterOne;