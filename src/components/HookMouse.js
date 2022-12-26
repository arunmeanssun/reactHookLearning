import React, { useEffect, useState } from 'react';

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log("mouse event called");
        setX(e.clientX);
        setY(e.clientY);
    }

    /* to run useEffect only once, pass empty array as 2nd argument */
    useEffect(() => {
        console.log("useEffect gets called");
        window.addEventListener("mousemove", logMousePosition);

        {/* returning a function from use effect will run the function while unmounting the component from DOM */}
        return () => {
            console.log("component unmounting code");
            window.removeEventListener("mousemove", logMousePosition);
        }
    }, []);

  return (
    <div>Hooks - X: {x}, Y: {y} </div>
  )
}

export default HookMouse;