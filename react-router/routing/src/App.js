import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Details from './Details'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        {/* Use switch since both Home and About were rendering */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
