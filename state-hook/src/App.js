import React from 'react'
import './App.css';
import CounterOneForHook from './components/CounterOneForHook';
import CounterTwoForHook from './components/CounterTwoForHook';

export const CountContext = React.createContext()

function App() {
  return (
    <div className='App'>
      <CounterOneForHook></CounterOneForHook>
      <CounterTwoForHook></CounterTwoForHook>
    </div>
  );
}

export default App;
