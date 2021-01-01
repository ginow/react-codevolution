import React from 'react'
import './App.css';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';

export const CountContext = React.createContext()

function App() {
  return (
    <div className='App'>
      <DocTitleOne></DocTitleOne>
      <DocTitleTwo></DocTitleTwo>
    </div>
  );
}

export default App;
