import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../App.css";

const Compose = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Technology");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !date) {
      alert("Please fill all the fields.");
      return;
    }

    alert("✅ Post Scheduled Successfully!");

    setTitle("");
    setCategory("Technology");
    setDate("");
    setDescription("");
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">

        <div className="page-card">
          <h1>✍️ Compose New Post</h1>
          <p>Create and schedule your content.</p>
        </div>

        <div className="page-card">

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Post Title</label>

              <input
                className="form-control"
                type="text"
                placeholder="Enter post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Category</label>

              <select
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Technology</option>
                <option>Education</option>
                <option>Business</option>
                <option>Sports</option>
                <option>Entertainment</option>
              </select>
            </div>

            <div className="form-group">
              <label>Schedule Date</label>

              <input
                className="form-control"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Description</label>

              <textarea
                className="form-control"
                placeholder="Write your post..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button className="primary-btn" type="submit">
              Schedule Post
            </button>

          </form>

        </div>

        <div className="info-card">

          <h3>📄 Live Preview</h3>

          <br />

          <h2>{title || "Post Title"}</h2>

          <br />

          <p>
            <strong>Category:</strong> {category}
          </p>

          <br />

          <p>
            <strong>Schedule:</strong>{" "}
            {date || "No date selected"}
          </p>

          <br />

          <p>
            {description ||
              "Your post preview will appear here..."}
          </p>

        </div>

      </div>
    </div>
  );
};

export default Compose;
