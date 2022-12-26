import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterFive from './components/HookCounterFive';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <hr/>
      <h2>Counter functionality with react hooks</h2>
      <HookCounter />

      <hr/>
      <h2>Counter functionality with react hooks and previous state</h2>
      <HookCounterTwo />
      
      <hr/>
      <h2>React hooks with Object</h2>
      <HookCounterThree />

      <hr/>
      <h2>React Hook with Array update</h2>
      <HookCounterFour />

      <hr/>
      <h2>React Hook with useEffect feature</h2>
      <HookCounterFive />

      <hr/>
      <h2>React Hook with useEffect running only once with mouse move event - &lt;&lt;commented&gt;&gt;</h2>
      { /* <HookMouse /> */ }

      <hr/>
      <h2>React Hook with useEffect and mouse event contained</h2>
      <MouseContainer />

      <hr/>
      <h2>React useEffect, incorrect dependency and defining function inside useEffect</h2>
      <IntervalHookCounter />
    </div>
  );
}

export default App;
