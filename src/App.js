import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useSelector, useDispatch } from "react-redux";

import Home from "./pages/Home";
import Arcan from "./pages/Arcan";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import AdminPanel from "./pages/Admin"
import Contact from "./pages/Contact";
import Tickets from "./pages/Tickets";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import AdminNews from "./pages/AdminNews"
import AdminEvents from "./pages/AdminEvents"

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/admin/login" component={Login} />
        <Route path="/admin/events" component={AdminEvents} />
        <Route path="/admin/news" component={AdminNews} />
        <Route path="/admin" component={AdminPanel} />
        <Route path="/about" component={Arcan} />
        <Route path="/news/:id" component={NewsDetails} />
        <Route path="/news" component={News} />
        <Route path="/events/details" component={EventDetails} />
        <Route path="/events" component={Events} />
        <Route path="/tickets" component={Tickets} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
