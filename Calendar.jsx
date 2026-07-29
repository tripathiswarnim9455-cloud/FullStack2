import React from "react";
import Sidebar from "../components/Sidebar";
import "../App.css";

const Calendar = () => {
  const schedule = [
    {
      date: "29 Jul 2026",
      title: "JWT Authentication Lab",
      status: "Completed",
    },
    {
      date: "30 Jul 2026",
      title: "React Project Submission",
      status: "Pending",
    },
    {
      date: "02 Aug 2026",
      title: "Database Viva",
      status: "Scheduled",
    },
    {
      date: "05 Aug 2026",
      title: "Redux Toolkit Practice",
      status: "Upcoming",
    },
  ];

  const days = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">

        <div className="page-card">
          <h1>📅 Publishing Calendar</h1>
          <p>
            Manage your upcoming tasks, events and project deadlines.
          </p>
        </div>

        <div className="page-card">

          <h2>Week Overview</h2>

          <div className="calendar-grid">
            {days.map((day) => (
              <div key={day} className="day">
                {day}
              </div>
            ))}
          </div>

          <div className="calendar-body">
            Calendar Preview
          </div>

        </div>

        <div className="page-card">

          <h2>Upcoming Schedule</h2>

          <table>

            <thead>

              <tr>
                <th>Date</th>
                <th>Event</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              {schedule.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.title}</td>
                  <td>{item.status}</td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

        <div className="info-card">

          <h3>Today's Agenda</h3>

          <ul
            style={{
              marginTop: "15px",
              lineHeight: "2",
              paddingLeft: "20px",
            }}
          >
            <li>10:00 AM — React Practical</li>
            <li>12:00 PM — JWT Authentication Demo</li>
            <li>2:00 PM — Redux Toolkit Practice</li>
            <li>4:00 PM — Project Review Meeting</li>
          </ul>

        </div>

      </div>
    </div>
  );
};

export default Calendar;