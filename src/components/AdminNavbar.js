import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions"

function AdminNavbar() {
  const dispatch = useDispatch();

  return (
    <div className="adminNavMain">
      <div>
        <img
          src="/images/arcanLogo.png"
          className="adminNavProfileImg"
          width={40}
        />
      </div>
      <ul className="adminNavList">
        <Link style={{ textDecoration: "none" }} to="/admin/news">
          <li className="adminNavItem mb20">NEWS</li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/admin/events">
          <li className="adminNavItem mb20">EVENTS</li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/admin/media">
          <li className="adminNavItem mb20">MEDIA</li>
        </Link>
        <li className="adminNavItem" onClick={() => dispatch(logout())}>
          LOGOUT
        </li>
      </ul>
    </div>
  );
}

export default AdminNavbar;
