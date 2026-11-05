import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="logo">
        <div className="logo-icon">ITC</div>
        <div>ITC<span> CLUB</span></div>
      </Link>

      <p>University of Blida 1 · Algeria</p>
      <p>© 2026 ITC Club. All rights reserved.</p>
    </footer>
  );
}