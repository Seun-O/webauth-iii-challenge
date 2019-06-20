import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Registration from "./components/Registration";
import UserList from "./components/UserList";
import Menu from "./components/layout/Menu";

function App() {
  return (
    <Router>
      <Menu />
      <Route path="/login" component={LoginForm} />
      <Route path="/sign-up" component={Registration} />
      <Route path="/users" component={UserList} />
    </Router>
  );
}

export default App;
