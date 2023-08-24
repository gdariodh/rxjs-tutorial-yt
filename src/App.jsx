import "./App.css";
import ComponentOne from "./components/RxJS/ComponentOne";
import ComponentTwo from "./components/RxJS/ComponentTwo";
import Example from "./pages/Example/Example";

function App() {
  return (
    <div className="App">
      <div>
        <h2>RXJS</h2>
        <ComponentOne />
        <ComponentTwo />
      </div>

      <Example />
    </div>
  );
}

export default App;
