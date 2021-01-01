import React from 'react'
import './App.css';
import FocusInput from './components/FocusInput';

export const CountContext = React.createContext()

function App() {
  return (
    <div className='App'>
      <FocusInput></FocusInput>
    </div>
  );
}

export default App;
