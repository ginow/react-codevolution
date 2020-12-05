import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <ClickCounterTwo></ClickCounterTwo>
      <HoverCounterTwo></HoverCounterTwo>
      <User render={(isLoggedIn) => isLoggedIn ? 'Developer' : 'Guest'}></User>
    </div>
  );
}

export default App;
