import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName="batman" />
        <Hero heroName="Superman" />
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
