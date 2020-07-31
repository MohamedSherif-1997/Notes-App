import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import SignupContainer from "./containers/SignupContainer";
import DashboardContainer from "./containers/Dashboard";
import history from "./history";
import DashboardDrawer from "./components/Drawer";

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/signup" component={SignupContainer} />
          <Route exact path="/dashboard" component={DashboardDrawer} />
          <Redirect to="/login" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
