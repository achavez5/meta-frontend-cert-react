import logo from './logo.svg';
import './App.css';

function Heading () {
  return (
    <h1>This is an h1 heading!</h1>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello to the world!</h1>
        <Heading />
      </header>
    </div>
  );
}

export default App;
