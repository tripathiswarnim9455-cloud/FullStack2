import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Analytics from "./pages/Analytics";
import Calendar from "./pages/Calendar";
import Compose from "./pages/Compose";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Login Page */}
      <Route path="/" element={<Login />} />

      {/* Protected Analytics Page */}
      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />

      {/* Protected Calendar Page */}
      <Route
        path="/calendar"
        element={
          <ProtectedRoute>
            <Calendar />
          </ProtectedRoute>
        }
      />

      {/* Protected Compose Page */}
      <Route
        path="/compose"
        element={
          <ProtectedRoute>
            <Compose />
          </ProtectedRoute>
        }
      />

      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default App;