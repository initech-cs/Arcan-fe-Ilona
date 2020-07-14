import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Arcan from "./pages/Arcan";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={Arcan} />
        <Route path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
