import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <About></About>
        <Shop></Shop>
      </div>
    </Router>
  );
}

export default App;
