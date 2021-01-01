import React from 'react'
import './App.css';
import ParentComponent from './components/ParentComponent'

export const CountContext = React.createContext()

function App() {
  return (
    <div className='App'>
      <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
