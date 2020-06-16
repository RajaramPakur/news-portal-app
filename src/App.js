import React from "react";
import "./App.css";
import MainHeader from "./components/home/MainHeader";
import LoginPage from "./components/form/LoginPage";
import MainContent from "./components/home/MainContent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <MainHeader />
        <Route
          path="/"
          component={(props) => <MainContent myname="Rajaram" {...props} />}
          exact
        />
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
