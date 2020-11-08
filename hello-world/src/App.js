import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
function App() {
  return (
    <div className="App">
      <Greet name="Bruce"><p>child para</p></Greet>
      <Greet name="Clark"><button>child button</button></Greet>
      <Greet name="Lee"></Greet>
      <Welcome name="PropertyForWelcomeClass"></Welcome>
    </div>
  );
}

export default App;
