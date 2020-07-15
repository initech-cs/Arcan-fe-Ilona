import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Arcan from "./pages/Arcan";
import Events from "./pages/Events";
import Landing from "./pages/Landing";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={Arcan} />
        <Route path="/events" component={Events} />
        <Route path="/" component={Landing} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
