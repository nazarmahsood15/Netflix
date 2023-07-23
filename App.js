import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
// import Form from "./Components/login/form";
import Dashboard from "./Components/login/Dashboard";
import Homescreen from "./Components/Homescreen";
const App = () => {
  const [loggedIn, setloggedIn] = useState(false);

  function callbackFunction(childData) {
    setloggedIn(childData);
  }

  return (
    <Router>
      <Switch>
        <Route path="/Dashboard">
          {loggedIn ? <Dashboard /> : <Redirect to="/" />}
        </Route>
        <Route path="/">
          {/* {loggedIn ? (
            <Redirect to="/Dashboard" />
          ) : (
            // <Form parentCallback={callbackFunction} />
          )} */}
          <Homescreen></Homescreen>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
