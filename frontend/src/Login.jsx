
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    setMessage("");
    setIsSuccess(false);
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok && data.success === true) {
        localStorage.setItem("itcLoggedIn", "true");
        window.dispatchEvent(new Event("authChanged"));
        navigate("/");
      } else {
        setMessage(data.message || "Incorrect username or password.");
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage("Cannot connect to the server. Please try again.");
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">

        <Link to="/" className="login-logo">
          ITC <span>CLUB</span>
        </Link>

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Log in to your ITC Club account
        </p>

        <form onSubmit={handleLogin}>
          <div className="login-field">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          <button
            type="submit"
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? "LOGGING IN..." : "LOG IN"}
          </button>

          {message && (
            <p className={`login-message ${isSuccess ? "success" : "error"}`}>
              {message}
            </p>
          )}
        </form>

        <div className="login-back">
          <Link to="/">← Back to Home</Link>
        </div>

        <div className="login-footer">
          ITC Club — University of Blida 1
        </div>

      </div>
    </div>
  );
}

export default Login;
