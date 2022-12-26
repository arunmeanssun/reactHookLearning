import React, {useState, useEffect} from 'react';
import HookMouse from './HookMouse';

function MouseContainer() {
    const [display, setDisplay] = useState(true);

  return (
    <div>
        <p><button onClick={() => setDisplay(!display)}>Toggle Display</button></p>
        { display && <HookMouse /> }
    </div>
  )
}

export default MouseContainer;