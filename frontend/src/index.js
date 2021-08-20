import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";

const projectStore = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={projectStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
