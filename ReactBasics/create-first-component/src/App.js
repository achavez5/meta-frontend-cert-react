import logo from './logo.svg';
import './App.css';

function NotApp () {
  return (
    <p>another smaller component</p>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello to the world!</h1>
        <NotApp />
      </header>
    </div>
  );
}

export default App;
