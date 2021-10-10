import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              path="/"
              name="Home"
              render={(props) => <TheLayout {...props} />}
            />
          </Switch>
          <ToastContainer />
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
