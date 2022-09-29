import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from "react";
import PublicRoute from "./components/PublicRoute"
import PrivateRoute from "./components/PrivateRoute"

import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { ProfileProvider } from "./context/profile.context";

function App() {
  return (
    <ProfileProvider>

      <Switch>
        <PublicRoute path="/login">
          <Login />
        </PublicRoute>
        <PublicRoute path="/signup">
          <Signup />
        </PublicRoute>

        <PrivateRoute path="/">
          <Home /> 
        </PrivateRoute>

      </Switch>
    </ProfileProvider>
  );
}

export default App;
