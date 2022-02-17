import "./scss/app.scss";
import { Provider } from "react-redux";
import RouterLiga from "./router";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <RouterLiga></RouterLiga>
      </div>
    </Provider>
  );
}

export default App;
