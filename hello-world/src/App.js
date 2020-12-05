import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName="batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
