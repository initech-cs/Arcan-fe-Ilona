import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginWithEmail } from "../redux/actions/userActions.js";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="loginMain">
      <div className="loginForm">
        <h1>ADMIN LOGIN</h1>
        <div>
          <input
            type="email"
            id="email"
            placeholder="Enter registered email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to="/admin/events">
          <button className="loginBtn" onClick={() => dispatch(loginWithEmail(email, password))}>
            LOGIN
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
