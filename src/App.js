import "./App.css";
import CreateMagasin from "./CreateMagasin";
import { Provider } from "react-redux";
import store from "./redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CreateMagasin />
      </div>
    </Provider>
  );
}

export default App;
