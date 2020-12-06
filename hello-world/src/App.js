import './App.css';
import { UserProvider } from './components/userContext';
import ComponentC from './components/ComponentC';
import ComponentF from './components/ComponentF';

function App() {
  return (
    <div className="App">
      <ComponentC>
      </ComponentC>
    </div>
  );
}

export default App;
