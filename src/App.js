import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/login" component={LoginContainer} />
      </Router>
    </div>
  );
}

export default App;
