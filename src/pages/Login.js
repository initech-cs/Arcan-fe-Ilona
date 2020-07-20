import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginWithEmail } from "../redux/actions/userActions";

function Login(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Login</h1>
      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label for="pass">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => dispatch(loginWithEmail(email, password))}>
        Login
      </button>
    </div>
  );
}

export default Login;
