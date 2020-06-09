import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import SignupContainer from "./containers/SignupContainer";
import DashboardContainer from "./containers/Dashboard";
import history from "./history";

function App() {
  return (
    <div>
      <Router history={history}>
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/dashboard" component={DashboardContainer} />
      </Router>
    </div>
  );
}

export default App;
