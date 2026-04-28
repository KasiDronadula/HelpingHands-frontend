import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page-wrapper" style={{ textAlign: "center" }}>
      
      <h1 style={{ fontSize: "80px", marginBottom: "10px" }}>404</h1>

      <h2 style={{ marginBottom: "10px" }}>
        Oops! Page not found
      </h2>

      <p style={{ marginBottom: "20px", color: "#555" }}>
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>

    </div>
  );
};

export default NotFound;