import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
function App() {
  return (
    <div className="App">
      <Greet name="Bruce"></Greet>
      <Greet name="Clark"></Greet>
      <Greet name="Lee"></Greet>
    </div>
  );
}

export default App;
