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
import DataFetching from './components/DataFetching';
import ComponentA from './components/ComponentA';
import ReducerCounterOne from './components/ReducerCounterOne';
import ReducerCounterTwo from './components/ReducerCounterTwo';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

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

      <hr/>
      <h2>React useEffect, data fectching with axios</h2>
      <DataFetching />

      <hr/>
      <h2>React useEffect, to implement the Context feature</h2>
      <UserContext.Provider value="sample data">
        <ChannelContext.Provider value="code evolution">
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>

      <hr/>
      <h2>React Hook useReducer, to implement the State Management</h2>
      <ReducerCounterOne /> 

      <hr/>
      <h2>React Hook useReducer, to implement the complex State object</h2>
      <ReducerCounterTwo />
    </div>
  );
}

export default App;
