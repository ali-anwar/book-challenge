import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "../components/Common/PageNotFound";
import Home from "../components/Landing/Home";
import About from "../components/About";
import createBrowserHistory from "history/createBrowserHistory";
import HeaderNavContainer from "./Landing/HeaderNavContainer"; // eslint-disable-line import/no-named-as-default

const history = createBrowserHistory();

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <HeaderNavContainer />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
