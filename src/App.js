import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "./redux/actions/userActions"

import Home from "./pages/Home";
import Arcan from "./pages/Arcan";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import AdminMedia from "./pages/AdminMedia"
import Contact from "./pages/Contact";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import AdminNews from "./pages/AdminNews"
import AdminEvents from "./pages/AdminEvents"
import Bookings from "./pages/Bookings"
import Media from "./pages/Media"

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/admin/login" component={Login} />
        <ProtectedRoute path="/admin/events" component={AdminEvents} />
        <ProtectedRoute path="/admin/news" component={AdminNews} />
        <ProtectedRoute path="/admin/media" component={AdminMedia} />
        <Route path="/about" component={Arcan} />
        <Route path="/news/:id" component={NewsDetails} />
        <Route path="/news" component={News} />
        <Route path="/events/:id" component={EventDetails} />
        <Route path="/events" component={Events} />
        <Route path="/media" component={Media} />
        <Route path="/bookings" component={Bookings} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
