import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../features/auth/authSlice";
import "../App.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Create Mock JWT
  const createJWT = (user) => {
    const header = btoa(
      JSON.stringify({
        alg: "HS256",
        typ: "JWT",
      })
    );

    const payload = btoa(
      JSON.stringify({
        username: user.username,
        role: user.role,
        email: user.email,
      })
    );

    const signature = "MockSignature123";

    return `${header}.${payload}.${signature}`;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const enteredUsername = username.trim().toLowerCase();
    const enteredPassword = password.trim();

    if (enteredUsername === "admin" && enteredPassword === "1234") {
      const user = {
        username: "admin",
        role: "Admin",
        email: "admin@gmail.com",
      };

      const token = createJWT(user);

      dispatch(
        loginSuccess({
          token,
          user,
        })
      );

      navigate("/analytics");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#EEF2FF,#F8FAFC)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "420px",
          background: "#fff",
          padding: "35px",
          borderRadius: "20px",
          boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#6D28D9",
            marginBottom: "30px",
          }}
        >
          JWT Login
        </h1>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "20px" }}>
            <label>
              <b>Username</b>
            </label>

            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "8px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label>
              <b>Password</b>
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "8px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              background: "#6D28D9",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontSize: "17px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;