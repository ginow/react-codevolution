import './App.css';
import { UserProvider } from './components/userContext';
import ComponentC from './components/ComponentC';

function App() {
  return (
    <div className="App">
      <UserProvider value="ContextPassingValueText"><ComponentC></ComponentC></UserProvider>
    </div>
  );
}

export default App;
