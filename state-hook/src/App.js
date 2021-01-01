import React from 'react'
import './App.css';
import UserForm from './components/UserForm';

export const CountContext = React.createContext()

function App() {
  return (
    <div className='App'>
      <UserForm></UserForm>
    </div>
  );
}

export default App;
