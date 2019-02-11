/*eslint-disable import/default */

import React from "react";
import { render } from "react-dom";
import { store, persistor } from "./configureStore";
import { Provider } from "react-redux";
import App from "./containers/App";
import "./style/style.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "toastr/build/toastr.min.css";
import "font-awesome/css/font-awesome.css";
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
import { PersistGate } from "redux-persist/integration/react";

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
