import './App.css';

function Heading () {
  return ( <h1>This is an h1 heading!</h1> );
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <h1>Hello to the world!</h1>
      {/* </header> */}
      <Heading />
    </div>
  );
}

export default App;
