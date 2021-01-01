import React from 'react'
import './App.css';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';

export const CountContext = React.createContext()

function App() {
  return (
    <div className='App'>
      <ClassTimer></ClassTimer>
      <HookTimer></HookTimer>
    </div>
  );
}

export default App;
