import React, { useReducer } from 'react'
import './App.css';
import DataFetchingOne from './components/DataFetchingOne';

export const CountContext = React.createContext()

function App() {
  return (
    <div className='App'>
      <DataFetchingOne></DataFetchingOne>
    </div>
  );
}

export default App;
