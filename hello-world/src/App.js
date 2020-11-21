import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
function App() {
  return (
    <div className="App">
      <NameList></NameList>
    </div>
  );
}

export default App;
