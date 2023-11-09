import image from "./assets/images/logo.png"

function App() {
  return (
    <div className="App">
      <h1>Displaying images lab</h1>
      <img
        height={200}
        src={image}
        alt="Logo"
      ></img>
    </div>
  );
}

export default App;
