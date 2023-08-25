import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import ComponentOne from "./components/RxJS/ComponentOne";
import ComponentTwo from "./components/RxJS/ComponentTwo";
import Example from "./pages/Example/Example";
import ComponentRedux1 from "./components/Redux/ComponentRedux1";
import ComponentRedux2 from "./pages/Example/components/ComponentRedux2";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
          <h2>RXJS</h2>
          <ComponentOne />
          <ComponentTwo />
        </div>

        <div>
          <h2>Example Page - Context</h2>
          <Example />
        </div>

        <div>
          <h2>Redux</h2>
          <ComponentRedux1 />
          <ComponentRedux2 />
        </div>
      </Provider>
    </div>
  );
}

export default App;
