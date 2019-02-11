import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "../components/Common/PageNotFound";
import createBrowserHistory from "history/createBrowserHistory";
import BookIndexContainer from "./Books/IndexContainer"; // eslint-disable-line import/no-named-as-default
import BookFormContainer from "./Books/FormContainer"; // eslint-disable-line import/no-named-as-default

const history = createBrowserHistory();

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={BookIndexContainer} />
            <Route exact path="/books" component={BookIndexContainer} />
            <Route exact path="/books/new" component={BookFormContainer} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
