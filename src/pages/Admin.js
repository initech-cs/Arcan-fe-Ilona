import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import { Switch, Route } from "react-router-dom"
import adminNews from "./AdminNews"

function Admin() {
  return (
    <div>
      <AdminNavbar />
    </div>
  );
}

export default Admin;
