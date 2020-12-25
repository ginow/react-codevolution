import React, { useReducer } from 'react'
import './App.css';
import ComponentA from './components/useReducerWithUseContext/ComponentA'
import ComponentB from './components/useReducerWithUseContext/ComponentB'
import ComponentC from './components/useReducerWithUseContext/ComponentC'

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}
function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      <div className="App">
        Count : {count}
        {/* Goal is to maintain counter state in App.js and modify it from other components
          Steps:
          1. Create counter using useReducer in App.js
          2. Provide and consume counter context in the required components
      */}
        <ComponentA></ComponentA>
        <ComponentB></ComponentB>
        <ComponentC></ComponentC>
      </div>
    </CountContext.Provider>
  );
}

export default App;
