import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginWithEmail } from "../redux/actions/userActions.js";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory()
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
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
          <button className="loginBtn" onClick={() => dispatch(loginWithEmail(email, password, history))}>
            LOGIN
          </button>
      </div>
    </div>
  );
}

export default Login;
