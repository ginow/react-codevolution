import React from 'react'
import './App.css';
import Counter from './components/Counter'

export const CountContext = React.createContext()

function App() {
  return (
    <div className='App'>
      <Counter></Counter>
    </div>
  );
}

export default App;
