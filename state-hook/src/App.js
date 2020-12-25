import React, { useReducer } from 'react'
import './App.css';
import DataFetchingTwo from './components/DataFetchingTwo';

export const CountContext = React.createContext()

function App() {
  return (
    <div className='App'>
      <DataFetchingTwo></DataFetchingTwo>
    </div>
  );
}

export default App;
