import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import "../App.css";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="sidebar">

      {/* Logo */}
      <div>

        <div className="logo">
          <h2>JWT Auth Demo</h2>
          <p>Secure Authentication System</p>
        </div>

        {/* User Information */}
        <div className="user-box">
          <h4>{user?.username || "Admin"}</h4>
          <p>Signed in as {user?.username || "admin"}</p>
          <p>Role: {user?.role || "Admin"}</p>
        </div>

        {/* Navigation */}
        <div className="nav-links">

          <NavLink
            to="/compose"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            ✍️ Compose
          </NavLink>

          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            📅 Calendar
          </NavLink>

          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            📊 Analytics
          </NavLink>

        </div>

      </div>

      {/* Logout Button */}
      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Log Out
      </button>

    </div>
  );
};

export default Sidebar;