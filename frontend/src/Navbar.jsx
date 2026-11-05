
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("itcLoggedIn") === "true"
  );

  useEffect(() => {
    function updateLoginStatus() {
      setIsLoggedIn(
        localStorage.getItem("itcLoggedIn") === "true"
      );
    }

    window.addEventListener("authChanged", updateLoginStatus);

    return () => {
      window.removeEventListener("authChanged", updateLoginStatus);
    };
  }, []);

  function handleLogout() {
    localStorage.removeItem("itcLoggedIn");
    window.dispatchEvent(new Event("authChanged"));
  }

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <div className="logo-icon">ITC</div>
        <div>ITC<span> CLUB</span></div>
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <a href="/#about">About</a>
        <a href="/#activities">Activities</a>
        <a href="/#values">Our Values</a>
        <Link to="/events">Events</Link>

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="nav-login logout-button"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="nav-login">
            Login
          </Link>
        )}

        <a href="/#join" className="join-nav">Join Us</a>
      </nav>
    </header>
  );
}
