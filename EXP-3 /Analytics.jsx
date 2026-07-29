import React from "react";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import "../App.css";

const Analytics = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <div className="page-card">

          <h1>📊 Analytics Dashboard</h1>

          <p>
            Welcome back, <b>{user?.username || "Admin"}</b>. Here's a quick
            overview of your platform statistics.
          </p>

        </div>

        <div className="stats">

          <div className="stat-card">
            <h2>24</h2>
            <p>Posts Scheduled</p>
          </div>

          <div className="stat-card">
            <h2>8.4%</h2>
            <p>Engagement Rate</p>
          </div>

          <div className="stat-card">
            <h2>312</h2>
            <p>Followers Gained</p>
          </div>

        </div>

        <div className="page-card">

          <h2>📈 Weekly Performance</h2>

          <table>

            <thead>

              <tr>
                <th>Day</th>
                <th>Posts</th>
                <th>Likes</th>
                <th>Comments</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>Monday</td>
                <td>3</td>
                <td>220</td>
                <td>35</td>
              </tr>

              <tr>
                <td>Tuesday</td>
                <td>4</td>
                <td>315</td>
                <td>48</td>
              </tr>

              <tr>
                <td>Wednesday</td>
                <td>2</td>
                <td>190</td>
                <td>22</td>
              </tr>

              <tr>
                <td>Thursday</td>
                <td>5</td>
                <td>420</td>
                <td>61</td>
              </tr>

              <tr>
                <td>Friday</td>
                <td>4</td>
                <td>380</td>
                <td>54</td>
              </tr>

            </tbody>

          </table>

        </div>

        <div className="info-card">

          <h3>📌 Summary</h3>

          <p>
            • Total scheduled posts this week: <b>24</b>
          </p>

          <p>
            • Engagement increased by <b>8.4%</b> compared to last week.
          </p>

          <p>
            • New followers gained this week: <b>312</b>
          </p>

          <p>
            • Best performing day: <b>Thursday</b>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Analytics;
